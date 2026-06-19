import { useEffect, useRef, Fragment } from 'react'

export default function Hero() {
  const heroData = {
    badge: '新媒体全栈操盘手 · AI 视觉创作者',
    title1: '用内容创造',
    title2: '无限可能',
    desc: '5年短视频全链路运营经验，精通多平台IP打造与AI视觉创作。\n从内容策划到商业变现，用数据驱动增长。',
    stats: [
      { num: '300万+', label: 'GMV 累计成交额' },
      { num: '400万+', label: '单条视频最高播放' },
      { num: '100万+', label: '累计涨粉' },
    ],
    buttons: [
      { label: '查看作品', href: '#projects' },
      { label: '了解更多', href: '#about' },
    ],
  };

  const canvasRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // 性能优化:mobile 减少粒子数 + 关闭连线城市（双重循环 80*80=6400 次/帧 → 手机发烫）
    // 之前 80 粒子 + connectParticles() 在 iPhone 上掉帧严重
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const particleCount = isMobile ? 28 : 80
    const connectDistance = isMobile ? 0 : 150  // 0 = 关闭连线,只画粒子

    let animationId
    let particles = []
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.4 + 0.1
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const connectParticles = () => {
      // mobile 跳过双重循环(connectDistance=0 时不进入内部)
      if (connectDistance === 0) return
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / connectDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      connectParticles()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // 背景视频: canplay 时淡入,确保首帧不闪烁
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let rafId = 0
    const fadeTo = (from, to, duration, onDone) => {
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        video.style.opacity = String(from + (to - from) * t)
        if (t < 1) rafId = requestAnimationFrame(tick)
        else if (onDone) onDone()
      }
      rafId = requestAnimationFrame(tick)
    }

    const handleCanPlay = () => {
      // 确保视频真的在播放
      video.play().catch(() => {})
      fadeTo(0, 1, 500)
    }

    if (video.readyState >= 3) {
      // 已经能播放(浏览器缓存命中)
      handleCanPlay()
    } else {
      video.addEventListener('canplay', handleCanPlay, { once: true })
    }

    return () => {
      cancelAnimationFrame(rafId)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__bg">
        <video
          ref={videoRef}
          className="hero__bg-video"
          src="/背景视频1.mp4"
          muted
          autoPlay
          loop
          playsInline
          // 旧版 iOS Safari / 微信内置浏览器兼容:加 webkit 前缀,避免自动全屏播放
          // iOS 10 之前只认 webkit-playsinline,iOS 10+ 才开始认 playsInline
          webkit-playsinline="true"
          // 微信 X5 内核:防止视频被劫持跳转
          x5-video-player-type="h5"
          x5-video-orientation="portrait"
          // 2026-06-19: auto → metadata,只下载 metadata 不预下载整个视频
          // 首屏只加载几 KB 元数据,真正播放时再分段下载
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero__gradient hero__gradient--1" />
        <div className="hero__gradient hero__gradient--2" />
        <div className="hero__grid" />
        <div className="hero__fade" />
      </div>

      <div className="hero__content container hero__layout">
        <div className="hero__copy">
          <h1 className="hero__title">
            <span className="hero__title-line">
              <span className="hero__title-base">潘英成</span>
              <span className="hero__title-fill" aria-hidden="true">潘英成</span>
            </span>
          </h1>

          <div className="hero__badge">
            新媒体全栈操盘手 · AI 视觉创作者
          </div>

          <div className="hero__subtitle">
            <span className="hero__subtitle-bar" aria-hidden="true" />
            用内容创造无限可能
          </div>

          <p className="hero__desc">
            {heroData.desc.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>

          <div className="hero__actions">
            <a href={heroData.buttons[0]?.href || '#projects'} className="btn-uv">
              <span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                查看作品
              </span>
            </a>
            <a href={heroData.buttons[1]?.href || '#about'} className="btn-uv">
              <span>
                了解更多
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </a>
          </div>

          <div className="hero__stats">
            {/* Uiverse 风:动画 blob 装饰球 — 紫色版 */}
            <div className="hero__stats-blob" aria-hidden="true"></div>

            {/* Uiverse 风:5px 内缩的毛玻璃内层 */}
            <div className="hero__stats-glass">
              {heroData.stats.map((s, i) => (
                <Fragment key={i}>
                  {i > 0 && <div className="hero__stat-divider" />}
                  <div className="hero__stat">
                    <span className="hero__stat-num">{s.num}</span>
                    <span className="hero__stat-label">{s.label}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>向下滚动</span>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero__canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.35;
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__bg-video {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right 12% bottom 0;
          opacity: 0;
          will-change: opacity;
        }

        @media (min-width: 1025px) {
          .hero__bg-video { object-position: right -2% bottom 0; }
        }

        @media (max-width: 768px) {
          .hero__bg-video { object-position: center bottom 0; }
        }

        .hero__gradient {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
        }

        .hero__gradient--1 {
          width: 600px;
          height: 600px;
          top: -200px;
          right: -100px;
          background: radial-gradient(circle, rgba(99,102,241,0.36), transparent 70%);
        }

        .hero__gradient--2 {
          width: 400px;
          height: 400px;
          bottom: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(139,92,246,0.24), transparent 70%);
        }

        .hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent);
          -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent);
        }

        .hero__fade {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 12%;
          background: linear-gradient(180deg, transparent 0%, rgba(3,6,15,0.6) 50%, #03060f 100%);
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(10,10,15,0.05) 0%, rgba(10,10,15,0.2) 30%, rgba(10,10,15,0.72) 65%, rgba(10,10,15,0.92) 100%);
        }

        .hero__layout {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr);
          align-items: center;
          gap: 3.5rem;
          min-height: calc(100vh - 12rem);
        }

        .hero__copy {
          display: flex;
          flex-direction: column;
        }

        .hero__content {
          position: relative;
          z-index: 3;
          padding-top: 6rem;
          min-height: 100vh;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 0.45rem 0.95rem;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 100px;
          font-size: 0.85rem;
          color: var(--accent-hover);
          margin-bottom: 1.4rem;
        }

        .hero__badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero__title {
          font-size: clamp(3rem, 7.5vw, 6rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin-bottom: 0.6rem;
        }

        .hero__title-line {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }

        /* Base "潘英成" — 白色实心填充(始终可见,wipe 前是白色) */
        .hero__title-base {
          color: white;
        }

        /* Fill overlay — 紫色填充,wipe 时从左往右"擦开"覆盖白色 */
        .hero__title-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          color: #6366f1;
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid #6366f1;
          transition: width 0.65s cubic-bezier(0.65, 0, 0.35, 1);
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        /* Hover 触发 wipe — 紫色从左擦到右,完成时整体发光 */
        .hero__title-line:hover .hero__title-fill {
          width: 100%;
          filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.7))
                  drop-shadow(0 0 6px rgba(99, 102, 241, 0.4));
        }

        .hero__title-accent {
          background: var(--gradient-hero);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero__subtitle {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          margin-top: 0;
          font-size: clamp(1.05rem, 1.6vw, 1.35rem);
          font-weight: 500;
          letter-spacing: 0.12em;
          line-height: 1;
          background: var(--gradient-hero);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.95;
          text-transform: none;
        }

        .hero__subtitle-bar {
          display: inline-block;
          width: 36px;
          height: 2px;
          border-radius: 2px;
          background: var(--gradient-hero);
          flex-shrink: 0;
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.45);
        }

        .hero__desc {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2.5rem;
          max-width: 560px;
        }

        .hero__actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        /* Uiverse.io cssbuttons-io 渐变按钮 — 完整复现文档代码 */
        .btn-uv {
          align-items: center;
          background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
          border: 0;
          border-radius: 8px;
          box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
          box-sizing: border-box;
          color: #ffffff;
          display: inline-flex;
          font-size: 18px;
          justify-content: center;
          line-height: 1em;
          max-width: 100%;
          min-width: 140px;
          padding: 3px;
          text-decoration: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s;
          font-family: inherit;
          font-weight: 500;
          /* 入场动效 — 纯 CSS 关键帧,1.6s 延迟匹配原 GSAP 节奏,power3.out 缓动 */
          animation: btn-uv-entrance 1s cubic-bezier(0.16, 1, 0.3, 1) 1.6s both;
        }

        /* Hero 按钮入场 — 从下微浮 + 缩放 + 淡入,完成后稳定在原位 */
        @keyframes btn-uv-entrance {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .btn-uv:active,
        .btn-uv:hover {
          outline: 0;
        }

        .btn-uv span {
          background-color: rgb(5, 6, 45);
          padding: 16px 24px;
          border-radius: 6px;
          width: 100%;
          height: 100%;
          transition: 300ms;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #ffffff;
          font-size: 0.95rem;
        }

        .btn-uv:hover span {
          background: none;
        }

        .btn-uv:active {
          transform: scale(0.9);
        }

        /* ============= Uiverse 风格毛玻璃面板 ============= */
        /* 外层 .hero__stats — 文档里的 .card,负责 box-shadow + 装饰球 */
        .hero__stats {
          position: relative;
          width: fit-content;
          padding: 5px;                       /* 跟文档 .card → .bg 5px 间距一致 */
          overflow: hidden;
          border-radius: 20px;
          /* 暗色主题不用 #bebebe/#ffffff 阴影,改用紫色微光 */
          box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
        }

        /* 装饰球 — 文档里的 .blob,紫色版 */
        .hero__stats-blob {
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background-color: var(--accent);
          opacity: 0.55;
          filter: blur(20px);
          animation: hero-stats-blob-bounce 6s infinite ease;
          pointer-events: none;
        }

        @keyframes hero-stats-blob-bounce {
          0%   { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
          25%  { transform: translate(-100%, -100%) translate3d(100%, 0, 0); }
          50%  { transform: translate(-100%, -100%) translate3d(100%, 100%, 0); }
          75%  { transform: translate(-100%, -100%) translate3d(0, 100%, 0); }
          100% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
        }

        /* 内层毛玻璃 — 文档里的 .bg,5px 内缩 + backdrop-filter blur(24px) */
        .hero__stats-glass {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding: 1.8rem 2.5rem;
          background: rgba(255, 255, 255, 0.08);    /* 暗色玻璃微白底 */
          backdrop-filter: blur(24px);              /* 跟文档一致 */
          -webkit-backdrop-filter: blur(24px);
          border-radius: 16px;
          outline: 1px solid rgba(255, 255, 255, 0.15);  /* 跟文档 2px solid white 同款,改细一点 */
        }

        .hero__stat-num {
          display: block;
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          background: var(--gradient-hero);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero__stat-label {
          font-size: 0.8rem;
          color: white;
          margin-top: 0.2rem;
          display: block;
        }

        .hero__stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border);
        }

        .hero__scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-muted);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .hero__scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          animation: scrollLine 2s ease-in-out infinite;
        }

        @keyframes scrollLine {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50%  { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
        }

        @media (max-width: 1024px) {
          .hero__layout {
            /* 2026-06-19: 1fr → minmax(0, 1fr),允许 grid item 收缩到内容以下
               之前 1fr = minmax(auto, 1fr),grid item min-width:auto 让 inline-flex 子元素
               (subtitle width=552px) 撑大 grid column,导致 viewport (390px) 右侧溢出 */
            grid-template-columns: minmax(0, 1fr);
            text-align: center;
            justify-items: center;
            gap: 2.5rem;
            min-height: auto;
          }

          .hero__copy {
            /* 关键:grid item 加 min-width:0 才能在 inline-flex 子元素撑大时不被拉伸 */
            min-width: 0;
            width: 100%;
            max-width: 100%;
          }

          .hero__desc { max-width: 640px; }
          .hero__actions { justify-content: center; flex-wrap: wrap; }
          .hero__stats { margin: 0 auto; width: 100%; }

        }

        @media (max-width: 1024px) {
          .hero__content { min-height: auto; }
        }

        @media (max-width: 768px) {
          .hero__content { padding-top: 8rem; }
          .hero__stats {
            flex-direction: column;
            gap: 1.2rem;
            padding: 1.5rem;
            width: 100%;
          }
          .hero__stat-divider {
            width: 60px;
            height: 1px;
          }
          .hero__stat {
            text-align: center;
          }
          .hero__scroll { display: none; }
        }
      `}</style>
    </section>
  )
}
