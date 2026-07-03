// scripts/remove-bg.mjs
// 用 @imgly/background-removal-node 把 hero-portrait.jpeg 的米黄背景抠掉
// 输出透明背景的 PNG,人物边缘用羽化让融入更自然
import { removeBackground } from '@imgly/background-removal-node';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SRC = join(ROOT, 'public', 'hero-portrait.jpeg');
const OUT_PNG = join(ROOT, 'public', 'hero-portrait.png');
const OUT_WEBP = join(ROOT, 'public', 'hero-portrait.webp');

console.log('读源图:', SRC);
const inputBuffer = await readFile(SRC);
const inputBlob = new Blob([inputBuffer], { type: 'image/jpeg' });

console.log('AI 抠图 (这步会跑几秒)...');
const outputBlob = await removeBackground(inputBlob, {
  // 输出格式 PNG (保留 alpha 通道)
  output: { format: 'image/png', quality: 0.95 },
  // 边缘处理:让 alpha 边缘羽化,自然过渡
  alphaMatting: true,
  alphaMattingForegroundThreshold: 240,
  alphaMattingBackgroundThreshold: 15,
  alphaMattingErodeSize: 1,
});

console.log('写 PNG:', OUT_PNG);
await writeFile(OUT_PNG, Buffer.from(await outputBlob.arrayBuffer()));
console.log('  size:', (await readFile(OUT_PNG)).length, 'bytes');

console.log('同时用 sharp 转 WebP(体积更小,加载更快)');
const sharp = (await import('sharp')).default;
await sharp(OUT_PNG)
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 88, alphaQuality: 90 })
  .toFile(OUT_WEBP);
const webpSize = (await readFile(OUT_WEBP)).length;
console.log('  WebP size:', webpSize, 'bytes');

console.log('\n✅ 完成:');
console.log('   透明 PNG:', OUT_PNG);
console.log('   透明 WebP:', OUT_WEBP, `(${(webpSize/1024).toFixed(1)}KB)`);