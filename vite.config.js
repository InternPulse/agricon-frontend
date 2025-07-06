import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', 
  plugins: [
    react(),
    tailwindcss({}),
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': 'https://agricon-django-backend.onrender.com',
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      'assets': '/src/assets',
      'components': '/src/components',
      'pages': '/src/pages',
      'api': '/src/api',
    }
  }, 
})
