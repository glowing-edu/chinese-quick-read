import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' makes assets relative so the build works on GitHub Pages
// project sites (e.g. https://user.github.io/kinderchi/) as well as locally.
export default defineConfig({
  base: './',
  plugins: [react()],
})
