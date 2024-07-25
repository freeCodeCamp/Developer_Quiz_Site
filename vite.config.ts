import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
