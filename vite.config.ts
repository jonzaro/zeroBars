import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Ensures all assets are processed as files, not inlined
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          // Keep the directory structure for fonts
          if (assetInfo.name && /\.(woff2?|ttf|otf)$/.test(assetInfo.name)) {
            return "assets/fonts/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        },
      },
    },
  },
  // Explicitly tell Vite to copy assets directory
  publicDir: "public",
});
