import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// ------------------------------------------------------------------------
// Build estático (SPA) para hospedagem compartilhada (Hostnet, Apache, Nginx)
// ------------------------------------------------------------------------
// - `tanstackStart.spa.enabled: true` pré-renderiza um shell HTML.
// - `spa.prerender.outputPath: "/index"` grava o shell como `index.html`.
// - `nitro.preset: "static"` faz o Nitro emitir apenas arquivos estáticos.
// - `nitro.output.publicDir: "dist"` consolida tudo em `dist/`.
//
// OBS.: dentro do sandbox de preview do Lovable, o wrapper força o preset
// `cloudflare-module` (o preview roda como Worker). O build estático para
// FTP DEVE ser executado no seu computador ou no GitHub Actions rodando
// `npm run build` — nesse ambiente as opções abaixo são aplicadas e a pasta
// `dist/` é gerada com `index.html`, `_build/` (JS + CSS), `assets/` e
// `.htaccess` prontos para envio à Hostnet.
// ------------------------------------------------------------------------
export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: {
        outputPath: "/index",
      },
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
});
