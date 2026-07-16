import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// ------------------------------------------------------------------------
// Build estático (SPA) para hospedagem compartilhada (Hostnet, Apache).
// ------------------------------------------------------------------------
// O build estático (SPA + preset "static" do Nitro) só é acionado quando
// a variável de ambiente STATIC_BUILD=1 estiver definida. Isso evita que
// o build do sandbox de preview (que roda como Cloudflare Worker e força
// o preset "cloudflare-module") tente pré-renderizar e falhe.
//
// Para gerar `dist/` estático rode:
//   STATIC_BUILD=1 npm run build
// ou use o script `npm run build:static` (equivalente).
// ------------------------------------------------------------------------
const STATIC_BUILD = process.env.STATIC_BUILD === "1";

export default defineConfig(
  STATIC_BUILD
    ? {
        tanstackStart: {
          spa: {
            enabled: true,
            maskPath: "/",
            prerender: { outputPath: "/index" },
          },
        },
        nitro: {
          preset: "static",
          output: {
            dir: "dist",
            publicDir: "dist",
            serverDir: "dist/.server-tmp",
          },
        },
      }
    : {},
);
