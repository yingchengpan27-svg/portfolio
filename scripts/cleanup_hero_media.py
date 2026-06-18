import pathlib
p = pathlib.Path(r'C:\Users\Ying\Documents\个人作品集网站\src\components\Hero.jsx')
s = p.read_text(encoding='utf-8')

# Remove leftover hero media styles
blocks = [
    '''
        .hero__media {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero__media-frame {
          position: relative;
          width: min(420px, 38vw);
          aspect-ratio: 3 / 4;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: linear-gradient(180deg, rgba(99,102,241,0.12), rgba(139,92,246,0.06));
          box-shadow: 0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03) inset;
        }

        .hero__media-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(10,10,15,0.85));
          pointer-events: none;
        }

        .hero__media-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
'''
]
for block in blocks:
    if block in s:
        s = s.replace(block, '')

# Add mobile opacity tweak for background photo
old = '''          .hero__bg-photo {
            background-position: right -2% top 22%;
            opacity: 0.7;
          }
        }'''
new = '''          .hero__bg-photo {
            background-position: right -2% top 22%;
            opacity: 0.7;
          }
        }

        @media (max-width: 768px) {
          .hero__bg-photo { opacity: 0.55; background-position: center top 26%; }
        }'''
if old in s and 'max-width: 768px' not in s.split('.hero__bg-photo { opacity: 0.55; background-position: center top 26%; }')[0][-200:]:
    s = s.replace(old, new, 1)

p.write_text(s, encoding='utf-8')
print('cleaned')
