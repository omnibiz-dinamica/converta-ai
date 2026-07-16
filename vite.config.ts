import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig as defineViteConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const STATIC_BUILD = process.env.STATIC_BUILD === "1";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const staticBuildConfig = defineViteConfig({
  root: fileURLToPath(new URL("./static", import.meta.url)),
  publicDir: fileURLToPath(new URL("./public", import.meta.url)),
  base: "/",
  plugins: [
    tanstackRouter({
      target: "react",
      routesDirectory: "../src/routes",
      generatedRouteTree: "../src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: fileURLToPath(new URL("./dist", import.meta.url)),
    emptyOutDir: true,
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      input: fileURLToPath(new URL("./static/index.html", import.meta.url)),
    },
  },
  server: {
    fs: {
      allow: [projectRoot],
    },
  },
});

export default STATIC_BUILD ? staticBuildConfig : defineLovableConfig({});
