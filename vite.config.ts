import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 4400,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // "@components": path.resolve(__dirname, "src/components"),
      // "@pages": path.resolve(__dirname, "src/pages"),
      // "@router": path.resolve(__dirname, "src/router"),
      // "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
