#!/usr/bin/env node
/**
 * Postbuild: transforma a saída Nitro/Cloudflare em um bundle estático puro
 * pronto para FTP em hospedagem compartilhada (Hostnet, Apache, Nginx).
 *
 * Antes:
 *   dist/
 *     client/         <- HTML, _build/, assets, favicon, .htaccess
 *     server/         <- worker (não usado em hospedagem estática)
 *     nitro.json
 *
 * Depois:
 *   dist/
 *     index.html
 *     _build/...
 *     favicon.ico
 *     .htaccess
 */
import { existsSync, rmSync, renameSync, readdirSync, mkdirSync, writeFileSync, statSync, cpSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.cwd(), "dist");
const clientDir = join(root, "client");
const serverDir = join(root, "server");

if (!existsSync(clientDir)) {
  console.error(`[postbuild] Diretório não encontrado: ${clientDir}`);
  process.exit(1);
}

// 1) Remove artefatos de servidor
for (const junk of ["server", "nitro.json", ".wrangler"]) {
  const p = join(root, junk);
  if (existsSync(p)) rmSync(p, { recursive: true, force: true });
}
if (existsSync(serverDir)) rmSync(serverDir, { recursive: true, force: true });

// 2) Move todo o conteúdo de dist/client/* para dist/
for (const entry of readdirSync(clientDir)) {
  const src = join(clientDir, entry);
  const dest = join(root, entry);
  if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
  renameSync(src, dest);
}
rmSync(clientDir, { recursive: true, force: true });

// 3) Garante um .htaccess de fallback SPA (Apache/Hostnet)
const htaccessPath = join(root, ".htaccess");
if (!existsSync(htaccessPath)) {
  writeFileSync(
    htaccessPath,
    `# Fallback SPA para Apache (Hostnet e similares)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Não reescreve arquivos e diretórios reais (assets, imagens, etc.)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache longo para bundles com hash
<IfModule mod_headers.c>
  <FilesMatch "\\.(js|css|woff2?|ttf|otf|eot|png|jpg|jpeg|gif|svg|webp|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
`,
    "utf8",
  );
}

// 4) Sanity check
const indexHtml = join(root, "index.html");
if (!existsSync(indexHtml)) {
  console.error("[postbuild] ERRO: dist/index.html não foi gerado. Verifique a configuração `tanstackStart.spa` em vite.config.ts.");
  process.exit(1);
}

// 5) Relatório
const listing = readdirSync(root).map((name) => {
  const full = join(root, name);
  const kind = statSync(full).isDirectory() ? "dir " : "file";
  return `  ${kind}  ${name}`;
});
console.log("[postbuild] Bundle estático pronto em dist/:");
console.log(listing.join("\n"));
