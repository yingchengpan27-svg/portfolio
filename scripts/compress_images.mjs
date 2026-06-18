// scripts/compress_images.mjs — 压缩 Hero 背景图
import sharp from "sharp";
import { statSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const pub = resolve(root, "public");

const input = resolve(pub, "参考1.png");
const webpOut = resolve(pub, "hero-bg.webp");
const pngOut = resolve(pub, "hero-bg-compressed.png");

const inputSize = (statSync(input).size / 1024 / 1024).toFixed(2);

// WebP — 高质量，大幅减小体积
await sharp(input)
  .resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(webpOut);

const webpSize = (statSync(webpOut).size / 1024).toFixed(0);

// PNG — 压缩版备用
await sharp(input)
  .resize({ width: 1920, withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true })
  .toFile(pngOut);

const pngSize = (statSync(pngOut).size / 1024).toFixed(0);

console.log(`原始: ${inputSize} MB (参考1.png)`);
console.log(`WebP:  ${webpSize} KB (hero-bg.webp)`);
console.log(`PNG:   ${pngSize} KB (hero-bg-compressed.png)`);
console.log(`压缩比: WebP 减小 ${((1 - (webpSize / 1024) / inputSize) * 100).toFixed(0)}%`);
