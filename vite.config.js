import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['react-intersection-observer'],
  },
  server: {
    host: true, 
    port: 5173,
    allowedHosts: [
      '.ngrok-free.app',   // ✅ allow any ngrok free domain
      'localhost',         // local
      '127.0.0.1'          // loopback
    ],
  },
})
