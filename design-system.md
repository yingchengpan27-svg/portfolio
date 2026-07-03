# Design System — 潘英成个人作品集网站

> **品牌 DNA · 暖橙派** — 本文件是项目内固化版本,与 `../esther-design-system-main/brand-dna.md` 保持一致。
> 来源:`esther-design-system` skill (2026-07-02 首次配置)
> 项目编号:`project_001_个人作品集网站_v1.0`
> 最后更新:2026-07-02

---

## 🎨 三色系统(60% / 30% / 10%)

| 角色 | 色名 | 色值 | 比例 | 主要用途 |
|------|------|------|------|----------|
| **主色** | 暖橙 | `#D97240` | 60% | 标题、按钮、链接、强调点、装饰底色 |
| **强调色** | 米黄 | `#F4D758` | 30% | 高亮、装饰、连接线、badges、深色面板点缀 |
| **点缀色** | 砖红 | `#A33A2A` | 10% | CTA、标签、高亮下划线、关键提示 |

> **比例铁律**:点缀色永远是点缀,绝不做主色。三色比例如改,气质会立刻塌。

### 派生色(供微调使用)

| 角色 | 色值 | 用途 |
|------|------|------|
| 深橙(hover) | `#C5632F` | 主色按钮 hover |
| 浅橙(底色) | `#FBE9D8` | 装饰卡片、tag 背景 |
| 橙黄(badge) | `#F4B860` | 标签、装饰 |
| 深米黄 | `#E8C544` | 米黄 hover |
| 浅米黄 | `#FFF6D9` | 高亮区底色 |
| 深砖红 | `#8A2F22` | 砖红 hover |

---

## 🌅 基底系统

### 暖底(主用)

| 角色 | 色值 | 用途 |
|------|------|------|
| 主背景 | `#fefcf6` | 全站底色 |
| 深奶 | `#faf6eb` | 次背景、section 区分 |
| 卡片底色 | `#fff8ec` | 卡片背景 |
| 卡片 hover | `#fff3d9` | 卡片 hover |
| 静音底 | `#f3eedd` | 不重要的区块 |

### 暗底(慎用,仅 Hero / 强调区)

| 角色 | 色值 | 用途 |
|------|------|------|
| 暗底 | `#151821` | Hero 区视觉锚点 |
| 深暗底 | `#0d1117` | 深度对比(极少用) |
| 暗底文字 | `#fefcf6` | 暗底上的主文字 |

> ⚠️ **暖橙派特化**:尽量避免在暖底主页面里突然切暗色面板,会破坏整体温度感。如必须用暗色,只在 Hero 区作为视觉锚点,且暖色要回到下一屏立刻补回。

---

## 🔤 字体系统

| 角色 | 字体栈 |
|------|--------|
| 中文标题 / display | `'Fraunces', 'Noto Serif SC', 'Source Han Serif SC', '汇文明朝体', serif` |
| 中文正文 | `'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif` |
| 英文代码 / 终端 | `'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace` |
| 英文手写 / 注释 | `'Caveat', 'Kalam', cursive` |

> ❌ **禁字体**:`Inter`、`Roboto`、`Arial`、`Helvetica` — 任何过载字体(除非明确是终端风格辅助字体)

---

## ✨ 气质关键词

设计出来的东西应该让人觉得:

- **温暖但专业** — 像独立杂志 / Notion 早期的克制感
- **有人情味** — 有温度、有人味、像手工做出来的
- **不像 AI** — 这是最高优先级约束
- **有设计师眼光** — 细节讲究、间距精确、色彩克制
- **有故事感** — 一看就知道是"你"的
- **求职友好** — 适合新媒体 / 内容创作者 / AI 视觉方向求职者的专业感

---

## 🚫 禁忌清单

### 通用禁忌(继承 skill)

| 类型 | 禁止 |
|------|------|
| 配色 | 蓝紫渐变 · cyan · neon · 纯黑白 · AI 冷灰蓝调 |
| 深色版面 | 全站暗底满铺 · 3:4 卡片场景禁止深色 |
| 字体 | Inter / Roboto / Arial · monospace 充当技术感 |
| 布局 | 所有 section 居中 · 千篇一律卡片网格 · cards 嵌套 cards |
| 动效 | bounce / elastic · animate width/height · 无限循环动画 |
| 装饰 | glassmorphism 全屏 · 圆角矩形 + 阴影千篇一律 · 渐变文字 · AI 光效 |
| 默认样式 | HTML 默认 blockquote / border-left / ul-ol / table — 必须从 components.md 选 |

### 暖橙派特化禁忌

- ❌ 冷蓝 / 紫 / 灰调(破坏温度感)
- ❌ 紫靛蓝渐变(用户旧站就是这个,必须删)
- ❌ glassmorphism / 毛玻璃(Hero 区不能有 backdrop-filter blur)
- ❌ Inter / Roboto / Arial(用户旧站用的就是这个)
- ❌ 暗色满铺(暖橙需要暖底托)
- ❌ 粉色 / 紫粉 / 莫兰迪冷粉(和暖橙打架)
- ❌ `#000` 纯黑 / `#fff` 纯白(用 `#1A1A2E` 墨色 + `#fefcf6` 暖奶)

---

## 🛠️ 代码层实现

### CSS 变量(`src/styles/global.css`)

主用变量:
```css
--brand-primary:        #D97240;   /* 暖橙 */
--brand-primary-hover:  #C5632F;
--brand-primary-soft:   #FBE9D8;
--brand-primary-glow:   rgba(217, 114, 64, 0.18);
--brand-primary-subtle: rgba(217, 114, 64, 0.08);

--brand-accent:         #F4D758;   /* 米黄 */
--brand-accent-soft:    #FFF6D9;
--brand-accent-hover:   #E8C544;

--brand-pop:            #A33A2A;   /* 砖红 */
--brand-pop-hover:      #8A2F22;

--bg-primary:           #fefcf6;   /* 暖底 */
--bg-secondary:         #faf6eb;
--bg-card:              #fff8ec;
--bg-card-hover:        #fff3d9;

--text-primary:         #1A1A2E;   /* 墨色 */
--text-secondary:       #4A4A5A;
--text-muted:           #888;
```

旧变量名 alias(向后兼容,未来清理):
```css
--accent:         var(--brand-primary);
--accent-hover:   var(--brand-primary-hover);
--accent-glow:    var(--brand-primary-glow);
--accent-subtle:  var(--brand-primary-subtle);
--gradient-hero:  var(--gradient-warm);
--gradient-card:  var(--gradient-card-warm);
```

### 渐变(替换蓝紫渐变)

| 旧(已删) | 新 |
|----------|-----|
| `linear-gradient(135deg, #6366f1 → #8b5cf6 → #a78bfa)` | `var(--gradient-warm)` (米黄 + 暖橙径向) |
| `var(--gradient-hero)` | `var(--gradient-warm)` |
| `var(--gradient-card)` | `var(--gradient-card-warm)` (米黄 + 暖橙线性) |

---

## 📐 间距与版心

(沿用 skill 推荐)

```css
--container:       1300px;
--container-pad:   clamp(1.5rem, 4vw, 4rem);
--section-pad:     clamp(80px, 12vh, 160px);
--block-gap:       clamp(40px, 6vw, 100px);
--card-pad:        clamp(28px, 3vw, 44px);
--gap:             clamp(24px, 3vw, 48px);
```

### 圆角(克制一点,告别 AI 风)

```css
--radius-sm:   6px;
--radius-md:   10px;
--radius-lg:   16px;
--radius-xl:   24px;
```

### 阴影(暖橙基调,告别冷灰蓝阴影)

```css
--shadow-sm:    0 1px 2px rgba(217, 114, 64, 0.08);
--shadow-md:    0 6px 20px rgba(217, 114, 64, 0.10);
--shadow-lg:    0 12px 40px rgba(217, 114, 64, 0.14);
--shadow-warm:  0 10px 30px rgba(163, 58, 42, 0.10);
```

---

## 📱 响应式

- 断点:`900px`(两栏→单栏)、`768px`(字号微缩)、`600px`(更小)
- 移动端是"重新排列"不是"缩小"
- 尊重 `prefers-reduced-motion`
- 移动端不隐藏内容 — adapt not amputate

---

## 🔍 细节规范

- **选中文本高亮**: `::selection { background: #D97240; color: #fefcf6; }`
- **链接悬停**: 用暖橙底色块或下划线,不用变色
- **按钮**: 主按钮 `#D97240`,hover `#C5632F` + 上移 1px
- **卡片**: 暖奶底 `#fff8ec`,hover `#fff3d9`,边框 `rgba(217, 114, 64, 0.12)`

---

## ✅ 自检问题(每次大改前问自己)

1. 截图发到社交媒体,会不会被人评论"又是 AI 做的"?
2. 能不能一眼认出这是你的品牌?
3. 有没有哪个部分让你觉得"见过很多次了"?
4. 暖橙派气质是否还在?(温暖但不浮夸 / 专业但不冷淡)
5. 有没有冷蓝/紫/Inter/glassmorphism 偷偷回来?

---

## 📝 变更记录

| 版本 | 日期 | 变更 |
|------|------|------|
| v2.0 | 2026-07-02 | 首次配置:从 skill 默认蓝黄红切换到 **暖橙派** `#D97240 / #F4D758 / #A33A2A`,基底从暗色切到暖底 `#fefcf6`,字体从 Inter 切到 Noto Serif+Sans,删掉所有 glassmorphism / 蓝紫渐变 |
| v1.0 | 2026-06-17 | 项目初版,暗色 + 紫靛蓝(`#6366f1`) |