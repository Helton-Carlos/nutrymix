import { defineConfig } from 'vitest/config';
import { VitePWA } from 'vite-plugin-pwa'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(), 
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg}',
        ],
      },
      manifest: { 
        theme_color: '#5278FF',
        background_color: '#FFF',
        display: 'standalone',
        start_url: '/',
        name: 'Nutrymix',
        short_name: 'Nutrymix',
        description: 'Nutrymix projeto CRM para de nutricionista. Vue3, Vite, Typescript, Vitest e Tailwind CSS e bibliotecas adicionais.',
        lang: 'pt-BR',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',  
            type: 'image/png',
          },
        ],
      }
    })
],
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/layout", replacement: "/src/layout" },
      { find: "@/components", replacement: "/src/components" },
      { find: "@/types", replacement: "/src/types" },
      { find: "@/use", replacement: "/src/use"}
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});