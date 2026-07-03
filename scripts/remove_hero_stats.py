#!/usr/bin/env python3
"""
彻底删除 Hero.jsx 的 hero__stats 数据卡板块(用户要求"核心优势去掉" + 数字看不清的源头)。
之前几次 Edit 都因 Safe-Edit 失败没生效,这次用 Python 脚本重写。
"""
import re
from pathlib import Path

FILE = Path(r"D:\workfile\minimaxcode\project\project01_updatemywesite\project_001_个人作品集网站_v1.0\src\components\Hero.jsx")

# 读
txt = FILE.read_text(encoding="utf-8")
orig = txt
hits = 0

# 1. 删 import { Fragment } from 'react'
new_txt, n = re.subn(
    r"import \{ Fragment \} from 'react'\n",
    "// 2026-07-02: Fragment import 随 hero__stats 删除而移除(原用于 stats.map 的 Fragment key)\n",
    txt
)
if n: hits += n; txt = new_txt

# 2. 删 heroData.stats 数组
new_txt, n = re.subn(
    r"\n    stats: \[\s*\n\s*\{ num: '300万\+', label: 'GMV 累计成交额' \},\s*\n\s*\{ num: '400万\+', label: '单条视频最高播放' \},\s*\n\s*\{ num: '100万\+', label: '累计涨粉' \},\s*\n\s*\],\n",
    "",
    txt
)
if n: hits += n; txt = new_txt

# 3. 删 <div className="hero__stats"> ... </div> 整个 JSX 块
new_txt, n = re.subn(
    r"          <div className=\"hero__stats\">.*?</div>\n",
    "",
    txt,
    flags=re.DOTALL
)
if n: hits += n; txt = new_txt

# 4. 删 .hero__stats { ... } 整个 CSS 块(包含所有相关选择器)
# 先用大正则匹配整个数据条相关 CSS 块
new_txt, n = re.subn(
    r"        /\* ============= 暖橙派数据条面板 ============= \*/.*?\.hero__stat-divider \{\s*\n\s*width: 1px;\s*\n\s*height: 40px;\s*\n\s*background: var\(--border\);\s*\n\s*\}\s*\n",
    "",
    txt,
    flags=re.DOTALL
)
if n: hits += n; txt = new_txt

# 5. 删 mobile 媒体查询里的 .hero__stats 相关规则
# .hero__stats { margin: 0 auto; width: 100%; }
new_txt, n = re.subn(
    r"          \.hero__stats \{ margin: 0 auto; width: 100%; \}\n",
    "",
    txt
)
if n: hits += n; txt = new_txt

# 6. 删 .hero__stats flex-direction column mobile 块
new_txt, n = re.subn(
    r"          \.hero__stats \{\s*\n\s*flex-direction: column;\s*\n\s*gap: 1\.2rem;\s*\n\s*padding: 1\.5rem;\s*\n\s*width: 100%;\s*\n\s*\}\s*\n",
    "",
    txt
)
if n: hits += n; txt = new_txt

# 7. 删 .hero__stats-glass flex-direction column mobile 块
new_txt, n = re.subn(
    r"          \.hero__stats-glass \{\s*\n\s*flex-direction: column;\s*\n\s*gap: 1rem;\s*\n\s*padding: 1\.5rem;\s*\n\s*width: 100%;\s*\n\s*min-width: 0;\s*\n\s*\}\s*\n",
    "",
    txt
)
if n: hits += n; txt = new_txt

# 8. 删 .hero__stat-divider 和 .hero__stat mobile 规则
new_txt, n = re.subn(
    r"          \.hero__stat-divider \{\s*\n\s*width: 60px;\s*\n\s*height: 1px;\s*\n\s*\}\s*\n\s*\.hero__stat \{\s*\n\s*text-align: center;\s*\n\s*\}\s*\n",
    "",
    txt
)
if n: hits += n; txt = new_txt

# 9. 删 mobile 媒体查询 .hero__stats transform 兜底规则
new_txt, n = re.subn(
    r"          \.hero__subtitle,\s*\n\s*\.hero__stats,\s*\n\s*\.hero__title-line,",
    "          .hero__subtitle,\n          .hero__title-line,",
    txt
)
if n: hits += n; txt = new_txt

# 10. 删 .hero__stats-glass mobile backdrop-filter 规则
new_txt, n = re.subn(
    r"          \.hero__stats-glass \{\s*\n\s*backdrop-filter: none !important;\s*\n\s*-webkit-backdrop-filter: none !important;\s*\n\s*\}\s*\n",
    "",
    txt
)
if n: hits += n; txt = new_txt

# 写
if txt != orig:
    FILE.write_text(txt, encoding="utf-8")
    print(f"OK: {hits} 处替换")
else:
    print("无变化")

# 验证
verify = FILE.read_text(encoding="utf-8")
for k in ["hero__stats", "heroData.stats", "Fragment"]:
    cnt = verify.count(k)
    print(f"  {k}: {cnt} 次出现")
