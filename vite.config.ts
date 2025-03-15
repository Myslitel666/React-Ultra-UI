import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts', // точка входа для библиотеки
      name: 'UltraUI',
      fileName: (format) => `ultra-ui.${format}.js`,
    }
  }
})
