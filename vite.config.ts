import { defineConfig } from 'vitest/config';
import { VitePWA } from 'vite-plugin-pwa'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(), 
    VitePWA()
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