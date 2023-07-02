/// <reference types="vite/client" />
/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import libCss from 'vite-plugin-libcss'
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'

const res = path => resolve(__dirname, path)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libCss()],
  resolve: {
    alias: {
      '@': res('src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup'
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    // css: true,
  },
  build: {
    lib: {
      // The entry file will contain exports that can be imported by users of your package
      entry: res('src/main.tsx'),
      name: 'a-ui'
      // fileName: format => `a-ui.${format}.js`
    },
    rollupOptions: {
      // Make sure to externalize those dependencies that you don't want packaged into the library
      // external: ['react', 'react-dom'],
      plugins: [excludeDependenciesFromBundle()],
      output: {
        // A global variable is provided for these externalized dependencies in the UMD build pattern
        globals: {
          react: 'React',
          'react-dom': 'react-dom'
        }
      }
    }
  }
})
