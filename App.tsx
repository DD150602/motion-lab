import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, EXPERIMENTS } from './app/constants/experiments';
import { HomeScreen } from './app/screens/HomeScreen';
import { DragRotateScreen } from './app/screens/DragRotateScreen';
import { LoadingScreen } from './app/screens/LoadingScreen';
import { MultitouchScreen } from './app/screens/MultitouchScreen';
import { BounceScreen } from './app/screens/BounceScreen';
import { CarouselScreen } from './app/screens/CarouselScreen';
import { AccelerometerScreen } from './app/screens/AccelerometerScreen';
import { styles } from './app/constants/styles';

const Drawer = createDrawerNavigator();
const screens = [HomeScreen, DragRotateScreen, LoadingScreen, MultitouchScreen, BounceScreen, CarouselScreen, AccelerometerScreen];
const routes = ['Inicio', ...EXPERIMENTS.map((item) => item.route)];

function CustomDrawer(props: any) {
  return <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
    <View style={styles.drawerBrand}><Text style={styles.brandMark}>MOTION<Text style={{ color: COLORS.accent }}> LAB</Text></Text><Text style={styles.muted}>Experimenta con el movimiento</Text></View>
    {routes.map((route, i) => {
      const selected = props.state.index === i;
      const icon = i === 0 ? 'home-outline' : EXPERIMENTS[i - 1].icon;
      return <Pressable key={route} onPress={() => props.navigation.navigate(route)} style={[styles.drawerItem, selected && styles.drawerSelected]}>
        <Ionicons name={icon as any} size={19} color={selected ? COLORS.accent : COLORS.secondary} />
        <Text style={[styles.drawerLabel, selected && { color: COLORS.accent }]}>{route === 'Inicio' ? 'Inicio' : EXPERIMENTS[i - 1].title}</Text>
      </Pressable>;
    })}
    <View style={styles.drawerFooter}><View style={styles.smallDot} /><Text style={styles.muted}>Laboratorio interactivo · v1.0</Text></View>
  </DrawerContentScrollView>;
}

export default function App() {
  return <GestureHandlerRootView style={{ flex: 1 }}><SafeAreaProvider><NavigationContainer theme={{ ...DarkTheme, colors: { ...DarkTheme.colors, background: COLORS.background, card: COLORS.surface, text: COLORS.text, border: COLORS.border, primary: COLORS.accent } }}>
    <StatusBar style="light" /><Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerShown: false, drawerType: 'front', overlayColor: 'rgba(0,0,0,0.68)', drawerStyle: { width: '80%', maxWidth: 330, backgroundColor: COLORS.surface }, sceneStyle: { backgroundColor: COLORS.background }, swipeEdgeWidth: 60 }}>
      {screens.map((Screen, i) => <Drawer.Screen key={routes[i]} name={routes[i]} component={Screen} />)}
    </Drawer.Navigator>
  </NavigationContainer></SafeAreaProvider></GestureHandlerRootView>;
}
