import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/p02-new-portfolio/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))
