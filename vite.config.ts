import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// SPA / Static export: TanStack Start pré-renderiza uma shell HTML.
// O maskPath "/" faz com que a página raiz seja usada para gerar a shell,
// e o outputPath "/index" grava o arquivo como `index.html` no diretório
// de saída do cliente (dist/client/index.html).
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
});
