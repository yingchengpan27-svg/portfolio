#!/usr/bin/env python3
"""
批量替换项目内的紫色 / 蓝紫 / 冷蓝色调为暖橙派色值。
仅对 src/ 下的源码文件做替换,不动 public/、dist/、scripts/。
"""
import re
from pathlib import Path

SRC = Path(r"D:\workfile\minimaxcode\project\project01_updatemywesite\project_001_个人作品集网站_v1.0\src")

# ── 规则: 旧色值 → 新色值 ──
# (pattern, replacement, description)
RULES = [
    # 主紫 → 主橙
    (r"rgba\(99,\s*102,\s*241,", "rgba(217, 114, 64,", "紫主色 rgba"),
    (r"#6366f1", "#D97240", "紫主色 hex"),
    (r"#818cf8", "#C5632F", "紫 hover"),
    # 紫副 → 米黄(强调色)
    (r"rgba\(139,\s*92,\s*246,", "rgba(244, 215, 88,", "紫副色 rgba → 米黄"),
    (r"#8b5cf6", "#F4D758", "紫副色 hex → 米黄"),
    (r"#a78bfa", "#E8C544", "紫 hover hex → 米黄 hover"),
    # 冷蓝 → 暖橙
    (r"rgba\(59,\s*130,\s*246,", "rgba(217, 114, 64,", "冷蓝 rgba → 暖橙"),
    (r"rgba\(96,\s*165,\s*250,", "rgba(251, 233, 216,", "浅蓝 rgba → 浅橙"),
    (r"rgba\(37,\s*99,\s*235,", "rgba(217, 114, 64,", "深蓝 rgba → 暖橙"),
    (r"#af40ff", "#D97240", "亮紫 → 主橙"),
    (r"#5b42f3", "#C5632F", "深紫 → 深橙"),
    (r"#00ddeb", "#F4D758", "cyan → 米黄"),
    # DynamicBackground 的 orange 系保留,只把"混入的冷蓝"换掉
    # 这些已经是橙色,不动: rgba(249, 115, 22, X) / rgba(251, 146, 60, X) / rgba(234, 88, 12, X)
]

EXTS = {".jsx", ".css", ".js"}

def should_skip(path: Path) -> bool:
    """public/ dist/ scripts/ 目录不动,只动 src/。"""
    s = str(path).replace("\\", "/")
    return not ("/src/" in s or s.endswith("/src"))

def main():
    changed_files = []
    for f in SRC.rglob("*"):
        if not f.is_file():
            continue
        if f.suffix.lower() not in EXTS:
            continue
        try:
            txt = f.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            print(f"  SKIP (encoding): {f}")
            continue
        orig = txt
        hits = 0
        for pat, rep, desc in RULES:
            new_txt, n = re.subn(pat, rep, txt)
            if n:
                hits += n
                txt = new_txt
        if txt != orig:
            f.write_text(txt, encoding="utf-8")
            changed_files.append((f, hits))
            print(f"  ✓ {f.relative_to(SRC)}  ({hits} hits)")
    print(f"\n总计: {len(changed_files)} 个文件被修改")
    for f, n in changed_files:
        print(f"   - {f.relative_to(SRC)}: {n} 处")

if __name__ == "__main__":
    main()