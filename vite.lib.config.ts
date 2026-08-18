import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: {
      entry: {
        index: resolve(import.meta.dirname, 'src/lib/index.ts'),
        styles: resolve(import.meta.dirname, 'src/lib/styles.ts'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
      cssFileName: 'styles',
    },
    rolldownOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@base-ui/react/button',
      ],
    },
    sourcemap: true,
  },
})
