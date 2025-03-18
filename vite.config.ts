import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: 'src/lib/index.ts', // Точка входа в библиотеку
      name: 'MyLib', // Глобальное имя для UMD (если понадобится)
      formats: ['es', 'cjs'], // Собираем ESM и CJS
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Не включаем React в бандл
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
