import React, { useCallback, useRef, useState } from 'react';
import { AppState, Pressable, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { ExperimentLayout } from '../components/ExperimentLayout';
import { useShakeDetection } from '../hooks/useShakeDetection';
import { COLORS } from '../constants/experiments';
import { styles } from '../constants/styles';

export function AccelerometerScreen({ navigation }: any) {
  const [sensitivity, setSensitivity] = useState(0.48);
  const [count, setCount] = useState(0);
  const animationsAllowed = useRef(false);
  const x = useSharedValue(0);
  const scale = useSharedValue(1);

  useFocusEffect(
    useCallback(() => {
      const resetAnimation = () => {
        cancelAnimation(x);
        cancelAnimation(scale);
        x.value = 0;
        scale.value = 1;
      };

      animationsAllowed.current = AppState.currentState === 'active';
      const appState = AppState.addEventListener('change', (state) => {
        animationsAllowed.current = state === 'active';
        if (!animationsAllowed.current) resetAnimation();
      });

      return () => {
        animationsAllowed.current = false;
        appState.remove();
        resetAnimation();
        setCount(0);
      };
    }, [scale, x]),
  );

  const trigger = useCallback(() => {
    if (!animationsAllowed.current) return;

    setCount((current) => current + 1);
    scale.value = withSequence(
      withTiming(1.12, { duration: 100 }),
      withSpring(1, { damping: 5 }),
    );
    x.value = withSequence(
      withTiming(-15, { duration: 45 }),
      withTiming(15, { duration: 45 }),
      withTiming(-11, { duration: 45 }),
      withTiming(11, { duration: 45 }),
      withSpring(0, { damping: 5 }),
    );
  }, [scale, x]);

  const { available, active } = useShakeDetection(trigger, sensitivity);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { scale: scale.value }],
  }));

  return (
    <ExperimentLayout navigation={navigation} index={5}>
      <View style={styles.area}>
        <View
          style={{
            position: 'absolute',
            top: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 7,
          }}
        >
          <View
            style={[
              styles.smallDot,
              { backgroundColor: active ? COLORS.green : COLORS.secondary },
            ]}
          />
          <Text style={styles.muted}>
            {available === false
              ? 'SENSOR NO DISPONIBLE'
              : active
                ? 'ACELERÓMETRO ACTIVO'
                : 'CONECTANDO SENSOR'}
          </Text>
        </View>

        <Animated.View
          style={[
            {
              width: 112,
              height: 112,
              borderRadius: 32,
              backgroundColor: COLORS.accent,
              alignItems: 'center',
              justifyContent: 'center',
            },
            animatedStyle,
          ]}
        >
          <Ionicons name="phone-portrait-outline" size={46} color="white" />
        </Animated.View>
        <Text style={{ color: COLORS.text, fontSize: 17, fontWeight: '700', marginTop: 25 }}>
          {available === false
            ? 'Dispositivo sin acelerómetro'
            : active
              ? 'Agita tu dispositivo'
              : 'Comprobando sensor…'}
        </Text>
        <Text style={[styles.muted, { marginTop: 7 }]}>Sacudidas detectadas: {count}</Text>
      </View>

      <View style={[styles.card, { padding: 17, marginTop: 15 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 13 }}>
          <Text style={{ color: COLORS.text, fontWeight: '600' }}>Sensibilidad</Text>
          <Text style={styles.muted}>
            {sensitivity === 0.3 ? 'Baja' : sensitivity === 0.48 ? 'Media' : 'Alta'}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {[
            { value: 0.3, label: 'Baja' },
            { value: 0.48, label: 'Media' },
            { value: 0.7, label: 'Alta' },
          ].map((option) => (
            <Pressable
              key={option.label}
              onPress={() => setSensitivity(option.value)}
              style={{
                flex: 1,
                minHeight: 40,
                borderRadius: 11,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: sensitivity === option.value ? '#49303E' : COLORS.elevated,
                borderWidth: 1,
                borderColor: sensitivity === option.value ? COLORS.accent : COLORS.border,
              }}
            >
              <Text
                style={{
                  color: sensitivity === option.value ? COLORS.accent : COLORS.secondary,
                  fontSize: 13,
                  fontWeight: '600',
                }}
              >
                {option.label}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={[styles.muted, { lineHeight: 18, marginTop: 13 }]}>
          En emulador, usa Extended controls → Virtual sensors → Device Pose para simular movimiento.
        </Text>
      </View>
    </ExperimentLayout>
  );
}
