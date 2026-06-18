import { useState, useEffect } from 'react'

const navbarData = {
  brand: { icon: 'PY', text: '潘英成' },
  items: [
    { label: '首页', href: '#hero' },
    { label: '关于', href: '#about' },
    { label: '作品', href: '#projects' },
    { label: '优势', href: '#skills' },
    { label: '联系', href: '#contact' },
  ],
  cta: { label: '联系我', href: '#contact' },
};


const navItems = navbarData.items

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-icon">{navbarData.brand.icon}</span>
        </a>

        <div className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="nav__link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href={navbarData.cta.href} className="btn btn-primary nav__cta">
          {navbarData.cta.label}
        </a>

        <button
          className={`nav__burger ${mobileOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="菜单"
        >
          <span /><span /><span />
        </button>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.2rem 0;
          transition: all 0.4s var(--ease-out);
        }

        .nav--scrolled {
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid var(--border);
          padding: 0.8rem 0;
        }

        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav__logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          font-size: 1.1rem;
          letter-spacing: -0.01em;
        }

        .nav__logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--gradient-hero);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.05em;
        }

        .nav__links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav__link {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.3s;
          position: relative;
        }

        .nav__link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s var(--ease-out);
        }

        .nav__link:hover {
          color: var(--text-primary);
        }

        .nav__link:hover::after {
          width: 100%;
        }

        .nav__cta {
          padding: 0.6rem 1.4rem;
          font-size: 0.85rem;
        }

        .nav__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
        }

        .nav__burger span {
          width: 22px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s var(--ease-out);
        }

        .nav__burger--open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .nav__burger--open span:nth-child(2) {
          opacity: 0;
        }
        .nav__burger--open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .nav__links {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(10, 10, 15, 0.98);
            flex-direction: column;
            justify-content: center;
            gap: 2.5rem;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
          }

          .nav__links--open {
            opacity: 1;
            pointer-events: all;
          }

          .nav__link {
            font-size: 1.5rem;
            font-weight: 500;
          }

          .nav__cta { display: none; }
          .nav__burger { display: flex; }
        }
      `}</style>
    </nav>
  )
}
