import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 'https://codingmarathon3-frontend.onrender.com',
    proxy: {
      '/api': {
//        target: 'http://localhost:4000',
        target: 'https://codingmarathon3-qvub.onrender.com',
        changeOrigin: true,
      },
    }
  },
})

