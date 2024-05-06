import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: "./dist",
    emptyOutDir: true
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./testSetup.ts"
  }
});
