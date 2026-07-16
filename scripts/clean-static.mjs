#!/usr/bin/env node
import { existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const cwd = process.cwd();

for (const dir of ["dist", ".output", ".wrangler"]) {
  const fullPath = resolve(cwd, dir);
  if (existsSync(fullPath)) {
    rmSync(fullPath, { recursive: true, force: true });
  }
}

console.log("[clean-static] Saídas antigas removidas.");