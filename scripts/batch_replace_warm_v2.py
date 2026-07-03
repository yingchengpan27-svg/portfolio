#!/usr/bin/env python3
"""
第二阶段替换:
1. Projects.jsx / Accounts.jsx 的项目卡背景渐变: 暗黑系 → 暖底系
2. Skills.jsx / Contact.jsx 的亮橙 #ff9966 系 → 暖橙派 #D97240 系
3. 残留的暗黑底色 #0a0a0f / #03060f / #1a1a2e (除 Accounts 的平台官方色) → 暖底
"""
import re
from pathlib import Path

SRC = Path(r"D:\workfile\minimaxcode\project\project01_updatemywesite\project_001_个人作品集网站_v1.0\src")

# ── 第二阶段: 渐变背景替换 ──
# Projects 6 个项目背景渐变 → 暖底系
PROJECTS_GRADIENTS = [
    (r"linear-gradient\(135deg,\s*#1a1a2e\s*0%,\s*#16213e\s*50%,\s*#0f3460\s*100%\)",
     "linear-gradient(135deg, #faf6eb 0%, #fff3d9 50%, #FBE9D8 100%)", "项目1 深蓝渐变→暖底"),
    (r"linear-gradient\(135deg,\s*#2d1b69\s*0%,\s*#11998e\s*100%\)",
     "linear-gradient(135deg, #F4D758 0%, #D97240 100%)", "项目2 紫绿渐变→黄橙渐变"),
    (r"linear-gradient\(135deg,\s*#0a0a0f\s*0%,\s*#D97240\s*100%\)",
     "linear-gradient(135deg, #faf6eb 0%, #D97240 100%)", "项目3 暗橙渐变→暖橙渐变"),
    (r"linear-gradient\(135deg,\s*#0a0a0f\s*0%,\s*#1b4332\s*50%,\s*#2d6a4f\s*100%\)",
     "linear-gradient(135deg, #faf6eb 0%, #FBE9D8 50%, #D97240 100%)", "项目4 暗绿渐变→暖橙渐变"),
    (r"linear-gradient\(135deg,\s*#0c0c1d\s*0%,\s*#1a0a2e\s*50%,\s*#2d1b69\s*100%\)",
     "linear-gradient(135deg, #fefcf6 0%, #FBE9D8 50%, #D97240 100%)", "项目5 深紫渐变→暖橙渐变"),
    (r"linear-gradient\(135deg,\s*#1a1a2e\s*0%,\s*#e94560\s*100%\)",
     "linear-gradient(135deg, #fefcf6 0%, #A33A2A 100%)", "项目6 墨红渐变→砖红"),
]

# Accounts 5 个账号卡背景渐变(保留平台官方色,但底色从暗黑换成暖底)
ACCOUNTS_GRADIENTS = [
    (r"linear-gradient\(135deg,\s*#0a0a0f\s*0%,\s*#fe2c55\s*100%\)",
     "linear-gradient(135deg, #fefcf6 0%, #fe2c55 100%)", "抖音 暗底→暖底"),
    (r"linear-gradient\(135deg,\s*#1a1a2e\s*0%,\s*#0f3460\s*100%\)",
     "linear-gradient(135deg, #faf6eb 0%, #FBE9D8 100%)", "小红书 深蓝→暖底"),
    (r"linear-gradient\(135deg,\s*#16213e\s*0%,\s*#fe2c55\s*100%\)",
     "linear-gradient(135deg, #faf6eb 0%, #fe2c55 100%)", "抖音 深蓝→暖底"),
    (r"linear-gradient\(135deg,\s*#fb7299\s*0%,\s*#1a1a2e\s*100%\)",
     "linear-gradient(135deg, #fb7299 0%, #fefcf6 100%)", "B站 粉到墨→粉到暖底"),
    (r"linear-gradient\(135deg,\s*#fb7299\s*0%,\s*#2d1b69\s*100%\)",
     "linear-gradient(135deg, #fb7299 0%, #D97240 100%)", "B站 粉到紫→粉到暖橙"),
]

# Contact 的暖橙调统一替换为暖橙派
CONTACT_ORANGE = [
    (r"#ff9966", "#D97240", "亮橙 hex → 主暖橙"),
    (r"#ffbb88", "#FBE9D8", "浅橙 → 浅橙底"),
    (r"#ffaa77", "#F4B860", "浅橙 → 橙黄"),
    (r"rgba\(255,\s*153,\s*102,", "rgba(217, 114, 64,", "橙 rgba → 主暖橙 rgba"),
]

# Hero 的暗黑渐变 → 暖底或保留暗色锚点
HERO_DARK = [
    (r"linear-gradient\(180deg,\s*transparent\s*0%,\s*rgba\(3,6,15,0\.6\)\s*50%,\s*#03060f\s*100%\)",
     "linear-gradient(180deg, transparent 0%, rgba(254, 252, 246, 0.4) 50%, #fefcf6 100%)", "Hero 暗底渐变→暖底"),
]

# DynamicBackground 暗底
DYNAMIC_BG = [
    (r"background:\s*#03060f\s*;", "background: #fefcf6;", "DynamicBackground 暗底→暖底"),
]

# Skills 暗底
SKILLS_BG = [
    (r"background:\s*#0a0a0f\s*;", "background: #fefcf6;", "Skills 暗底→暖底"),
]

# Hero 关键过渡
HERO_TRANSITION = [
    # Hero 的 radial-gradient 中间蓝紫/暗色 已经在第一阶段被替换,但有几行 Hero 的 mask-image 和 复杂渐变需要单独处理
]

def apply_rules(path: Path, rules, tag=""):
    try:
        txt = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return 0
    orig = txt
    hits = 0
    for pat, rep, desc in rules:
        new_txt, n = re.subn(pat, rep, txt)
        if n:
            hits += n
            txt = new_txt
    if txt != orig:
        path.write_text(txt, encoding="utf-8")
        print(f"  ✓ {path.relative_to(SRC)} [{tag}]  ({hits} hits)")
    return hits

def main():
    files = [
        (SRC / "components" / "Projects.jsx", PROJECTS_GRADIENTS, "Projects项目卡渐变"),
        (SRC / "components" / "Accounts.jsx", ACCOUNTS_GRADIENTS, "Accounts账号卡渐变"),
        (SRC / "components" / "Contact.jsx", CONTACT_ORANGE, "Contact暖橙"),
        (SRC / "components" / "Skills.jsx", CONTACT_ORANGE + SKILLS_BG, "Skills暖橙+暗底"),
        (SRC / "components" / "DynamicBackground.jsx", DYNAMIC_BG, "DynamicBackground暗底"),
        (SRC / "components" / "Hero.jsx", HERO_DARK, "Hero暗底过渡"),
    ]
    total = 0
    for path, rules, tag in files:
        total += apply_rules(path, rules, tag)
    print(f"\n总计: {total} 处替换")

if __name__ == "__main__":
    main()