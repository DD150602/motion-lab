import React from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { ExperimentLayout } from '../components/ExperimentLayout';
import { COLORS } from '../constants/experiments';
import { styles } from '../constants/styles';
export function BounceScreen({ navigation }: any) { const scale=useSharedValue(1); const press=Gesture.LongPress().minDuration(0).onBegin(()=>{scale.value=withTiming(0.78,{duration:120});}).onFinalize(()=>{scale.value=withSpring(1,{damping:5,stiffness:220,mass:0.7});}); const anim=useAnimatedStyle(()=>({transform:[{scale:scale.value}]})); return <ExperimentLayout navigation={navigation} index={3}><View style={styles.area}><GestureDetector gesture={press}><Animated.View style={[{width:148,height:148,borderRadius:80,backgroundColor:COLORS.accent,alignItems:'center',justifyContent:'center',shadowColor:COLORS.accent,shadowOpacity:0.18,shadowRadius:28,elevation:8},anim]}><Ionicons name="radio-button-on-outline" size={54} color="white"/></Animated.View></GestureDetector><Text style={[styles.muted,{marginTop:23}]}>MANTÉN PRESIONADO</Text></View></ExperimentLayout>; }
