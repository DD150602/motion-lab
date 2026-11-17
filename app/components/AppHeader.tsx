import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/experiments';
import { styles } from '../constants/styles';
export function AppHeader({ navigation }: { navigation: any }) { return <View style={styles.header}><View style={styles.headerLeft}><Pressable accessibilityLabel="Abrir menú" onPress={() => navigation.openDrawer()} style={styles.iconButton}><Ionicons name="menu-outline" size={23} color={COLORS.text} /></Pressable><Text style={styles.brand}>MOTION<Text style={{ color: COLORS.accent }}> LAB</Text></Text></View><View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}><View style={styles.smallDot} /><Text style={styles.muted}>EN VIVO</Text></View></View>; }
