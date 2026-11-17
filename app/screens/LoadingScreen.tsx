import React, { useCallback } from 'react';
import { AppState, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { ExperimentLayout } from '../components/ExperimentLayout';
import { COLORS } from '../constants/experiments';
import { styles } from '../constants/styles';

export function LoadingScreen({ navigation }: any) {
  const spin = useSharedValue(0);
  const progress = useSharedValue(0);

  useFocusEffect(
    useCallback(() => {
      let running = false;

      const stop = () => {
        if (running) {
          cancelAnimation(spin);
          cancelAnimation(progress);
          running = false;
        }
        spin.value = 0;
        progress.value = 0;
      };

      const start = () => {
        if (running) return;
        spin.value = 0;
        progress.value = 0;
        spin.value = withRepeat(
          withTiming(360, { duration: 1100, easing: Easing.linear }),
          -1,
          false,
        );
        progress.value = withRepeat(
          withTiming(1, { duration: 2200, easing: Easing.inOut(Easing.cubic) }),
          -1,
          true,
        );
        running = true;
      };

      if (AppState.currentState === 'active') start();
      const appState = AppState.addEventListener('change', (state) => {
        if (state === 'active') start();
        else stop();
      });

      return () => {
        appState.remove();
        stop();
      };
    }, [progress, spin]),
  );

  const spinner = useAnimatedStyle(() => ({
    transform: [{ rotate: `${spin.value}deg` }],
  }));
  const bar = useAnimatedStyle(() => ({
    width: `${Math.max(8, progress.value * 100)}%`,
  }));

  return (
    <ExperimentLayout navigation={navigation} index={1}>
      <View style={[styles.area, { paddingHorizontal: 34 }]}>
        <Animated.View
          style={[
            {
              width: 76,
              height: 76,
              borderRadius: 40,
              borderWidth: 5,
              borderColor: COLORS.elevated,
              borderTopColor: COLORS.accent,
              borderRightColor: COLORS.accent,
              alignItems: 'center',
              justifyContent: 'center',
            },
            spinner,
          ]}
        >
          <Ionicons name="sparkles-outline" size={22} color={COLORS.accent} />
        </Animated.View>
        <Text style={{ color: COLORS.text, fontSize: 16, fontWeight: '600', marginTop: 22 }}>
          Preparando experiencia
        </Text>
        <Text style={[styles.muted, { marginTop: 6 }]}>El movimiento nunca se detiene</Text>
        <View
          style={{
            height: 7,
            borderRadius: 8,
            backgroundColor: COLORS.elevated,
            width: '100%',
            marginTop: 29,
            overflow: 'hidden',
          }}
        >
          <Animated.View
            style={[{ height: 7, backgroundColor: COLORS.accent, borderRadius: 8 }, bar]}
          />
        </View>
      </View>
    </ExperimentLayout>
  );
}
