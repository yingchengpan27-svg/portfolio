import pathlib
p = pathlib.Path(r'C:\Users\Ying\Documents\个人作品集网站\src\components\Hero.jsx')
s = p.read_text(encoding='utf-8')
needle = '            <a href="#about" className="btn btn-outline">'
if needle not in s:
    raise SystemExit('needle-not-found')
insert = '''            <a href="http://127.0.0.1:5173" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              直接预览
            </a>
'''
s = s.replace(needle, insert + needle, 1)
p.write_text(s, encoding='utf-8')
print('patched')
