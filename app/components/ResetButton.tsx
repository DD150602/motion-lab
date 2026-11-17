import React from 'react';
import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../constants/styles';
export function ResetButton({ label = 'Reiniciar', onPress }: { label?: string; onPress: () => void }) { return <Pressable onPress={onPress} style={styles.secondaryButton}><Ionicons name="refresh-outline" size={18} color="white" /><Text style={styles.buttonText}>{label}</Text></Pressable>; }
