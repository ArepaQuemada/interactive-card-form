import react from "@vitejs/plugin-react-swc";
import { defineConfig, UserConfig } from "vite";
import { UserConfig as VitestUserConfigInterface } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "setup.ts",
    css: false,
  },
} as VitestUserConfigInterface & UserConfig);
