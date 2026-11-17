# Motion Lab

**Experimenta con el movimiento.**

Motion Lab es un laboratorio interactivo de animación y gestos desarrollado para Android. Su propósito es explorar diferentes posibilidades de interacción mediante animaciones fluidas, movimientos táctiles y sensores del dispositivo.

La aplicación reúne seis experimentos independientes en una interfaz minimalista de temática oscura, desde los cuales se pueden explorar distintas técnicas de animación e interacción.

## Características

La aplicación incluye seis experimentos:

| Experimento | Descripción |
| --- | --- |
| **01. Drag & Rotate** | Arrastra una figura por la pantalla y observa cómo rota según la dirección del movimiento horizontal. |
| **02. Loading Animation** | Explora una animación de carga con un spinner y una barra de progreso que funcionan en ciclos infinitos. |
| **03. Multitouch Gestures** | Interactúa con una fotografía utilizando gestos multitáctiles: desplazamiento, zoom y rotación. |
| **04. Bounce Animation** | Mantén presionado un círculo para comprimirlo y suéltalo para observar el efecto de rebote. |
| **05. Animated Carousel** | Navega por un carrusel horizontal de tarjetas con transiciones animadas. Puedes seleccionar una tarjeta para acceder a su experimento. |
| **06. Accelerometer Animation** | Agita un dispositivo Android para activar una animación de vibración. También puedes ajustar la sensibilidad. |

Además, cuenta con un **menú lateral de navegación (Drawer)** que permite acceder al inicio y a cualquiera de los seis experimentos.

## Tecnologías utilizadas

- **React Native:** desarrollo de la aplicación móvil.
- **Expo SDK 58:** entorno y herramientas de desarrollo.
- **TypeScript:** tipado estático y organización del código.
- **React Native Reanimated:** implementación de animaciones.
- **React Native Gesture Handler:** gestión de gestos e interacciones táctiles.
- **React Navigation Drawer:** navegación mediante menú lateral.
- **Expo Sensors:** acceso al acelerómetro del dispositivo.

## Requisitos previos

- Node.js compatible con Expo SDK 58.
- pnpm 10 o posterior.
- Expo Go compatible con SDK 58 o Android Studio con un emulador configurado.
- Un dispositivo Android físico para probar detección de sacudidas reales.

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/DD150602/motion-lab.git
```

Ingresa a la carpeta e instala las dependencias:

```bash
cd motion-lab
pnpm install
```

## Ejecución

Inicia el servidor de desarrollo:

```bash
pnpm start
```

Desde la terminal de Expo, presiona `a` para abrir Android. También puedes ejecutar `pnpm android` si tienes un emulador abierto o un dispositivo conectado.

Para iniciar el servidor limpiando la caché:

```bash
pnpm exec expo start --clear
```

## Verificación del proyecto

```bash
pnpm typecheck
pnpm doctor
pnpm exec expo install --check
```

Estos comandos revisan los tipos de TypeScript, la configuración de Expo y la compatibilidad de las dependencias.

## Prueba del acelerómetro

El experimento **Accelerometer Animation** utiliza el sensor del dispositivo para detectar movimientos bruscos y activar una animación.

- **Dispositivo físico:** agita el teléfono Android para comprobar la detección de movimiento real.
- **Emulador:** abre `Extended controls → Virtual sensors → Device Pose` en Android Studio y modifica la orientación o posición para generar lecturas simuladas.

El emulador genera datos simulados, por lo que no reproduce exactamente una sacudida física.

## Navegación

El menú lateral está disponible desde las pantallas de la aplicación y permite acceder a:

- Inicio.
- Drag & Rotate.
- Loading Animation.
- Multitouch Gestures.
- Bounce Animation.
- Animated Carousel.
- Accelerometer Animation.

## Objetivo del proyecto

Motion Lab integra diferentes técnicas de animación, gestos y detección de movimiento en una sola aplicación, demostrando cómo estas herramientas pueden utilizarse para crear experiencias móviles interactivas.
