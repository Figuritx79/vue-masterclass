import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import VueRouter from 'vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue(),
    vueDevTools(),
    tailwindcss(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ], // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        {
          pinia: ['defineStore', 'storeToRefs', 'acceptHMRUpdate'],
        },
      ],
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: true,
      viteOptimizeDeps: true,
      dirs: ['src/stores'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
