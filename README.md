# Game-Hanging

Este proyecto es un juego de ahorcado desarrollado con **Vite** y **TypeScript**.

## Procedimientos realizados

1. **Inicialización del proyecto con Vite y TypeScript:**
  ```bash
  npm create vite@latest
  # Selecciona TypeScript + React
  npm install
  ```

2. **Estructuración de la carpeta `src`:**
  - Se crearon los archivos principales para la lógica y la interfaz del juego.

3. **Desarrollo de componentes React y lógica del juego:**
  - Implementación de la lógica del ahorcado y componentes visuales.

## Estructura y explicación de los archivos en `src`

- **assets**
  Carpeta para las imágenes de 0-9 indicando graficamente el inicio y el final del juego .

- **components/**  
  Carpeta con componentes reutilizables, por ejemplo:
  - **HangImage.tsx**: Dibuja el ahorcado con las images de la carpetas assets.

- **main.tsx**  
  Punto de entrada de la aplicación. Renderiza el componente principal en el DOM.

- **App.tsx**  
  Componente raíz. Contiene la estructura principal del juego y gestiona el estado global.

- **styles/**  
  Archivos CSS o módulos de estilos para personalizar la apariencia.

## Cómo ejecutar el proyecto
  Comando en la terminal:   "npm run dev "