import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), dts(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "UiLib",
      fileName: (format) => `ui-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"], // Do not bundle Vue
      output: {
        globals: { vue: "Vue" },
      },
    },
  },
});
