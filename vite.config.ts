import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

const isTest = process.env.VITEST === "true" || process.env.NODE_ENV === "test";

export default defineConfig({
  plugins: [react(), ...(isTest ? [] : [cloudflare()])],
  server: {
    watch: {
      usePolling: true // required for container hot reloading
    },
    port: 3000,
    host: true, // fixes container xdg-open issues
    open: true
  },
  build: {
    outDir: "./dist",
    emptyOutDir: true
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./testSetup.ts",
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/e2e/*" /* do not include playwright files */
    ]
  }
});
