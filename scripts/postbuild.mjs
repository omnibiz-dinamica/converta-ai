#!/usr/bin/env node
/**
 * Postbuild do export SPA puro para FTP/Hostnet.
 * Não executa Nitro, SSR ou prerender: apenas garante arquivos públicos
 * obrigatórios e valida a saída final em dist/.
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const cwd = process.cwd();
const distDir = resolve(cwd, "dist");

if (!existsSync(distDir)) {
  console.error("[postbuild] ERRO: dist/ não foi gerado pelo build SPA do Vite.");
  process.exit(1);
}

const publicFiles = [".htaccess", "favicon.ico", "robots.txt", "sitemap.xml"];

for (const file of publicFiles) {
  const source = resolve(cwd, "public", file);
  const target = join(distDir, file);

  if (existsSync(source) && !existsSync(target)) {
    mkdirSync(distDir, { recursive: true });
    copyFileSync(source, target);
  }
}

const indexHtml = join(distDir, "index.html");
if (!existsSync(indexHtml)) {
  console.error(
    "[postbuild] ERRO: dist/index.html não foi gerado.\n" +
      "  O build estático deve usar vite.static.config.ts e gerar uma SPA em dist/.\n" +
      "  Execute `npm run build:static` e verifique se o Vite copiou o index.html raiz.",
  );
  process.exit(1);
}

const assetsDir = join(distDir, "assets");
if (!existsSync(assetsDir) || !statSync(assetsDir).isDirectory()) {
  console.error(
    "[postbuild] ERRO: dist/assets/ não foi gerado.\n" +
      "  O client build não produziu os assets esperados para hospedagem estática.",
  );
  process.exit(1);
}

const listing = readdirSync(distDir)
  .sort()
  .map((name) => {
    const full = join(distDir, name);
    const kind = statSync(full).isDirectory() ? "dir " : "file";
    return `  ${kind}  ${name}`;
  });

console.log("Static build concluído");
console.log("dist/index.html encontrado");
console.log("[postbuild] Conteúdo final de dist/:");
console.log(listing.join("\n"));
