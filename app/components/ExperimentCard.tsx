import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/experiments';
import { styles } from '../constants/styles';
export function ExperimentCard({ item, index, onPress }: { item: any; index: number; onPress: () => void }) { return <Pressable onPress={onPress} style={[styles.card, { width: '48%', minHeight: 153, padding: 15, marginBottom: 12 }]}><View style={{ width: 39, height: 39, borderRadius: 13, backgroundColor: COLORS.elevated, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Ionicons name={item.icon as any} size={20} color={COLORS.accent} /></View><Text style={styles.counter}>{String(index + 1).padStart(2, '0')}</Text><Text style={{ color: COLORS.text, fontWeight: '700', fontSize: 14, marginTop: 5 }}>{item.short}</Text><Text style={[styles.muted, { marginTop: 4 }]} numberOfLines={2}>{item.description}</Text></Pressable>; }
