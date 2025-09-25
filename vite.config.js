import MillionLint from '@million/lint';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import million from 'million/compiler'
import svgr from 'vite-plugin-svgr';
export default defineConfig({
  plugins: [MillionLint.vite({
    enabled: true
  }), million.vite({ 
    auto: true 
  }), react(),svgr()],
})