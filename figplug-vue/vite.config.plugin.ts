import path from "path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => ({
  plugins: [
    viteSingleFile(),
  ],
  build: {
    target: 'es2017',
    minify: mode === 'production',
    sourcemap: mode !== 'production' ? 'inline' : false,
    emptyOutDir: false,
    outDir: path.resolve("dist"),
    rollupOptions: {
      input: path.resolve('src/plugin/plugin.ts'),
      output: {
        entryFileNames: 'plugin.js',
        format: 'iife', // safe for use
      },
    },
  },
}));
