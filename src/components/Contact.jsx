import { useState } from 'react'

const contacts = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: '电话',
    value: '18621060257',
    copyable: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: '邮箱',
    value: '1029028010@qq.com',
    copyable: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: '所在地',
    value: '广东深圳',
    copyable: false,
  },
]

export default function Contact() {
  /* 记录哪张卡刚被复制:null / 0 / 1 / 2 */
  const [copiedIdx, setCopiedIdx] = useState(null)

  const handleCopy = async (text, idx) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
      } else {
        /* fallback: 旧浏览器/非 https */
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopiedIdx(idx)
      setTimeout(() => setCopiedIdx(null), 1800)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__bg">
        <div className="contact__glow contact__glow--1" />
        <div className="contact__glow contact__glow--2" />
      </div>

      <div className="container">
        <div className="contact__content">
          <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 className="contact__title">期待与你合作</h2>
          <p className="contact__subtitle">
            无论是短视频运营、AI视觉创作，还是全栈开发项目
            <br />
            我都愿意倾听你的想法
          </p>

          <div className="contact__cards">
            {contacts.map((c, i) => {
              /* 每张卡分配一个旋转角度 --r: -10° / 0° / +10° */
              const rotations = [-10, 0, 10]
              const isCopied = copiedIdx === i
              return (
                <div
                  key={i}
                  className="contact__card"
                  style={{ '--r': rotations[i] }}
                >
                  <div className="contact__card-icon">{c.icon}</div>
                  <span className="contact__card-label">{c.label}</span>
                  <span className="contact__card-value">{c.value}</span>
                  {c.copyable && (
                    <button
                      type="button"
                      className={`contact__copy-btn ${isCopied ? 'contact__copy-btn--copied' : ''}`}
                      onClick={(e) => { e.stopPropagation(); handleCopy(c.value, i) }}
                      aria-label={`复制 ${c.label}`}
                    >
                      {isCopied ? (
                        <>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          已复制
                        </>
                      ) : (
                        <>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                          </svg>
                          复制
                        </>
                      )}
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <footer className="contact__footer">
          <p>© 2026 潘英成 · 用内容创造无限可能</p>
          <p className="contact__footer-sub">Built with React + Vite & AI</p>
        </footer>
      </div>

      <style>{`
        .contact {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-bottom: 3rem;
        }

        .contact__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .contact__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }

        .contact__glow--1 {
          width: 500px;
          height: 500px;
          top: 10%;
          left: 10%;
          background: radial-gradient(circle, rgba(255,153,102,0.18), transparent 70%);
        }

        .contact__glow--2 {
          width: 400px;
          height: 400px;
          bottom: 10%;
          right: 10%;
          background: radial-gradient(circle, rgba(251,146,60,0.13), transparent 70%);
        }

        .contact__content {
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact__title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ff9966 0%, #ffbb88 50%, #ffaa77 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* 把 GET IN TOUCH 标签和 ::before 装饰线改成橙色 */
        .contact .section-label {
          color: #ff9966;
        }

        .contact .section-label::before {
          background: #ff9966;
        }

        .contact__subtitle {
          font-size: 1.1rem;
          color: #ffffff;
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .contact__cards {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          margin-bottom: 3rem;
          width: 100%;
          max-width: 700px;
          min-height: 220px;
        }

        .contact__card {
          position: relative;
          width: 200px;
          height: 200px;
          padding: 2rem 1.5rem;
          background: linear-gradient(rgba(255, 255, 255, 0.13), transparent);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 10px;
          text-align: center;
          transition: 0.5s;
          margin: 0 -45px;
          transform: rotate(calc(var(--r) * 1deg));
          z-index: 1;
          flex-shrink: 0;
        }

        /* hover 父容器 → 三张卡摊开 + 回正 */
        .contact__cards:hover .contact__card {
          transform: rotate(0deg);
          margin: 0 10px;
          z-index: 2;
        }

        /* 单独 hover 一张卡 → 它自己浮上来 + 橙色光晕 */
        .contact__card:hover {
          z-index: 3;
          border-color: rgba(255, 153, 102, 0.45);
          box-shadow: 0 25px 50px rgba(255, 153, 102, 0.25);
          transform: rotate(0deg) translateY(-8px) scale(1.05);
          margin: 0 10px;
        }

        /* 底部渐变条 — 还原 Uiverse 的 ::before data-text */
        .contact__card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40px;
          background: rgba(255, 153, 102, 0.08);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0 0 10px 10px;
          pointer-events: none;
        }

        .contact__card-icon {
          color: #ff9966;
          margin-bottom: 0.8rem;
          display: flex;
          justify-content: center;
        }

        .contact__card-label {
          display: block;
          font-size: 0.75rem;
          color: #ffffff;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .contact__card-value {
          display: block;          /* 2026-06-19: span 默认 inline,跟 inline-flex 按钮横排;强制 block 独立成行 */
          font-size: 0.9rem;
          font-weight: 500;
          color: #ffffff;
        }

        /* 复制按钮 — absolute 装饰条正中央(横竖都居中),counter-rotate 保持水平 (2026-06-19 v3) */
        .contact__copy-btn {
          position: absolute;
          /* 装饰条 40px 高,按钮 32px 高,垂直居中需要 (40-32)/2 = 4px */
          bottom: 4px;
          left: 50%;
          /* counter-rotate: 抵消父卡片的旋转,按钮始终保持水平 */
          transform: translateX(-50%) rotate(calc(var(--r) * -1deg));
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.35rem 0.95rem;
          font-size: 0.72rem;
          font-weight: 500;
          color: #ff9966;
          background: rgba(255, 153, 102, 0.12);
          border: 1px solid rgba(255, 153, 102, 0.3);
          border-radius: 100px;
          cursor: pointer;
          /* 不动 transform,只动背景/边框/阴影 */
          transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          font-family: inherit;
          letter-spacing: 0.02em;
          user-select: none;
        }

        /* 父卡片 hover 时 transform 被覆盖为 rotate(0deg),按钮也跟着回到纯居中 */
        .contact__card:hover .contact__copy-btn,
        .contact__cards:hover .contact__copy-btn {
          transform: translateX(-50%);
        }

        .contact__copy-btn:hover {
          background: rgba(255, 153, 102, 0.22);
          border-color: rgba(255, 153, 102, 0.55);
          box-shadow: 0 -2px 10px rgba(255, 153, 102, 0.35);
        }

        .contact__copy-btn:active {
          /* 保持 translateX(-50%) 居中,不被覆盖 */
          transform: translateX(-50%);
          box-shadow: none;
        }

        .contact__copy-btn--copied {
          background: rgba(34, 197, 94, 0.18);
          border-color: rgba(34, 197, 94, 0.45);
          color: #4ade80;
        }

        .contact__copy-btn--copied:hover {
          background: rgba(34, 197, 94, 0.22);
          border-color: rgba(34, 197, 94, 0.55);
        }

        .contact__footer {
          position: relative;
          z-index: 1;
          text-align: center;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
          width: 100%;
        }

        .contact__footer p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .contact__footer-sub {
          font-family: var(--font-mono);
          font-size: 0.7rem !important;
          margin-top: 0.4rem;
          color: var(--text-muted);
          opacity: 0.6;
        }

        @media (max-width: 640px) {
          /* mobile 改成纵向堆叠,不要横排堆叠(margin 负值在 360px 屏会溢出) */
          .contact__cards {
            flex-direction: column;
            gap: 1rem;
            min-height: auto;
            align-items: stretch;
          }
          .contact__card {
            width: 100%;
            max-width: 320px;
            height: auto;
            min-height: 160px;
            padding: 1.5rem 1.2rem;
            margin: 0;
            /* 取消旋转,移动端 hover 不可用,保持平铺
               !important 强制覆盖 GSAP 留下的 inline transform (2026-06-19) */
            transform: none !important;
          }
          /* mobile 没有 hover,直接平铺,不需要父容器展开效果 */
          .contact__cards:hover .contact__card,
          .contact__card:hover {
            transform: none;
            margin: 0;
          }
          /* mobile 按钮绝对定位到装饰条正中央 (上下左右都居中) (2026-06-19 v4)
             desktop 端保持原状不动,只改 mobile
             FIX 2026-06-19 v5: 之前改回 static 紧挨 value,但用户反馈按钮位置不对,
             现在改回 absolute + bottom:5px 真正在装饰条中央 */
          .contact__copy-btn {
            position: absolute;
            /* 装饰条 40px - 按钮 ~30px = 10px, /2 = 5px 垂直居中 */
            bottom: 5px;
            left: 50%;
            /* 水平居中;mobile 卡片不旋转,不需要 counter-rotate */
            transform: translateX(-50%);
            padding: 0.3rem 0.7rem;
            font-size: 0.68rem;
          }
        }
      `}</style>
    </section>
  )
}
