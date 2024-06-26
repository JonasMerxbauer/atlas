import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

export default defineConfig({
  main: {
    resolve: {
      alias: {
        "~main": resolve("src/main"),
      },
    },
    plugins: [externalizeDepsPlugin(), TanStackRouterVite()],
  },
  preload: {
    plugins: [externalizeDepsPlugin(), TanStackRouterVite()],
  },
  renderer: {
    resolve: {
      alias: {
        "~": resolve("src/renderer/src"),
      },
    },
    plugins: [react()],
    optimizeDeps: {
      exclude: ["oslo"],
    },
  },
});
