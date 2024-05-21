import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, './src/index.html'),
      },
    },
    assetsInlineLimit: 0,
  },
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, './src/include/common'),
    }),
  ],
})
