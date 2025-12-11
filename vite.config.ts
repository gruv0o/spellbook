import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // React + React Compiler
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler'], // ou supprime complètement {} si tu n’as pas d’options
        ],
      },
    }),

    // Tailwind v4 (plugin Vite dédié)
    tailwindcss(),
  ],
})
