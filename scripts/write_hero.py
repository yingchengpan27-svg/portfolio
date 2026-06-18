from pathlib import Path
p = Path(r'C:\Users\Ying\Documents\个人作品集网站\src\components\Hero.jsx')
content = """\
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

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

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle())
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 150)})`
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

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__bg">
        <div className="hero__gradient hero__gradient--1" />
        <div className="hero__gradient hero__gradient--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content container hero__layout">
        <div className="hero__copy">
          <div className="hero__badge animate-in">
            <span className="hero__badge-dot" />
            新媒体全栈操盘手 · AI 视觉创作者
          </div>

          <h1 className="hero__title animate-in delay-1">
            <span className="hero__title-line">用内容创造</span>
            <span className="hero__title-line hero__title-accent">无限可能</span>
          </h1>

          <p className="hero__desc animate-in delay-2">
            4年短视频全链路运营经验，精通多平台IP打造与AI视觉创作。
            <br />
            从内容策划到商业变现，用数据驱动增长。
          </p>

          <div className="hero__actions animate-in delay-3">
            <a href="#projects" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              查看作品
            </a>
            <a href="#about" className="btn btn-outline">
              了解更多
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="hero__stats animate-in delay-4">
            <div className="hero__stat">
              <span className="hero__stat-num">200万+</span>
              <span className="hero__stat-label">GMV 累计成交</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">100万+</span>
              <span className="hero__stat-label">单条最高播放</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">10万+</span>
              <span className="hero__stat-label">累计粉丝增长</span>
            </div>
          </div>
        </div>

        <div className="hero__media animate-in delay-2">
          <div className="hero__media-frame">
            <img src="/参考1.png" alt="参考作品视觉" loading="eager" />
          </div>
        </div>
      </div>

      <div className="hero__scroll animate-in delay-5">
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
          opacity: 0.5;
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__gradient {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .hero__gradient--1 {
          width: 600px;
          height: 600px;
          top: -200px;
          right: -100px;
          background: radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%);
        }

        .hero__gradient--2 {
          width: 400px;
          height: 400px;
          bottom: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%);
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

        .hero__layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
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
          z-index: 2;
          padding-top: 6rem;
          min-height: 100vh;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.2rem;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 100px;
          font-size: 0.85rem;
          color: var(--accent-hover);
          margin-bottom: 2rem;
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
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero__title-line {
          display: block;
        }

        .hero__title-accent {
          background: var(--gradient-hero);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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

        .hero__stats {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding: 1.8rem 2.5rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(10px);
          width: fit-content;
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
          color: var(--text-muted);
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

        @media (max-width: 1024px) {
          .hero__layout {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
            gap: 2.5rem;
            min-height: auto;
          }

          .hero__desc { max-width: 640px; }
          .hero__actions { justify-content: center; }
          .hero__stats { margin: 0 auto; }

          .hero__media { order: -1; }
          .hero__media-frame { width: min(320px, 72vw); aspect-ratio: 4 / 3; }
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
"""
p.write_text(content, encoding='utf-8')
print('wrote', p)
