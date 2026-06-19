import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// 部署到 Render(根路径) → base 必须 '/',否则构建出的资源路径全带 /portfolio/ 前缀 → 404
// 之前默认走 GitHub Pages 的 '/portfolio/',搬到 Render 后所有 CSS/JS/视频/图片 404
// 如果以后改回 GitHub Pages(子路径),改成 base: '/<repo-name>/' 即可
export default defineConfig(() => ({
  plugins: [react()],
  base: '/',  // 关键修复:Render/Vercel/Netlify 等根路径部署必须 '/'

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
}))


