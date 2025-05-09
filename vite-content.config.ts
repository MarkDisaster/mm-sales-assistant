import { defineConfig } from 'vite'

export default defineConfig({
  build:{
    emptyOutDir: false,
    rollupOptions:{
      input:{
        content: "./content_script/content-script.ts",
        "content-main": "./content_script/content-main.tsx",
      },
      output:{
        entryFileNames: "assets/[name].js"
      }
    },
  },
})
