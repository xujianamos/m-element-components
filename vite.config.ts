/*
 * @Author: xujian
 * @Date: 2022-03-25 22:37:21
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-27 11:11:40
 * @Description:
 * @FilePath: /m-element-components/vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      plugins: path.resolve(__dirname, "src/plugins"),
      views: path.resolve(__dirname, "src/views"),
      layout: path.resolve(__dirname, "src/layout"),
      utils: path.resolve(__dirname, "src/utils"),
      apis: path.resolve(__dirname, "src/apis"),
    },
  },
});
