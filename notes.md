# 项目笔记

## 接续记录

- **接续时间**: 2026-06-17
- **接续来源**: 旧项目 `C:/Users/Ying/Documents/个人作品集网站`(已完整搬迁,旧目录保留未删)
- **接续方**: minimaxcode(用户授权搬迁)
- **项目编号**: project_001(workspace 第一个项目)

## 搬迁清单(从旧项目 → 新项目)

| 类别 | 文件 | 备注 |
|------|------|------|
| 配置 | `index.html`, `package.json`, `package-lock.json`, `vite.config.js`, `eslint.config.js`, `.gitignore` | 全部就位 |
| 源代码 | `src/App.jsx`, `src/main.jsx`, `src/components/*.jsx` (6 个), `src/styles/global.css` | 全部就位 |
| 静态资源 | `public/avatar-hd.jpg`, `public/avatar.jpg`, `public/favicon.svg`, `public/hero-bg-compressed.png`, `public/hero-bg.webp`, `public/icons.svg`, `public/参考1.png` | 全部就位 |
| 用户素材 | `public/意见2.jpg` | 从旧项目根目录搬入(用户最新修改意见图) |
| 工具脚本 | `scripts/*.py`, `scripts/*.mjs`, `scripts/*.cjs` (7 个) | 全部就位 |
| 文档 | `docs/PROJECT_SUMMARY.md` | 旧项目总结,作为历史参考 |
| **未搬** | `node_modules/`, `dist/`, `.git/`, `dev-server.*.log/err`, `vis-editor-server.*` | 临时/构建产物/依赖 |
| **未搬** | `参考1.png`(旧项目根目录那份) | 旧项目根目录实际无此文件,只有 `public/` 那份 |

## 当前进度(从哪里接手)

✅ **已完成(接手即能用)**
- React 19 + Vite 8 基础架构
- 6 个组件全部到位:`Navbar` `Hero` `About` `Projects` `Skills` `Contact`
- 暗色设计系统 + 1700px 版心
- 响应式基础
- Hero 已接入 `参考1.png` 人物背景,人物已右移避免遮挡文案
- 已生成 `dist` 构建产物
- 已有 5 张模块截图(在旧项目 docs/ 提到,新项目内无)

🟡 **当前阶段:视觉优化**
- 根据用户提供的截图意见,逐步调整 Hero 视觉细节
- 背景人物位置与遮罩关系
- 文案与图片空间分配

❌ **未做(待办)**
- Projects 占位卡片 → 真实项目封面
- Hero 文案区与人物背景的遮罩层级
- 移动端 Hero 视觉完整性和按钮间距
- 性能优化(图片压缩、懒加载)
- 真实项目详情页/视频弹层
- 滚动动画、进入动画优化
- 联系表单后端
- favicon、SEO 描述、社交分享图
- 初始化 Git

## 决策记录

### 2026-06-17: 静态资源放 `public/` 而非 `assets/images/`
- **选择**: 沿用 Vite 原生约定 `public/`
- **理由**:
  - 旧项目代码已大量使用 `/avatar.jpg`、`/参考1.png` 等绝对路径引用
  - Vite `public/` 是根路径直接挂载,代码零改动
  - 相比 `assets/images/`,`public/` 文件不经打包处理,适合不需 hash 的静态素材
- **代价**: 偏离全局 SOP 推荐的 `assets/images/` 结构
- **后续**: 如未来要统一规范,需在 README 标注此项目特例;或做一次全量迁移 + 代码改写

### 2026-06-17: 旧项目目录保留未删
- **选择**: 复制搬迁,旧目录 `C:/Users/Ying/Documents/个人作品集网站` 不动
- **理由**:
  - 万一新项目跑不起来,旧目录可作回滚备份
  - 用户未明确说"删除旧项目"
  - "可恢复"原则(SOP 02 §七.2)
- **后续**: 用户确认新项目稳定后,可手动 mavis-trash 旧目录

### 2026-06-17: `.git/` 不搬,在新项目内重新 `git init`
- **选择**: 新项目内独立 git 仓库
- **理由**: 符合全局规范(01 §3.4:每个项目独立 git 仓库,workspace 不打包)

## 重要发现

- 旧项目 `package.json` 里 `name: "-"`,这是 Vite 模板默认的占位名,值得改成项目正式名(如 `pf-yingch`)
- 旧项目依赖里有 `body-parser` 和 `express` —— 看 scripts 目录有 `vis_editor_server.cjs`,说明之前用 Node 起过本地服务用于可视化编辑。这个工作流可以考虑保留(放在 scripts/)
- `scripts/write_hero.py` 12.7KB,挺大,可能是之前批量生成 Hero 内容的脚本,需要时再读

## 踩过的坑(项目内)

> 这一节只记项目特有踩坑,通用经验写 01 全局日志。

### 2026-06-17: JSX 硬编码导致"改了 heroData 但页面没变"
- **现象**: `heroData.desc` 改成"5年"后,页面依然显示"4年"
- **根因**: 描述文案在 `heroData.desc` 和 JSX `<p className="hero__desc">` 里各写了一份(SSOT 违反),改一处没改另一处
- **修复**: JSX 改成读 `heroData.desc`,用 `split('\n').map()` 渲染两行
- **后续**: 项目里所有动态文案都放进 heroData,JSX 只做映射,不直接写文本

### 2026-06-17: Vite HMR 调试走了弯路
- 改了文件 → 页面没变 → 重启 dev server + 清 `node_modules/.vite` + 浏览器 hard reload → 都没用
- **高效做法**: 用 Python `urllib` 拉 `http://localhost:5178/src/components/xxx.jsx`,看 dev server 实际编译输出,搜关键词
- 这次直接命中:dev server 返回的代码里有两处"年",一条是 heroData("5年"),另一条是 JSX 硬编码 children("4年"),瞬间定位

## 通用经验(沉淀到 01 后删除本条)

_(暂无,等接续开发出新经验时再写)_
