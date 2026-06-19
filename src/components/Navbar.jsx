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
    /* 2026-06-19: scroll 监听用 rAF 节流,避免 setState 频繁触发
       之前每帧都调 setScrolled,setState 频繁触发 React re-render */
    let rafId = 0
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60)
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
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
          /* 2026-06-19: mobile 端去掉"优势"菜单项,desktop 端保留
             用属性选择器匹配 href="#skills",不修改 JSX */
          .nav__link[href="#skills"] {
            display: none;
          }
          /* mobile 菜单改成右上角小卡片下拉 (2026-06-19)
             之前是 position:fixed 全屏菜单,改成 absolute + 小卡片浮在 burger 按钮下方 */
          .nav__links {
            position: absolute;
            top: calc(100% + 0.5rem);   /* nav 容器下方 8px */
            right: 1rem;                /* 跟 burger 按钮右对齐 */
            min-width: 180px;
            background: rgba(10, 10, 15, 0.92);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 0.5rem;
            flex-direction: column;
            justify-content: flex-start;
            gap: 0.15rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-8px);
            transition: opacity 0.2s var(--ease-out), transform 0.2s var(--ease-out);
          }

          .nav__links--open {
            opacity: 1;
            pointer-events: all;
            transform: translateY(0);
          }

          .nav__link {
            font-size: 0.95rem;
            font-weight: 500;
            padding: 0.65rem 0.85rem;
            border-radius: 8px;
            transition: background 0.2s;
          }

          .nav__link:hover {
            background: rgba(99, 102, 241, 0.15);
          }

          .nav__cta { display: none; }
          .nav__burger { display: flex; }
        }
      `}</style>
    </nav>
  )
}
