import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // forces IPv4
    port: 3000,      // change from 5173 → 3000
    strictPort: true
  }
})
