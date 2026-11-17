import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppHeader } from '../components/AppHeader';
import { ExperimentCard } from '../components/ExperimentCard';
import { EXPERIMENTS } from '../constants/experiments';
import { styles } from '../constants/styles';
export function HomeScreen({ navigation }: any) { return <SafeAreaView style={styles.screen} edges={['top', 'bottom']}><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}><AppHeader navigation={navigation} /><Text style={styles.eyebrow}>LABORATORIO INTERACTIVO</Text><Text style={[styles.title, { fontSize: 34, lineHeight: 40 }]}>Explora el{ '\n' }movimiento<Text style={{ color: '#F93D89' }}>.</Text></Text><Text style={[styles.body, { maxWidth: 330, marginBottom: 25 }]}>Seis experimentos para descubrir lo que el movimiento puede hacer.</Text><View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>{EXPERIMENTS.map((item, i) => <ExperimentCard key={item.route} item={item} index={i} onPress={() => navigation.navigate(item.route)} />)}</View><Text style={[styles.muted, { textAlign: 'center', marginTop: 8 }]}>Toca un experimento para comenzar</Text></ScrollView></SafeAreaView>; }
