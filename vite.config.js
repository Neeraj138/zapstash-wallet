import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import wasm from 'vite-plugin-wasm'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), nodePolyfills(), wasm()],
  build: {
    target: "es2022"
  },
  esbuild: {
    target: "es2022"
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022"
    }
  }
})
