import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    hmr: {
      overlay: true,
      port: 24678, // Use a different port for HMR
    },
    watch: {
      usePolling: true, // Helps with file watching on some systems
    },
  },
  css: {
    devSourcemap: true, // Better SCSS debugging
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: adds @ alias for imports
    },
  },
});
