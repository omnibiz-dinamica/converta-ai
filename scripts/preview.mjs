#!/usr/bin/env node
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve, sep } from "node:path";

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const host = getArg("--host", process.env.HOST || "127.0.0.1");
const port = Number(getArg("--port", process.env.PORT || "4173"));
const distDir = resolve(process.cwd(), "dist");
const indexFile = join(distDir, "index.html");

const types = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".xml", "application/xml; charset=utf-8"],
]);

if (!existsSync(indexFile)) {
  console.error("dist/index.html não encontrado. Execute `npm run build:static` antes do preview.");
  process.exit(1);
}

const sendFile = (res, filePath) => {
  res.writeHead(200, {
    "Content-Type": types.get(extname(filePath).toLowerCase()) || "application/octet-stream",
  });
  createReadStream(filePath).pipe(res);
};

const server = createServer((req, res) => {
  const rawUrl = req.url?.split("?")[0] || "/";
  const decodedPath = decodeURIComponent(rawUrl);
  const requestedPath = normalize(join(distDir, decodedPath));
  const insideDist = requestedPath === distDir || requestedPath.startsWith(distDir + sep);

  if (!insideDist) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (existsSync(requestedPath) && statSync(requestedPath).isFile()) {
    sendFile(res, requestedPath);
    return;
  }

  sendFile(res, indexFile);
});

server.listen(port, host, () => {
  console.log(`Preview disponível em http://${host}:${port}/`);
});
