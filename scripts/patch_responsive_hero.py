import pathlib
p = pathlib.Path(r'C:\Users\Ying\Documents\个人作品集网站\src\components\Hero.jsx')
s = p.read_text(encoding='utf-8')

# Remove media layout references inside 1024 block
s = s.replace('\n          .hero__media { order: -1; }\n          .hero__media-frame { width: min(320px, 72vw); aspect-ratio: 4 / 3; }\n', '\n')

# Add min-height reset for mobile to avoid unnecessary scroll
needle = '        @media (max-width: 768px) {\n          .hero__content { padding-top: 8rem; }'
replacement = '        @media (max-width: 1024px) {\n          .hero__content { min-height: auto; }\n        }\n\n        @media (max-width: 768px) {\n          .hero__content { padding-top: 8rem; }'
if needle in s and '.hero__content { min-height: auto; }' not in s:
    s = s.replace(needle, replacement, 1)

p.write_text(s, encoding='utf-8')
print('patched-responsive')
