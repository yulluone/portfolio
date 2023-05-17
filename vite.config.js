import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://dev-portfolio-starter.vercel.app/work/dev-potfolio-starter/"
  plugins: [vue()],
  test: {
    files: ["src/**/*.spec.js"],
    globals: true,
    environment: "jsdom",
  },
  
});
