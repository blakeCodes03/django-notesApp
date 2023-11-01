import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: { manifest: true },
  base: process.env.mode === "production" ? "/static/" : "/",
  root: "./src",
  // plugins: [reactRefresh()],
  plugins: [react()],
})
