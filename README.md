# Motion Lab

Laboratorio interactivo de animación y movimiento para Android, hecho con Expo, React Native y TypeScript.

## Requisitos

- Node.js compatible con Expo SDK 57.
- pnpm 10 o posterior.
- Expo Go compatible o Android Studio/emulador para compilar un development build.

## Instalar y ejecutar

```bash
pnpm install
pnpm start
```

Desde la terminal de Expo, presiona `a` para abrir Android. También puedes usar `pnpm android` con un emulador abierto o un dispositivo conectado. Para limpiar la caché: `pnpm exec expo start --clear`.

## Verificación

```bash
pnpm typecheck
pnpm doctor
pnpm exec expo install --check
```

## Experimentos

1. **Drag & Rotate:** arrastra la figura; el giro sigue el desplazamiento horizontal. Usa Reiniciar para centrarla.
2. **Loading Animation:** spinner y progreso recorren ciclos infinitos al entrar.
3. **Multitouch Gestures:** combina arrastre, pinza y rotación sobre la fotografía local. Restablecer recupera su estado inicial.
4. **Bounce Animation:** mantén presionado el círculo y suéltalo para ver el rebote.
5. **Animated Carousel:** desliza para explorar; toca una tarjeta para abrir su experimento.
6. **Accelerometer Animation:** agita un Android físico. Ajusta sensibilidad. El listener del acelerómetro se elimina al salir.

En emulador, abre **Extended controls → Virtual sensors → Device Pose** y cambia la orientación o posición para producir lecturas. El emulador simula esos datos; solo un dispositivo físico mide una sacudida real.

El Drawer lateral abre desde cualquier pantalla y ofrece Inicio y los seis experimentos.
