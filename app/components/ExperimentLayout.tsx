import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { AppHeader } from './AppHeader';
import { EXPERIMENTS, COLORS } from '../constants/experiments';
import { styles } from '../constants/styles';
export function ExperimentLayout({ navigation, index, children }: { navigation: any; index: number; children: React.ReactNode }) {
  const item = EXPERIMENTS[index];
  return <SafeAreaView style={styles.screen} edges={['top', 'bottom']}><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}><AppHeader navigation={navigation} /><View style={styles.experimentHeader}><Text style={styles.eyebrow}>EXPERIMENTO {String(index + 1).padStart(2, '0')}</Text><Text style={styles.counter}>{String(index + 1).padStart(2, '0')} / 06</Text></View><Text style={styles.title}>{item.title}</Text><Text style={styles.body}>{item.description}</Text>{children}<View style={styles.instruction}><Ionicons name="information-circle-outline" size={20} color={COLORS.accent} /><Text style={[styles.muted, { flex: 1, lineHeight: 18 }]}>{item.hint}</Text></View></ScrollView></SafeAreaView>;
}
