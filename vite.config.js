import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
      'assets': '/src/assets',
      'components': '/src/components',
      'pages': '/src/pages',
      'api': '/src/api',
    }
  }, 

   server: {
    proxy: {
      '/api': 'https://agricon-django-backend.onrender.com',
    }
  }
})
