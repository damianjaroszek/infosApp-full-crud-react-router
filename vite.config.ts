import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // gdybyśy chcieli wersję swc @vitejs/plugin-react-swc

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        ['babel-plugin-styled-components', {
          displayName: true
        }]
      ]
    }
  })],

  build:{
    outDir: 'build',
  },
  server: {
    port: 3123
  },
  css: {
    devSourcemap: true, // uruchamia w trybie deweloperskim dostęp do map źródłowych
  }
})




