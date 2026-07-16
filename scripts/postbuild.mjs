#!/usr/bin/env node
/**
 * Postbuild: normaliza o resultado do build para uma pasta `dist/` limpa,
 * pronta para envio via FTP a hospedagem compartilhada (Hostnet, Apache).
 *
 * O build estático usa o prerender oficial do TanStack Start com Nitro desligado.
 * A saída pública gerada em dist/client/ é consolidada em dist/ para FTP.
 *
 * Também garante um .htaccess de fallback SPA e remove artefatos de servidor.
 */
import {
  existsSync,
  rmSync,
  renameSync,
  readdirSync,
  statSync,
  writeFileSync,
  mkdirSync,
} from "node:fs";
import { join, resolve } from "node:path";

const cwd = process.cwd();
const distDir = resolve(cwd, "dist");
const clientSubdir = join(distDir, "client");
const nitroPublic = resolve(cwd, ".output/public");
const outputDir = resolve(cwd, ".output");
const wranglerDir = resolve(cwd, ".wrangler");

function moveChildrenInto(srcDir, destDir) {
  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
  for (const entry of readdirSync(srcDir)) {
    const from = join(srcDir, entry);
    const to = join(destDir, entry);
    if (existsSync(to)) rmSync(to, { recursive: true, force: true });
    renameSync(from, to);
  }
  rmSync(srcDir, { recursive: true, force: true });
}

// 1) Consolidar layout em dist/
if (!existsSync(distDir) && existsSync(nitroPublic)) {
  mkdirSync(distDir, { recursive: true });
  moveChildrenInto(nitroPublic, distDir);
  if (existsSync(outputDir)) rmSync(outputDir, { recursive: true, force: true });
}

if (existsSync(clientSubdir)) {
  moveChildrenInto(clientSubdir, distDir);
}

// 2) Remover artefatos de servidor / cloudflare que não fazem sentido em FTP
for (const junk of [
  "server",
  "client",
  ".server-tmp",
  "nitro.json",
  "wrangler.json",
  "package.json",
  "package-lock.json",
  ".wrangler",
  "_headers",
  "_routes.json",
]) {
  const p = join(distDir, junk);
  if (existsSync(p)) rmSync(p, { recursive: true, force: true });
}

if (existsSync(outputDir)) rmSync(outputDir, { recursive: true, force: true });
if (existsSync(wranglerDir)) rmSync(wranglerDir, { recursive: true, force: true });

// 3) Garantir .htaccess (caso o public/.htaccess não tenha sido copiado)
const htaccessPath = join(distDir, ".htaccess");
if (!existsSync(htaccessPath)) {
  writeFileSync(
    htaccessPath,
    `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`,
    "utf8",
  );
}

// 4) Sanity checks claros para CI/FTP
const indexHtml = join(distDir, "index.html");
if (!existsSync(indexHtml)) {
  console.error(
    "[postbuild] ERRO: dist/index.html não foi gerado.\n" +
      "  O prerender estático da rota `/` falhou ou a saída pública não foi consolidada.\n" +
      "  Execute `npm run build:static` e confira o log de prerender acima.",
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

// 5) Relatório
const listing = readdirSync(distDir)
  .sort()
  .map((name) => {
    const full = join(distDir, name);
    const kind = statSync(full).isDirectory() ? "dir " : "file";
    return `  ${kind}  ${name}`;
  });
console.log("[postbuild] Bundle estático pronto em dist/:");
console.log(listing.join("\n"));
