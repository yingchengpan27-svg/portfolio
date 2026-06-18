const projects = [
  {
    id: 1,
    title: 'Apple-style 产品宣传片',
    category: 'AI 视觉创作',
    desc: '运用前沿多模态AI工作流，独立交付Apple极简高科技感产品宣传片，解决AI视频画面一致性与物理阴影过渡等技术痛点。',
    tags: ['AI视频', '多模态', '产品宣传'],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    icon: '🎬',
    video: '/mic-apple-ad.mp4',
    link: 'https://www.xinpianchang.com/a13721954?from=webShare&channel=copyLink',
    col: 'span 2',
    row: '1',
  },
  {
    id: 2,
    title: '「你的名字」超写实动漫转真人预告片',
    category: 'AI 视觉创作',
    desc: '深入精通提示词工程，实现动漫角色到超写实真人的视觉转换，精准控制皮肤写实材质与光影效果。',
    tags: ['AI视频', '写实渲染', '动漫转真人'],
    gradient: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
    icon: '✨',
    video: '/your-name-trailer.mp4',
    link: 'https://www.xinpianchang.com/a13721952?from=webShare&channel=copyLink',
    row: '1',
  },
  {
    id: 5,
    title: '个人游戏短视频账号',
    category: '独立运营',
    desc: '独立操盘游戏垂类账号，跑通全生命周期工作流，从0到1冷启动，累计粉丝2万+，沉淀成熟起号方法论。',
    tags: ['游戏', '冷启动', '全链路'],
    gradient: 'linear-gradient(135deg, #0a0a0f 0%, #1b4332 50%, #2d6a4f 100%)',
    icon: '🎮',
    video: '/game-account.mp4',
    link: 'https://www.douyin.com/user/MS4wLjABAAAA_sl0CSZ2h2nW1HUt438aVHJuKynhrYxaBm0yfjcTI9M',
    col: '1',
    row: '3',
  },
  {
    id: 3,
    title: '「正畸赵志河」医生IP运营',
    category: '短视频IP运营',
    desc: '全链路负责医生IP运营，策划多条百万级爆款视频，半年自然涨粉5万+，推动账号累计GMV超200万。',
    tags: ['抖音', 'IP运营', '百万GMV'],
    gradient: 'linear-gradient(135deg, #0c0c1d 0%, #1a0a2e 50%, #2d1b69 100%)',
    icon: '🏥',
    video: '/doctor-ip.mp4',
    link: 'https://www.douyin.com/user/MS4wLjABAAAAPUXtFBXK-KW0Z0hBU6Ck61Zg2LoiVc_1ptMomIRBHs9YevtzJnUxqFiij2MUdi6w',
    col: '2',
    row: '3',
  },
  {
    id: 4,
    title: 'B站头部达人账号运营',
    category: '内容全链路运营',
    desc: '负责「口语老炮儿马思瑞」「夏波波Brian」选题策划与全渠道运营，1年助力两大账号涨粉40万+与60万+。',
    tags: ['B站', '涨粉100万+', '商业变现'],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)',
    icon: '📺',
    video: '/bzhan-english.mp4',
    link: 'https://space.bilibili.com/24801003',
    col: '3',
    row: '3',
  },
  {
    id: 6,
    title: '影石360产品TVC广告',
    category: 'AI 视觉创作',
    desc: '独立主导影石Insta360概念联名TVC的全链路AI创作，运用先进生成式AI工作流，高效产出涵盖多场景实感模拟的电影级商业视觉。',
    tags: ['AI视频', '多模态', '产品宣传'],
    gradient: 'linear-gradient(135deg, #0a0a0f 0%, #6366f1 100%)',
    icon: '💻',
    video: '/insta360-x3.mp4',
    link: 'https://www.xinpianchang.com/a13721953?from=webShare&channel=copyLink',
    col: '3',
    row: '2',
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-label">Selected Works</div>
        <h2 className="section-title">精选项目</h2>
        <p className="section-desc" style={{ marginBottom: '3rem' }}>
          从AI视觉创作到全链路运营，每个项目都是一次突破与沉淀。
        </p>

        <div className="projects__grid">
          {projects.map((p, i) => {
            const CardTag = p.link ? 'a' : 'article'
            const cardProps = p.link
              ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
              <CardTag
                key={p.id}
                className={`projects__card ${i === 0 ? 'projects__card--featured' : 'projects__card--drawer'} ${p.video ? 'projects__card--video' : ''} ${p.link ? 'projects__card--linked' : ''}`}
                style={{ '--card-bg': p.gradient, gridColumn: p.col, gridRow: p.row }}
                {...cardProps}
              >
                <div className="projects__card-visual">
                  {p.video && (
                    <video
                      className="projects__card-video"
                      src={p.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  )}
                  {!p.video && <span className="projects__card-icon">{p.icon}</span>}
                  <span className="projects__card-category">{p.category}</span>
                  {p.link && <span className="projects__card-link-icon" aria-hidden="true">↗</span>}
                </div>

                <div className="projects__card-body">
                  <h3 className="projects__card-title">{p.title}</h3>
                  <p className="projects__card-desc">{p.desc}</p>
                  {i === 0 && (
                    <div className="projects__card-tags">
                      {p.tags.map(t => (
                        <span key={t} className="projects__tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </CardTag>
            )
          })}
        </div>
      </div>

      <style>{`
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 317px;
          gap: 1.5rem;
        }

        .projects__card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.4s var(--ease-out);
          cursor: default;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .projects__card--linked {
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }

        .projects__card:hover {
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .projects__card--featured {
          grid-column: span 2;
          height: 658px;
        }

        .projects__card-visual {
          flex: 1;
          height: 314px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          position: relative;
          overflow: hidden;
          min-height: 0;
        }

        .projects__card--featured .projects__card-visual {
          flex: 1;
          height: 655px;
        }

        .projects__card-visual::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6));
        }

        .projects__card-icon {
          font-size: 3rem;
          position: relative;
          z-index: 1;
        }

        .projects__card--featured .projects__card-icon {
          font-size: 5.5rem;
        }

        .projects__card-category {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-hover);
          background: rgba(99, 102, 241, 0.15);
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          position: relative;
          z-index: 1;
        }

        .projects__card-body {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          background: linear-gradient(to top, rgba(3,6,15,0.92) 0%, rgba(3,6,15,0.7) 60%, transparent 100%);
          transform: translateY(100%);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        .projects__card--featured .projects__card-body {
          padding: 2rem;
          background: linear-gradient(to top, rgba(3,6,15,0.95) 0%, rgba(3,6,15,0.75) 50%, transparent 100%);
        }

        .projects__card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }

        .projects__card--featured .projects__card-title {
          font-size: 1.4rem;
        }

        .projects__card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
          flex: 1;
        }

        .projects__card--drawer {
          overflow: hidden;
        }

        .projects__card:hover .projects__card-body {
          transform: translateY(0);
        }

        .projects__card--video {
          position: relative;
        }

        .projects__card-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .projects__card--video:hover .projects__card-body {
          transform: translateY(0);
        }

        .projects__card--video .projects__card-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 3;
        }

        .projects__card--video .projects__card-visual::before {
          display: none;
        }

        .projects__card-link-icon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 3;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          line-height: 1;
          color: white;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: all 0.3s var(--ease-out);
          pointer-events: none;
        }

        .projects__card--linked:hover .projects__card-link-icon {
          background: rgba(99, 102, 241, 0.9);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.1) rotate(-5deg);
        }

        .projects__card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 1rem;
        }

        .projects__tag {
          padding: 0.3rem 0.7rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .projects__grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .projects__card--featured {
            grid-column: span 2;
            grid-row: span 1;
          }
        }

        @media (max-width: 640px) {
          .projects__grid {
            grid-template-columns: 1fr;
          }
          .projects__card--featured {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  )
}
