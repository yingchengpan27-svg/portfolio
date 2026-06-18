import pathlib
p = pathlib.Path(r'C:\Users\Ying\Documents\个人作品集网站\src\components\Hero.jsx')
s = p.read_text(encoding='utf-8')

# Insert background image layer inside hero__bg
s = s.replace(
    '      <div className="hero__bg">\n        <div className="hero__gradient hero__gradient--1" />\n        <div className="hero__gradient hero__gradient--2" />\n        <div className="hero__grid" />\n      </div>',
    '      <div className="hero__bg">\n        <div className="hero__bg-photo" aria-hidden="true" />\n        <div className="hero__gradient hero__gradient--1" />\n        <div className="hero__gradient hero__gradient--2" />\n        <div className="hero__grid" />\n      </div>',
    1,
)

# Remove right-side media frame so image is background-only
media_block = '''        <div className="hero__media animate-in delay-2">
          <div className="hero__media-frame">
            <img src="/参考1.png" alt="参考作品视觉" loading="eager" />
          </div>
        </div>
'''
if media_block in s:
    s = s.replace(media_block, '')

# Update layout to single-column to keep content readable on left
s = s.replace('grid-template-columns: 1.15fr 0.85fr;', 'grid-template-columns: minmax(0, 0.95fr);', 1)

# Insert hero__bg-photo styles after hero__bg block
needle = '''        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }'''
replacement = '''        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__bg-photo {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: url('/参考1.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: right 12% top 28%;
          opacity: 0.65;
        }

        @media (min-width: 1025px) {
          .hero__bg-photo {
            background-position: right -2% top 22%;
            opacity: 0.7;
          }
        }'''
if needle in s:
    s = s.replace(needle, replacement, 1)

# Adjust overlays to favor upper cosmic coverage while keeping text readable
s = s.replace('filter: blur(80px);', 'filter: blur(90px);', 1)
s = s.replace('background: radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%);', 'background: radial-gradient(circle, rgba(99,102,241,0.36), transparent 70%);', 1)
s = s.replace('background: radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%);', 'background: radial-gradient(circle, rgba(139,92,246,0.24), transparent 70%);', 1)

# Add top-favored gradient overlay after existing hero__grid styles
needle2 = '''          -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent);
        }'''
replacement2 = '''          -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent);
        }

        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(10,10,15,0.05) 0%, rgba(10,10,15,0.2) 30%, rgba(10,10,15,0.72) 65%, rgba(10,10,15,0.92) 100%);
        }'''
if needle2 in s:
    s = s.replace(needle2, replacement2, 1)

# Ensure content is above overlays
s = s.replace('          z-index: 2;\n          padding-top: 6rem;\n          min-height: 100vh;', '          z-index: 3;\n          padding-top: 6rem;\n          min-height: 100vh;', 1)

# Slightly soften canvas so photo reads better
s = s.replace('          opacity: 0.5;', '          opacity: 0.35;', 1)

p.write_text(s, encoding='utf-8')
print('patched')
