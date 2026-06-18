import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages 部署:base 改 '/<repo-name>/'(用 function 形式区分 dev 和 build)
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // dev 用 '/',build 才用 '/<repo>/',这样本地预览 http://localhost:5173/ 直接能开
  base: command === 'build' ? '/portfolio/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
}))


