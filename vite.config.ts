import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build:{
    target:"esnext",
    rollupOptions:{
      input:{
        popup: "./popup/index.html",
      },
      output:{
        entryFileNames: "assets/[name].js"
      }
    },
  },
})
