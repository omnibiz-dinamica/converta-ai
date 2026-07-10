// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export para hospedagens FTP (Hostnet, etc.):
//   - `nitro: { preset: "static" }` faz o build gerar HTML/CSS/JS estáticos.
//   - `tanstackStart.prerender` gera o index.html pré-renderizado da rota "/".
//   - Saída final em `dist/` (basta enviar por FTP para /www/).
//
// Dentro do sandbox do Lovable estas opções são ignoradas (o preset é forçado
// para Cloudflare), então o preview continua igual. Elas só entram em ação
// quando você roda `npm run build` no seu computador ou no GitHub Actions.
export default defineConfig({
  nitro: {
    preset: "static",
    output: {
      dir: "dist",
      publicDir: "dist",
    },
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
