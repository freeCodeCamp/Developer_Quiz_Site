import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  server: {
    port: 3000
  },
  build: {
    outDir: "../build",
    emptyOutDir: true
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./testSetup.ts"
  }
});
