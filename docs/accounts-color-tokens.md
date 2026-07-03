# Accounts 卡片 — 颜色参数清单

> 全部颜色都在 `src/components/Accounts.jsx` 一个文件里。
> 改完保存后告诉我"accounts-color 改完了",我同步到 JSX。
> 不要动 #位置 列,只改 #当前值 列(或整行替换)。

---

## 一、每张卡的「数据色」(6 张卡各不相同)

> 这两列决定卡片默认背景(`gradient`)和按钮字色(`accentColor`)。

| # | 卡名 | 平台 | gradient(默认背景渐变) | accentColor(按钮主色) |
|---|------|------|------------------------|----------------------|
| 1 | 正畸赵志河 | 抖音 | `linear-gradient(135deg, #fe2c55 0%, #25f4ee 100%)`(粉→青) | `#fe2c55` |
| 2 | 阿祖(三角洲) | 抖音 | `linear-gradient(135deg, #fefcf6 0%, #fe2c55 100%)`(奶→粉) | `#fe2c55` |
| 3 | 口语老炮儿马思瑞 | 抖音 | `linear-gradient(135deg, #faf6eb 0%, #FBE9D8 100%)`(暖奶→橙软) | `#fe2c55` |
| 4 | 夏波波Brian | 抖音 | `linear-gradient(135deg, #faf6eb 0%, #fe2c55 100%)`(奶→粉) | `#fe2c55` |
| 5 | 口语老炮儿马思瑞 | B站 | `linear-gradient(135deg, #fb7299 0%, #fefcf6 100%)`(粉→奶) | `#fb7299` |
| 6 | 夏波波Brian | B站 | `linear-gradient(135deg, #fb7299 0%, #D97240 100%)`(粉→橙) | `#fb7299` |

---

## 二、默认状态(未悬浮)的 CSS 颜色

| 位置 | 选择器 | 当前值 | 备注 |
|------|--------|--------|------|
| 卡片整体底色 | `.account-card` `background` | `var(--card-bg)` ← 数据色 gradient | 每张卡不同 |
| 卡片整体投影 | `.account-card` `box-shadow` | `rgba(0, 0, 0, 0.4) 0px 30px 30px -30px` | 黑色软投影 |
| 卡片外框 padding | `.account-card` `padding` | `3px`(透明,无色) | — |
| 卡片默认文字色 | `.account-card` `color` | `white` | 所有子元素默认白 |
| 大头像底色 | `.account-card__pic` `border` | `0px solid rgba(255,255,255,0.3)` | 透明,无视觉 |
| **底部信息块背景** | `.account-card__bottom` `background` | `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 50%)` | **深色黑渐变** |
| 底部信息块模糊 | `.account-card__bottom` `backdrop-filter` | `blur(12px)` | 玻璃磨砂 |
| 底部信息块内阴影 | `.account-card__bottom` `box-shadow` | `rgba(0, 0, 0, 0.3) 0px 5px 5px 0px inset` | 内嵌深色阴影 |
| **名字色** | `.account-card__name` `color` | `white` | 粗体 |
| **简介色** | `.account-card__about` `color` | `rgba(255, 255, 255, 0.85)` | 白色 85% |
| **数据大字色** | `.account-card__stat-num` `color` | `white` | 粗体 |
| **数据小字色** | `.account-card__stat-label` `color` | `rgba(255, 255, 255, 0.6)` | 白色 60% |
| **平台徽章背景** | `.account-card__platform` `background` | `rgba(255, 255, 255, 0.15)` | 白 15% |
| **平台徽章边框** | `.account-card__platform` `border` | `1px solid rgba(255, 255, 255, 0.2)` | 白 20% |
| **平台徽章字色** | `.account-card__platform` `color` | `white` | — |
| **按钮背景** | `.account-card__button` `background` | `white` | 白底 |
| **按钮字色** | `.account-card__button` `color` | `var(--accent)` ← 数据色 | 每张卡不同 |
| 按钮阴影 | `.account-card__button` `box-shadow` | `rgba(0, 0, 0, 0.2) 0px 5px 5px 0px` | 黑色 |

---

## 三、悬浮状态(`.account-card:hover`)的 CSS 颜色

| 位置 | 选择器 | 当前值 | 备注 |
|------|--------|--------|------|
| 卡片整体底色 | `.account-card:hover` `background` | **(无,沿用渐变)** | — |
| 卡片左上圆角 | `.account-card:hover` `border-top-left-radius` | `55px`(非颜色,仅形状) | — |
| **底部信息块背景** | `.account-card:hover .account-card__bottom` `background` | `var(--bg-primary)` = `#fefcf6` | **暖奶,上轮已改** |
| 底部信息块阴影 | hover `__bottom` `box-shadow` | `0 8px 24px rgba(217, 114, 64, 0.18)` | 暖橙外发光 |
| 底部信息块模糊 | hover `__bottom` `backdrop-filter` | `none` | 已关模糊 |
| **名字色(hover)** | hover `__name` `color` | `var(--text-primary)` = `#1A1A2E` | 深墨 |
| **简介色(hover)** | hover `__about` `color` | `var(--text-secondary)` = `#4A4A5A` | 灰墨 |
| **数据大字色(hover)** | hover `__stat-num` `color` | `var(--brand-primary)` = `#D97240` | **暖橙强调** |
| **数据小字色(hover)** | hover `__stat-label` `color` | `var(--text-secondary)` = `#4A4A5A` | 灰墨 |
| **平台徽章背景(hover)** | hover `__platform` `background` | `rgba(217, 114, 64, 0.12)` | 暖橙 12% |
| **平台徽章边框(hover)** | hover `__platform` `border-color` | `rgba(217, 114, 64, 0.3)` | 暖橙 30% |
| **平台徽章字色(hover)** | hover `__platform` `color` | `var(--brand-primary)` = `#D97240` | 暖橙 |
| **头像边框(hover)** | hover `__pic` `border` | `4px solid rgba(255, 255, 255, 0.3)` | 白 30% |
| 头像阴影(hover) | hover `__pic` `box-shadow` | `rgba(0, 0, 0, 0.4) 0px 5px 15px` | 黑 |
| **按钮背景(hover)** | hover `__button` `background` | `var(--accent)` ← 数据色 | 每张卡不同 |
| **按钮字色(hover)** | hover `__button` `color` | `white` | 白 |

---

## 四、主题色板速查(`global.css`)

> 改任何颜色,直接引用下面这些变量名即可,不用手写色值。

| 变量 | 色值 | 用途 |
|------|------|------|
| `--bg-primary` | `#fefcf6` | **网页主题背景色(暖奶)** |
| `--bg-secondary` | `#faf6eb` | 次级背景 |
| `--bg-card` | `#fff8ec` | 卡片底色 |
| `--bg-card-hover` | `#fff3d9` | 卡片 hover 底 |
| `--brand-primary` | `#D97240` | **主题暖橙(60% 主色)** |
| `--brand-primary-hover` | `#C5632F` | 暖橙 hover |
| `--brand-primary-soft` | `#FBE9D8` | 暖橙软 |
| `--brand-accent` | `#F4D758` | 辅色金黄(30%) |
| `--brand-pop` | `#A33A2A` | 点睛深红(10%) |
| `--text-primary` | `#1A1A2E` | 主文字(深墨) |
| `--text-secondary` | `#4A4A5A` | 次文字(灰墨) |
| `--text-muted` | `#888` | 弱化文字 |
| `--accent` | `var(--brand-primary)` | 别名=暖橙 |
| `--accent-hover` | `var(--brand-primary-hover)` | 别名 |

---

## 五、改法示范

### 例 1:把底部信息块悬浮背景从暖奶改成暖橙软
找到第三部分"底部信息块背景(hover)"行,把当前值改成:
```
rgba(217, 114, 64, 0.12)
```

### 例 2:把卡 1 默认渐变从粉→青改成暖橙渐变
找到第一部分第 1 行,把 gradient 列改成:
```
linear-gradient(135deg, #D97240 0%, #F4D758 100%)
```

### 例 3:把全部名字色(默认)从白改成深墨
找到第二部分"名字色"行,当前值 `white` 改成:
```
var(--text-primary)
```

---

## 文件路径

```
D:\workfile\minimaxcode\project\project01_updatemywesite\project_001_个人作品集网站_v1.0\docs\accounts-color-tokens.md
```

文件存 `docs/`,不会被 build,只是你和我之间的"配色中间层"。