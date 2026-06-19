import { useState } from 'react'

const info = {
  name: '潘英成',
  title: '新媒体全栈操盘手 / AI 视觉创作者',
  location: '广东深圳',
  phone: '18621060257',
  email: '1029028010@qq.com',
  education: '上海应用技术大学 · 数字媒体技术 · 本科 · 2017-2021',
  summary: [
    '5 年短视频全链路运营经验，精通抖音、B站、快手、小红书等主流平台IP打造与0-1冷启动全流程；',
    '精通平台算法与流量底层逻辑，具备独立操盘账号从冷启动到商业化闭环的成功经验；',
    '擅长内容策划与爆款打造，坚持数据驱动增长，具备超百万播放爆款及百万级商业变现能力；',
    '极强的高效自驱与敏捷学习力，紧跟前沿AI技术，熟练实现多模态AI工具深度赋能内容生产。',
  ],
  milestones: [
    { year: '2026', label: 'AI多模态视觉创制与独立全栈开发', company: '精通多模态AI全流程视觉创作与提示词工程，擅长攻克画面一致性与写实材质痛点' },
    { year: '2025', label: '个人游戏短视频账号独立运营', company: '具备独立从0到1全流程操盘游戏短视频账号的能力，通过爆款策划与算法优化成功涨粉2万+，并沉淀出一套成熟的选号与运营方法论' },
    { year: '2023', label: '短视频IP运营（医生IP方向）', company: '策划并产出多条百万级爆款视频（单条最高播放量100万+），半年内实现自然涨粉5万+' },
    { year: '2021', label: '自媒体内容全链路运营', company: '1年内实现双账号爆发式涨粉40万+与60万+，独立负责商业合作累计变现超100万' },
  ],
}

const dataPoints = [
  { num: '300万+', label: 'GMV 累计成交额' },
  { num: '400万+', label: '单条视频最高播放' },
  { num: '100万+', label: '累计涨粉' },
  { num: '5年+', label: '内容运营经验' },
]

export default function About() {
  // 复制按钮状态:'phone' | 'email' | null
  const [copied, setCopied] = useState(null)

  const handleCopy = async (text, field) => {
    try {
      // 优先用现代 Clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        // 兼容老浏览器:execCommand fallback
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(field)
      setTimeout(() => setCopied(null), 1800)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <section className="about section" id="about" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-label">About Me</div>
        <h2 className="section-title">关于我</h2>

        <div className="about__grid">
          <div className="about__left">
            <div className="about__avatar-wrap">
              <div className="about__avatar-glow" />
              <img
                src="/avatar-hd.jpg"
                alt={info.name}
                className="about__avatar"
              />
              <div className="about__avatar-ring" />
            </div>

            <div className="about__name-card">
              {/* Uiverse 风格:紫色 blob + 24px 毛玻璃内层 */}
              <div className="about__name-blob" aria-hidden="true"></div>
              <div className="about__name-glass">
                <h3 className="about__name">{info.name}</h3>
                <p className="about__role">{info.title}</p>
                <div className="about__meta">
                  <span>📍 {info.location}</span>
                  <span>🎓 {info.education}</span>
                </div>
              </div>
            </div>

            <div className="about__contact-quick">
              <span className="about__contact-btn">
                <div className="about__contact-blob" aria-hidden="true"></div>
                <div className="about__contact-glass">
                  <svg className="about__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  {info.phone}
                  <button
                    className={`about__copy-btn ${copied === 'phone' ? 'about__copy-btn--copied' : ''}`}
                    onClick={(e) => { e.stopPropagation(); handleCopy(info.phone, 'phone') }}
                    aria-label="复制电话"
                    type="button"
                  >
                    {copied === 'phone' ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    )}
                    <span>{copied === 'phone' ? '已复制' : '复制'}</span>
                  </button>
                </div>
              </span>
              <span className="about__contact-btn">
                <div className="about__contact-blob" aria-hidden="true"></div>
                <div className="about__contact-glass">
                  <svg className="about__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  {info.email}
                  <button
                    className={`about__copy-btn ${copied === 'email' ? 'about__copy-btn--copied' : ''}`}
                    onClick={(e) => { e.stopPropagation(); handleCopy(info.email, 'email') }}
                    aria-label="复制邮箱"
                    type="button"
                  >
                    {copied === 'email' ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    )}
                    <span>{copied === 'email' ? '已复制' : '复制'}</span>
                  </button>
                </div>
              </span>
            </div>
          </div>

          <div className="about__right">
            <div className="about__intro-card">
              {/* Uiverse 风格:紫色 blob + 24px 毛玻璃内层 */}
              <div className="about__intro-blob" aria-hidden="true"></div>
              <div className="about__intro-glass">
                <h4 className="about__intro-title">个人总结</h4>
                <div className="about__intro-text">
                  {info.summary.map((s, i) => (
                    <p key={i}>{s}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="about__data-grid">
              {dataPoints.map((d, i) => (
                <div
                  key={d.label}
                  className="about__data-card"
                  style={{ '--blob-delay': `${i * -1.5}s` }}
                >
                  {/* Uiverse 风格:小号紫色 blob + 毛玻璃内层 */}
                  <div className="about__data-blob" aria-hidden="true"></div>
                  <div className="about__data-glass">
                    <span className="about__data-num">{d.num}</span>
                    <span className="about__data-label">{d.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__timeline">
              {/* Uiverse 风格:紫色 blob + 24px 毛玻璃内层 */}
              <div className="about__timeline-blob" aria-hidden="true"></div>
              <div className="about__timeline-glass">
                <h4 className="about__intro-title">职业历程</h4>
                {info.milestones.map((m, i) => (
                  <div key={i} className="about__timeline-item">
                    <div className="about__timeline-dot" />
                    <div className="about__timeline-content">
                      <span className="about__timeline-year">{m.year}</span>
                      <span className="about__timeline-label">{m.label}</span>
                      <span className="about__timeline-company">{m.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          padding-top: 0;
        }

        .about__grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 3.5rem;
          margin-top: 2.5rem;
        }

        .about__left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about__avatar-wrap {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto 0.5rem;
          cursor: pointer;
        }

        .about__avatar-glow {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-glow), transparent 70%);
          filter: blur(20px);
          opacity: 0.7;
          transition: inset 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.5s ease,
                      opacity 0.4s ease;
        }

        .about__avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 1;
          border: 3px solid var(--border);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      border-color 0.4s ease,
                      box-shadow 0.5s ease,
                      filter 0.4s ease;
        }

        .about__avatar-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px dashed rgba(99, 102, 241, 0.2);
          animation: spin 20s linear infinite;
          transition: inset 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      border-color 0.4s ease,
                      border-width 0.3s ease;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ============= 头像 hover 动效 ============= */
        .about__avatar-wrap:hover .about__avatar {
          transform: scale(1.07) rotate(3deg);                /* 微放大 + 微旋转 */
          border-color: rgba(99, 102, 241, 0.75);            /* 边框变紫 */
          box-shadow:
            0 0 30px rgba(99, 102, 241, 0.45),                /* 内层光晕 */
            0 0 60px rgba(99, 102, 241, 0.2);                 /* 外层扩散 */
          filter: brightness(1.08) saturate(1.15);           /* 提亮 + 加饱和 */
        }

        .about__avatar-wrap:hover .about__avatar-glow {
          inset: -35px;                                       /* 光晕范围扩大 */
          filter: blur(28px);
          opacity: 1;                                         /* 强度翻倍 */
        }

        .about__avatar-wrap:hover .about__avatar-ring {
          inset: -14px;                                       /* 虚线环外扩 */
          border-color: rgba(99, 102, 241, 0.7);              /* 变亮 */
          border-width: 2.5px;
        }

        /* ============= Uiverse 风:姓名卡 .about__name-card ============= */
        .about__name-card {
          position: relative;
          padding: 5px;
          overflow: hidden;
          border-radius: 20px;
          background: transparent;
          border: none;
          box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
        }

        .about__name-blob {
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: var(--accent);
          opacity: 0.5;
          filter: blur(22px);
          pointer-events: none;
          animation: about-blob-bounce 7s infinite ease;
          animation-delay: -2s;
        }

        .about__name-glass {
          position: relative;
          z-index: 1;
          padding: 1.5rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 16px;
          outline: 1px solid rgba(255, 255, 255, 0.15);
        }

        .about__name {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          position: relative;
          z-index: 2;
        }

        .about__role {
          font-size: 0.85rem;
          color: var(--accent-hover);
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .about__meta {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: white;
          position: relative;
          z-index: 2;
        }

        /* ============= Uiverse 风:联系方式按钮 .about__contact-btn ============= */
        .about__contact-quick {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .about__contact-btn {
          position: relative;
          padding: 5px;                  /* 5px inset 给 .contact-glass */
          overflow: hidden;
          border-radius: 16px;
          background: transparent;
          border: none;
          text-decoration: none;
          cursor: default;               /* 去掉手型光标,看起来不是链接 */
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.12);
        }

        .about__contact-blob {
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: var(--accent);
          opacity: 0.45;
          filter: blur(18px);
          pointer-events: none;
          animation: about-blob-bounce 6s infinite ease;
        }

        /* 第二个按钮错峰 */
        .about__contact-btn:nth-of-type(2) .about__contact-blob {
          animation-delay: -3s;
        }

        .about__contact-glass {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 12px;
          outline: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 0.85rem;
          color: white;
          /* 不再 hover 变色,纯展示样式 */
        }

        /* 复制按钮 — 推到右侧 */
        .about__copy-btn {
          margin-left: auto;                    /* 推到玻璃卡最右边 */
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.65rem;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.35);
          border-radius: 100px;
          color: #c7d2fe;
          font-size: 0.72rem;
          font-family: inherit;
          cursor: pointer;
          user-select: none;
          transition: background 0.25s, color 0.25s, border-color 0.25s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .about__copy-btn:hover {
          background: rgba(99, 102, 241, 0.28);
          border-color: rgba(99, 102, 241, 0.55);
          color: white;
        }

        .about__copy-btn:active {
          transform: scale(0.95);
        }

        /* 已复制状态 — 变绿 */
        .about__copy-btn--copied {
          background: rgba(34, 197, 94, 0.22);
          border-color: rgba(74, 222, 128, 0.6);
          color: #4ade80;
        }

        .about__copy-btn--copied:hover {
          background: rgba(34, 197, 94, 0.22);
          color: #4ade80;
        }

        .about__right {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* ============= Uiverse 风格毛玻璃卡片(同款 5px inset + blob) ============= */

        /* 外层 .card — 文档里的 .card:负责 box-shadow + 装饰球容器 */
        .about__intro-card,
        .about__timeline {
          position: relative;
          padding: 5px;
          overflow: hidden;
          border-radius: 20px;
          background: transparent;
          border: none;
          box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
        }

        .about__data-card {
          position: relative;
          padding: 5px;
          overflow: hidden;
          border-radius: 18px;
          background: transparent;
          border: none;
          transition: transform 0.3s ease;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.12);
        }

        /* 内层毛玻璃 .bg — 24px blur,跟 Hero stats 同款 */
        .about__intro-glass,
        .about__timeline-glass {
          position: relative;
          z-index: 1;
          padding: 2rem;
          /* 2026-06-19: 背景透明度从 0.08 提到 0.2,让里面紫色文字更清晰 (blob 不再干扰阅读) */
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 16px;
          outline: 1px solid rgba(255, 255, 255, 0.15);
        }

        .about__data-glass {
          position: relative;
          z-index: 1;
          padding: 1.3rem 1rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 14px;
          outline: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* 装饰球 .blob — 紫色版,跟 Hero stats 一致 */
        .about__intro-blob,
        .about__timeline-blob {
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background-color: var(--accent);
          opacity: 0.5;
          filter: blur(24px);
          pointer-events: none;
          animation: about-blob-bounce 7s infinite ease;
        }

        /* 小卡片用小一号的 blob */
        .about__data-blob {
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: var(--accent);
          opacity: 0.45;
          filter: blur(18px);
          pointer-events: none;
          animation: about-blob-bounce 6s infinite ease;
          animation-delay: var(--blob-delay, 0s);
        }

        @keyframes about-blob-bounce {
          0%   { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
          25%  { transform: translate(-100%, -100%) translate3d(100%, 0, 0); }
          50%  { transform: translate(-100%, -100%) translate3d(100%, 100%, 0); }
          75%  { transform: translate(-100%, -100%) translate3d(0, 100%, 0); }
          100% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
        }

        /* Data card hover — 在玻璃层基础上再加微抬 */
        .about__data-card:hover {
          transform: translateY(-3px);
        }

        .about__intro-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .about__intro-title::before {
          content: '';
          width: 3px;
          height: 16px;
          background: var(--accent);
          border-radius: 2px;
        }

        .about__intro-text {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .about__intro-text p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          padding-left: 0.8rem;
          border-left: 1px solid var(--border);
        }

        .about__data-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .about__data-num {
          display: block;
          font-size: 1.3rem;
          font-weight: 700;
          background: var(--gradient-hero);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.3rem;
          position: relative;
          z-index: 2;
        }

        .about__data-label {
          font-size: 0.75rem;
          color: white;
          position: relative;
          z-index: 2;
        }

        .about__timeline-item {
          display: flex;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
          position: relative;
        }

        .about__timeline-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .about__timeline-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent);
          margin-top: 0.3rem;
          flex-shrink: 0;
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .about__timeline-content {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .about__timeline-year {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
        }

        .about__timeline-label {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .about__timeline-company {
          font-size: 0.8rem;
          /* 2026-06-19 v2: 描述文字改成主体紫色 var(--accent)=#6366f1 */
          color: var(--accent);
          /* 2026-06-19 v3: 主紫色 30% 透明度文字投影,轻微发光效果 */
          text-shadow: 0 0 6px rgba(99, 102, 241, 0.3);
          white-space: nowrap;
          overflow: visible;
        }

        @media (max-width: 1024px) {
          .about__grid {
            grid-template-columns: 1fr;
          }
          .about__left {
            align-items: center;
          }
          .about__data-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .about__data-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
