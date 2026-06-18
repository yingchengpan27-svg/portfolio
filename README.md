# project_001_个人作品集网站

> 潘英成的个人作品集网站 — 暗色系科技感,React 19 + Vite 8 单页结构。
> 接续自旧项目 `C:/Users/Ying/Documents/个人作品集网站`,已全部迁移并优化。

## 当前状态

🟢 **已就绪 — 可部署到 GitHub Pages**

- ✅ 网站骨架完整(6 个模块:Navbar / Hero / About / Skills / Projects / Contact)
- ✅ 暗色设计系统(`--accent: #6366f1` 紫 + Skills/Contact 橙)
- ✅ 响应式基础(1024 / 768 / 640 三档断点)
- ✅ Hero 整段开场动效(整块 mask wipe + 错峰上浮 + GSAP ScrollTrigger)
- ✅ Projects 6 张视频卡(全部 100MB 以内,可直传 GitHub)
- ✅ About / Skills / Contact 9 张玻璃卡 + 头像 hover + 复制按钮
- ✅ Hero "潘英成" Uiverse stroke wipe hover 动效
- ✅ Hero 两按钮 Uiverse 渐变胶囊 + CSS @keyframes 入场
- ✅ GitHub Actions 自动部署 workflow 已配置
- ✅ `vite.config.js` 已设 `base` 路径

## 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | React 19.2 |
| 构建 | Vite 8 |
| 动效 | GSAP 3.15 + ScrollTrigger + CSS @keyframes |
| 样式 | CSS 变量 + 组件内 `<style>` 块 + `styles/global.css` |
| 视觉 | 暗色 + 紫靛蓝渐变 + 毛玻璃 + Uiverse 渐变胶囊 |
| 部署 | GitHub Pages + GitHub Actions |

## 🚀 部署到 GitHub Pages(3 步)

### Step 1:创建 GitHub 仓库
- 在 GitHub 新建一个 **public** 仓库(假设叫 `portfolio`)
- **不要**勾选 "Add a README" / ".gitignore" / "license"(我们本地有)

### Step 2:本地初始化并推送
```powershell
cd "D:\工作文件\AI\minimaxcode\workspace\projects\project_001_个人作品集网站"

# ⚠️ 第一次推送前,把 vite.config.js 里的 base 改成你的 repo 名
# base: '/portfolio/'  →  base: '/<你的-repo>/'

git init
git add .
git commit -m "feat: 个人作品集网站 v1.0"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<你的-repo>.git
git push -u origin main
```

### Step 3:开启 GitHub Pages
1. 仓库 → **Settings** → **Pages**
2. **Source** 选 **GitHub Actions**(不是 "Deploy from a branch")
3. 等 1-2 分钟,自动 build + 部署
4. 访问 `https://<你的用户名>.github.io/<你的-repo>/`

后续每次 `git push` 到 main,自动触发部署,1-2 分钟生效。

## 快速开始(本地开发)

```powershell
cd "D:\工作文件\AI\minimaxcode\workspace\projects\project_001_个人作品集网站"
npm install
npm run dev          # 开发服务器,默认 http://localhost:5173
npm run build        # 生产构建,产物在 dist/
npm run preview      # 预览构建产物
```

## 目录结构

```
project_001_个人作品集网站\
├── README.md                 # 本文件
├── index.html                # 入口 HTML
├── package.json
├── package-lock.json
├── vite.config.js            # Vite 配置(含 GitHub Pages base 路径)
├── eslint.config.js
├── .gitignore
│
├── .github\workflows\
│   └── deploy.yml            # GitHub Actions 自动部署 workflow
│
├── src\
│   ├── main.jsx              # React 挂载入口
│   ├── App.jsx               # 页面模块总入口
│   ├── animations\           # GSAP 动效 hooks
│   │   └── useGsapAnimations.js
│   ├── components\           # 6 个页面组件
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   └── styles\
│       └── global.css        # 设计变量 + 容器版心 1700px
│
├── public\                   # 静态资源(部署时原样拷贝到 dist/)
│   ├── avatar-hd.jpg         # 头像
│   ├── avatar.jpg            # 头像(小, 用于 favicon)
│   ├── favicon.svg
│   ├── hero-bg-compressed.png  # Hero 背景图
│   ├── hero-bg.webp          # Hero 背景(WebP,体积更小)
│   ├── icons.svg
│   ├── mic-apple-ad.mp4      # 项目卡 1(11.7MB)
│   ├── your-name-trailer.mp4 # 项目卡 2(74.1MB)
│   ├── game-account.mp4      # 项目卡 3(2.5MB)
│   ├── doctor-ip.mp4         # 项目卡 4(1.9MB)
│   ├── bzhan-english.mp4     # 项目卡 5(88.3MB,已压)
│   └── insta360-x3.mp4       # 项目卡 6(30.6MB)
│
├── scripts\                  # 工具脚本(图片处理、Hero patch 等,可不部署)
├── docs\
│   └── PROJECT_SUMMARY.md    # 旧项目总结(历史参考)
└── notes.md                  # 项目笔记
```

## 关键技术决策

| 决策 | 选择 | 理由 |
|------|------|------|
| 框架 | React 19 + Vite 8 | 现代栈,开发体验好 |
| 路由 | 无 | 单页 anchor 跳转,够用 |
| 动效 | GSAP + CSS 混合 | GSAP 处理复杂时间线,CSS @keyframes 处理简单入场(避免 React 19 StrictMode + GSAP.from 卡死) |
| 样式 | CSS 变量 + 局部 `<style>` 块 | 轻量快速,设计系统统一在 global.css |
| 部署 | GitHub Pages + Actions | 免费、自动、无需服务器 |
| Hero 按钮动效 | CSS @keyframes | React 19 StrictMode 双调用下 `gsap.from` 易卡在 from 态,CSS 完全免疫 |

## 已知注意事项

- **GitHub 100MB 单文件限制**:项目所有视频已压到 100MB 以内
- **GitHub 1GB 仓库软限 / 2GB 硬限**:public/ 总 ~240MB,在限内
- **首次部署到自定义域**:Settings → Pages → Custom domain 输入域名,会自动签证书
- **修改 base 路径**:部署到非 root 路径时,改 `vite.config.js` 的 `base: '/<repo>/'`

## 依赖

- React 19.2 / React-DOM 19.2
- GSAP 3.15
- Vite 8
- @vitejs/plugin-react 6
- sharp 0.35(图片处理,可移除)
- eslint 10

## 历史

- 旧项目 `C:/Users/Ying/Documents/个人作品集网站` 已保留,作为回滚备份
- 完整历史决策见 `docs/PROJECT_SUMMARY.md`
- 跨项目可复用的经验沉淀到 `01_全局复利与踩坑日志.md`
