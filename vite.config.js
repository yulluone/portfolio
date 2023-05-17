import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    files: ["src/**/*.spec.js"],
    globals: true,
    environment: "jsdom",
  },
  
});
