# Methodology 创作手记 — 可编辑文案与参数

> 这是 `src/components/Methodology.jsx` 里所有可见/可改字段的对外编辑版。
> 改完保存后告诉我"methodology-content 改完了",我同步到 JSX。
> 2 张卡每个有自己的表格,单独改不影响其他卡。
> 不要改"字段"列和"备注"列,只改"当前值"列。

---

## 卡 1 · Bunch O Balloons 产品广告创作文档

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `id` | `m1` | **不要改**,React key |
| `title` | `「Bunch O Balloons」TVC 创作全流程` | 大卡标题 |
| `desc` | `把 60 秒商业 TVC 拆成 6 个可复用环节 — 从脚本拆解 / 镜头分镜 / 提示词工程到 AI 视频拼接,每一环都给可直接抄走的 Prompt 模板。` | 50-80 字 |
| `tags` | `['提示词工程', '多镜头', '商业TVC']` | 显示在 body 内 |
| `relatedProject` | `Bunch O Balloons TVC 广告` | 副标题显示,关联 Projects id=6 |
| `feishuLink` | `https://my.feishu.cn/wiki/JqSOwcYyYiarJqk2wtycH6bfnRd` | 整张卡点击跳转,新窗口打开 |

---

## 卡 2 · ZURU 穿搭工作流创作文档

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `id` | `m2` | **不要改** |
| `title` | `「ZURU 穿搭爆款」AI 工作流拆解` | 大卡标题 |
| `desc` | `从"产品调性 × 用户喜好"挖掘开始,到角色一致性处理、多模态换装、爆款节奏复盘,完整工作流 + 9 段可直接复用提示词。` | 50-80 字 |
| `tags` | `['一致性', '多模态换装', '节奏复盘']` | 显示在 body 内 |
| `relatedProject` | `ZURU Fuggler 爆款内容复刻` | 关联 Projects id=2 |
| `feishuLink` | `https://my.feishu.cn/wiki/Oiftw7pg6iokybkp5Ixcir4SnBh` | 新窗口打开 |

---

## 卡 3 · ZURU 潮玩创意广告创作文档(2026-07-13 新增)

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `id` | `m3` | **不要改** |
| `title` | `「ZURU 潮玩创意广告」AI 全流程` | 大卡标题 |
| `desc` | `从产品卖点提炼到概念脚本、镜头分镜、提示词工程到成片交付,全链路 AI 化提效。覆盖潮玩/品牌/品类调性,产出一条商业广告片只需传统方式几分之一时间。` | 50-80 字 |
| `tags` | `['品牌广告', '多模态', '潮玩创意']` | 显示在 body 内 |
| `relatedProject` | `ZURU潮玩创意广告` | 关联 Projects id=3(2026-07-13 改名) |
| `feishuLink` | `https://my.feishu.cn/docx/PPGddKsTVoNXuRxY0D1cDEn9nmb?from=from_copylink` | 飞书 docx 链接 |

---

## Section header(整个板块的标题区)

---

## Section header(整个板块的标题区)

| 字段 | 当前值 | 备注 |
|------|--------|------|
| `eyebrow` | `Methodology · AI Workflow Notes` | section-label,英文小字 |
| `title` | `AI 创作手记` | section-title,中文大标题 |
| `subtitle` | `把成品背后的工作流拆给你看 — Prompt / 分镜 / 节奏,全过程公开。` | section-desc |

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
D:\workfile\minimaxcode\project\project01_updatemywesite\project_001_个人作品集网站_v1.0\docs\methodology-content.md
```
