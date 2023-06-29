/// <reference types="vite/client" />
/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const res = path => resolve(__dirname, path)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
  }
})
