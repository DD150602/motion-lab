import { useCallback, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Accelerometer } from 'expo-sensors';

export function useShakeDetection(onShake: () => void, sensitivity: number) {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [active, setActive] = useState(false);
  const lastShake = useRef(0);
  const filteredMagnitude = useRef(0);

  useFocusEffect(
    useCallback(() => {
      let disposed = false;
      let appIsActive = AppState.currentState === 'active';
      let requestId = 0;
      let requesting = false;
      let subscription: ReturnType<typeof Accelerometer.addListener> | undefined;

      const stop = () => {
        requestId += 1;
        requesting = false;
        subscription?.remove();
        subscription = undefined;
        setActive(false);
      };

      const start = () => {
        if (!appIsActive || requesting || subscription) return;

        requesting = true;
        const currentRequest = ++requestId;

        void (async () => {
          try {
            const isAvailable = await Accelerometer.isAvailableAsync();
            if (disposed || !appIsActive || currentRequest !== requestId) return;

            setAvailable(isAvailable);
            if (!isAvailable) return;

            Accelerometer.setUpdateInterval(80);
            const nextSubscription = Accelerometer.addListener(({ x, y, z }) => {
              const gravity = Math.sqrt(x * x + y * y + z * z);
              filteredMagnitude.current =
                filteredMagnitude.current * 0.72 + Math.abs(gravity - 1) * 0.28;

              if (
                filteredMagnitude.current > sensitivity &&
                Date.now() - lastShake.current > 1100
              ) {
                lastShake.current = Date.now();
                onShake();
              }
            });

            if (disposed || !appIsActive || currentRequest !== requestId) {
              nextSubscription.remove();
              return;
            }

            subscription = nextSubscription;
            setActive(true);
          } catch {
            if (!disposed && appIsActive && currentRequest === requestId) {
              setAvailable(false);
            }
          } finally {
            if (currentRequest === requestId) requesting = false;
          }
        })();
      };

      const appState = AppState.addEventListener('change', (state) => {
        appIsActive = state === 'active';
        if (appIsActive) start();
        else stop();
      });

      start();

      return () => {
        disposed = true;
        appState.remove();
        stop();
      };
    }, [onShake, sensitivity]),
  );

  return { available, active };
}
