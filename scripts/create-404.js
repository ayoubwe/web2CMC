import { cpSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const distDir = join(process.cwd(), "dist");
const indexFile = join(distDir, "index.html");
const notFoundFile = join(distDir, "404.html");

// Ensure dist exists before copying
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Copy index.html to 404.html for GitHub Pages SPA fallback
cpSync(indexFile, notFoundFile, { force: true });
