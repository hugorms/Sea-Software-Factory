/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'carbon-black': '#121212',     // Negro carbón (fondos principales)
          'anthracite': '#292929',       // Gris antracita (cards, navbar)
          'gray-medium': '#737373',      // Gris medio (textos secundarios)
          'gray-light': '#ebebeb',       // Gris muy claro (fondos claros)
          'white': '#ffffff',            // Blanco puro (highlights)
          // Colores verdes para acentos (mantener compatibilidad)
          'dark-green': '#3e704d',
          'green-medium': '#57b279',
        }
      }
    },
  },
  plugins: [],
};
