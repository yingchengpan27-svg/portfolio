import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages 部署:base 改 '/<repo-name>/'(用 function 形式区分 dev 和 build)
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Render / 自定义域名部署用 '/',GitHub Pages 部署时改为 '/<repo 名>/'
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
}))


