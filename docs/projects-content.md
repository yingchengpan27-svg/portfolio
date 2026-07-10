# Projects 精选项目 — 可编辑文案与参数

> 这是 `src/components/Projects.jsx` 里所有可见/可改字段的对外编辑版。
> 改完保存后告诉我"projects-content 改完了",我同步到 JSX。
> 6 张卡每个有自己的表格,单独改不影响其他卡。
> 不要改"字段"列和"备注"列,只改"当前值"列。

---

## 卡 1 · Apple-style 产品 TVC 广告(id=1,大卡)

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `id` | `1` | **不要改**,React key |
| `title` | `Apple-style 产品TVC广告` | 大卡标题 |
| `category` | `AI 视觉创作` | 左上角徽章(2-6 字) |
| `desc` | `运用前沿多模态AI工作流，独立制作Apple极简高科技感产品宣传片，解决AI视频画面一致性与物理阴影过渡等技术痛点。` | 50-80 字最佳 |
| `tags` | `['AI视频', '多模态', '产品宣传']` | 当前未渲染,保留 |
| `gradient` | `linear-gradient(135deg, #faf6eb 0%, #fff3d9 50%, #FBE9D8 100%)` | 想统一暖橙:换成 `linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-hover) 100%)` |
| `icon` | `🎬` | 无视频时显示 |
| `video` | `/mic-apple-ad.mp4` | `public/` 下文件 |
| `link` | `https://www.xinpianchang.com/a13721954?from=webShare&channel=copyLink` | 空字符串 `''` = 不可点击 |
| `col` | `span 2` | 大卡固定 `span 2` |
| `row` | `1` | 第 1 行 |

---

## 卡 2 · ZURU Fuggler 爆款内容复刻(id=2)

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `id` | `2` | **不要改** |
| `title` | `ZURU Fuggler 爆款内容复刻` | 小卡标题 |
| `category` | `AI 视觉创作` | 左上角徽章 |
| `desc` | `主导ZURU品牌产品的AI视觉营销内容创作，通过“产品调性×用户喜好”的深度挖掘与内容重构，打造兼具品牌感知与高传播力的爆款AI视频。` | 50-80 字最佳 |
| `tags` | `['AI视频', '写实渲染', '动漫转真人']` | 当前未渲染 |
| `gradient` | `linear-gradient(135deg, #F4D758 0%, #D97240 100%)` | 金黄到暖橙 |
| `icon` | `✨` | 无视频时显示 |
| `video` | `/ZURU Fuggler.mp4` | `public/` 下文件 |
| `link` | `https://v.douyin.com/nLAurIMyiC0/` | 空字符串 = 不可点击 |
| `col` | `2` | 第 2 列 |
| `row` | `3` | 第 3 行 |

---

## 卡 6 · Bunch O Balloons TVC广告(id=6)

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `id` | `6` | **不要改** |
| `title` | `Bunch O Balloons TVC广告` | 小卡标题 |
| `category` | `AI 视觉创作` | 左上角徽章 |
| `desc` | `独立完成海外品牌 ZURU「Bunch O Balloons」AI商业广告从0-1创作，输出60秒TVC级广告内容，验证AI驱动商业广告全流程生产能力。` | 50-80 字 |
| `tags` | `['AI视频', '多模态', '产品宣传']` | 当前未渲染 |
| `gradient` | `linear-gradient(135deg, #faf6eb 0%, #D97240 100%)` | 浅奶到暖橙 |
| `icon` | `💻` | 无视频时显示 |
| `video` | `/BunchOBalloons.mp4` | `public/` 下文件 |
| `link` | `https://www.xinpianchang.com/a13738261?from=webShare&channel=copyLink` | 空字符串 = 不可点击 |
| `col` | `3` | 第 3 列 |
| `row` | `2` | 第 2 行 |

---

## 卡 5 · 影石360产品TVC广告(id=5)

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `id` | `5` | **不要改** |
| `title` | `影石360产品TVC广告` | 小卡标题 |
| `category` | `AI 视觉创作` | 左上角徽章 |
| `desc` | `独立完成影石Insta360概念联名TVC的全链路AI创作，运用先进生成式AI工作流，高效产出涵盖多场景实感模拟的电影级商业视觉。` | 50-80 字 |
| `tags` | `['AI视频', '多模态', '产品宣传']` | 当前未渲染 |
| `gradient` | `linear-gradient(135deg, #faf6eb 0%, #D97240 100%)` | 浅奶到暖橙 |
| `icon` | `💻` | 无视频时显示 |
| `video` | `/insta360-x3.mp4` | `public/` 下文件 |
| `link` | `https://www.xinpianchang.com/a13721953?from=webShare&channel=copyLink` | 空字符串 = 不可点击 |
| `col` | `1` | 第 1 列 |
| `row` | `3` | 第 3 行 |

---

## 卡 3 · 抖音医生 IP 运营(id=3)

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `id` | `3` | **不要改** |
| `title` | `抖音医生IP运营` | 小卡标题 |
| `category` | `短视频IP运营` | 左上角徽章 |
| `desc` | `全链路负责医生IP运营，策划多条百万级爆款视频，半年自然涨粉5万+，推动账号累计GMV超200万。` | 50-80 字 |
| `tags` | `['抖音', 'IP运营', '百万GMV']` | 当前未渲染 |
| `gradient` | `linear-gradient(135deg, #fefcf6 0%, #FBE9D8 50%, #D97240 100%)` | 暖奶 → 暖橙软 → 暖橙 |
| `icon` | `🏥` | 无视频时显示 |
| `video` | `/doctor-ip.mp4` | `public/` 下文件 |
| `link` | `https://www.xinpianchang.com/a13744972?from=webShare&channel=copyLink` | 新片场视频链接 |
| `col` | (空) | 自动按顺序 |
| `row` | `1` | 第 1 行 |

---

## 卡 4 · 「你的名字」超写实动漫转真人预告片(id=4)

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `id` | `4` | **不要改** |
| `title` | `「你的名字」超写实动漫转真人预告片` | 小卡标题 |
| `category` | `AI 视觉创作` | 左上角徽章 |
| `desc` | `深入精通提示词工程，实现动漫角色到超写实真人的视觉转换，精准控制皮肤写实材质与光影效果。` | 50-80 字最佳 |
| `tags` | `['AI视频', '写实渲染', '动漫转真人']` | 当前未渲染 |
| `gradient` | `linear-gradient(135deg, #F4D758 0%, #D97240 100%)` | 金黄到暖橙 |
| `icon` | `✨` | 无视频时显示 |
| `video` | `/your-name-trailer.mp4` | `public/` 下文件 |
| `link` | `https://v.douyin.com/w3nOkizPOEI/` | 空字符串 = 不可点击 |
| `col` | `3` | 第 3 列 |
| `row` | `3` | 第 3 行 |

---

## 主题色板速查(改 `gradient` 用)

| 变量 | 色值 | 用途 |
|------|------|------|
| `--bg-primary` | `#fefcf6` | 暖奶 |
| `--bg-secondary` | `#faf6eb` | 浅奶 |
| `--brand-primary` | `#D97240` | **主题暖橙** |
| `--brand-primary-hover` | `#C5632F` | 暖橙深 |
| `--brand-primary-soft` | `#FBE9D8` | 暖橙浅 |
| `--brand-accent` | `#F4D758` | 金黄 |
| `--brand-pop` | `#A33A2A` | 深红 |

---

## 文件路径

```
D:\workfile\minimaxcode\project\project01_updatemywesite\project_001_个人作品集网站_v1.0\docs\projects-content.md
```