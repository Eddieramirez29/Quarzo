import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Quarzo/' // Cambia 'quarzo' por el nombre real de tu repositorio
})
