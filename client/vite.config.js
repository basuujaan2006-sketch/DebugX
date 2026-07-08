import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ============================================================
// vite.config.js — Vite Configuration
// Proxies /api requests to the Express backend during development.
// This avoids CORS issues when both dev servers run locally.
// ============================================================
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Redirect all /api requests to our Express server
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
