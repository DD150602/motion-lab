import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { ExperimentLayout } from '../components/ExperimentLayout';
import { ResetButton } from '../components/ResetButton';
import { COLORS } from '../constants/experiments';
import { styles } from '../constants/styles';
export function DragRotateScreen({ navigation }: any) {
 const { width } = useWindowDimensions(); const x = useSharedValue(0); const y = useSharedValue(0); const rotation = useSharedValue(0); const startX = useSharedValue(0); const startY = useSharedValue(0); const limit = Math.max(75, (width - 44 - 74) / 2);
 const pan = Gesture.Pan().onBegin(() => { startX.value = x.value; startY.value = y.value; }).onUpdate((e) => { x.value = Math.max(-limit, Math.min(limit, startX.value + e.translationX)); y.value = Math.max(-110, Math.min(110, startY.value + e.translationY)); rotation.value = Math.max(-55, Math.min(55, e.translationX * 0.42)); }).onEnd(() => { rotation.value = withSpring(0, { damping: 14 }); });
 const style = useAnimatedStyle(() => ({ transform: [{ translateX: x.value }, { translateY: y.value }, { rotate: `${rotation.value}deg` }] }));
 const reset = () => { x.value = withSpring(0); y.value = withSpring(0); rotation.value = withSpring(0); };
 return <ExperimentLayout navigation={navigation} index={0}><View style={styles.area}><View style={{ position: 'absolute', top: 18, flexDirection: 'row', gap: 6, alignItems: 'center' }}><Ionicons name="hand-left-outline" size={14} color={COLORS.secondary} /><Text style={styles.muted}>ARRASTRA LA FIGURA</Text></View><GestureDetector gesture={pan}><Animated.View style={[{ width: 84, height: 84, borderRadius: 24, backgroundColor: COLORS.accent, alignItems: 'center', justifyContent: 'center' }, style]}><Ionicons name="move-outline" size={31} color="white" /></Animated.View></GestureDetector></View><View style={{ marginTop: 16 }}><ResetButton onPress={reset} /></View></ExperimentLayout>;
}
