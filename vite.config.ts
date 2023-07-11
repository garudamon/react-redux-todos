/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts"
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
      utils:resolve(__dirname, "./src/utils/"),
      store: resolve(__dirname, "./src/store/"),
      components: resolve(__dirname, "./src/components/"),
      mocks: resolve(__dirname, "./src/mocks/"),
      views: resolve(__dirname, "./src/views/"),
      layouts: resolve(__dirname, "./src/layouts/"),
      hooks: resolve(__dirname, "./src/hooks/"),
    }
  }
})
