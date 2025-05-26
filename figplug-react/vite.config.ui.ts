import { defineConfig } from "vite";
import path from "node:path";
import { viteSingleFile } from "vite-plugin-singlefile";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      tailwindcss(),
      viteSingleFile(),
      react(),
    ],
    root: path.resolve("src/ui"),
    build: {
      target: "esnext",
      assetsInlineLimit: 100000000,
      chunkSizeWarningLimit: 100000000,
      minify: mode === "production",
      cssMinify: mode === "production",
      sourcemap: mode !== "production" ? "inline" : false,
      cssCodeSplit: false,
      brotliSize: false,
      emptyOutDir: false, // Plugin config will clean the directory
      outDir: path.resolve("dist"),
      rollupOptions: {
        input: path.resolve("src/ui/index.html"),
      },
    },
  };
});

