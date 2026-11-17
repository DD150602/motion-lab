import React from 'react';
import { Image, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { ExperimentLayout } from '../components/ExperimentLayout';
import { ResetButton } from '../components/ResetButton';
import { COLORS } from '../constants/experiments';
import { styles } from '../constants/styles';
const flower = require('../../assets/images/flower.jpg');
export function MultitouchScreen({ navigation }: any) { const scale = useSharedValue(1); const savedScale = useSharedValue(1); const rotation = useSharedValue(0); const savedRotation = useSharedValue(0); const x = useSharedValue(0); const y = useSharedValue(0); const sx = useSharedValue(0); const sy = useSharedValue(0);
 const pan = Gesture.Pan().onBegin(() => { sx.value=x.value; sy.value=y.value; }).onUpdate(e => { x.value=Math.max(-105,Math.min(105,sx.value+e.translationX)); y.value=Math.max(-100,Math.min(100,sy.value+e.translationY)); });
 const pinch = Gesture.Pinch().onUpdate(e => { scale.value=Math.max(0.75,Math.min(2.5,savedScale.value*e.scale)); }).onEnd(()=>{ savedScale.value=scale.value; });
 const rotate = Gesture.Rotation().onUpdate(e=>{ rotation.value=savedRotation.value+e.rotation; }).onEnd(()=>{ savedRotation.value=rotation.value; });
 const gesture=Gesture.Simultaneous(pan,pinch,rotate); const imageStyle=useAnimatedStyle(()=>({ transform:[{translateX:x.value},{translateY:y.value},{scale:scale.value},{rotate:`${rotation.value}rad`}] }));
 const reset=()=>{scale.value=withSpring(1);savedScale.value=1;rotation.value=withSpring(0);savedRotation.value=0;x.value=withSpring(0);y.value=withSpring(0);};
 return <ExperimentLayout navigation={navigation} index={2}><View style={[styles.area,{height:350}]}><View style={{position:'absolute',top:16,left:16,zIndex:1,flexDirection:'row',alignItems:'center',gap:6,backgroundColor:'#151519AA',padding:8,borderRadius:9}}><Ionicons name="image-outline" size={14} color={COLORS.accent}/><Text style={styles.muted}>FLOR · GESTO LIBRE</Text></View><GestureDetector gesture={gesture}><Animated.View style={[{width:230,height:270,borderRadius:20,overflow:'hidden'},imageStyle]}><Image source={flower} resizeMode="cover" style={{width:'100%',height:'100%'}} /></Animated.View></GestureDetector></View><View style={{marginTop:16}}><ResetButton label="Restablecer" onPress={reset}/></View></ExperimentLayout>; }
