import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    // cors error fixed
    proxy:{
      "/api":{
        target:"http://localhost:3500",
        changeOrigin:true,
        secure:false
      }
    }
  }
})