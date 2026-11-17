export const COLORS = { accent: '#F93D89', background: '#151519', surface: '#24242B', elevated: '#303039', text: '#FFFFFF', secondary: '#A5A2AA', border: '#383840', green: '#75D6A4' } as const;
export const EXPERIMENTS = [
  { route: 'Drag & Rotate', title: 'Drag & Rotate', short: 'Arrastra y rota', description: 'Arrastra la figura y observa cómo gira con tu movimiento.', icon: 'move-outline', hint: 'Mantén presionada la figura y arrástrala. La rotación sigue tu desplazamiento horizontal.' },
  { route: 'Loading Animation', title: 'Loading Animation', short: 'Carga continua', description: 'Un ciclo infinito de rotación y progreso.', icon: 'sync-outline', hint: 'Spinner y barra repiten su ciclo de forma independiente.' },
  { route: 'Multitouch Gestures', title: 'Multitouch Gestures', short: 'Gestos multitáctiles', description: 'Transforma una imagen con tus dedos.', icon: 'expand-outline', hint: 'Usa dos dedos para pellizcar y rotar; arrastra para mover la imagen.' },
  { route: 'Bounce Animation', title: 'Bounce Animation', short: 'Rebote elástico', description: 'Presiona la figura y siente el rebote.', icon: 'radio-button-on-outline', hint: 'Mantén presionado el círculo y suéltalo para activar el resorte.' },
  { route: 'Animated Carousel', title: 'Animated Carousel', short: 'Carrusel animado', description: 'Explora experimentos con un gesto horizontal.', icon: 'albums-outline', hint: 'Desliza las tarjetas o toca una para abrir su experimento.' },
  { route: 'Accelerometer Animation', title: 'Accelerometer Animation', short: 'Acelerómetro', description: 'Agita el dispositivo para activar movimiento.', icon: 'phone-portrait-outline', hint: 'Agita el dispositivo físico. El sensor se desactiva al salir de esta pantalla.' },
];
