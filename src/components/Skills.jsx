const skills = [
  {
    icon: '🎯',
    title: '短视频全链路运营',
    subtitle: 'Short Video Operation',
    desc: '精通抖音、B站、快手、小红书等主流平台，具备从0到1冷启动、内容策划、爆款打造到商业变现的完整闭环能力。',
    tags: ['抖音', 'B站', '快手', '小红书'],
    badge: '01 / 06',
  },
  {
    icon: '📊',
    title: '数据驱动增长',
    subtitle: 'Data-Driven Growth',
    desc: '实时监控播放、完播、互动率等核心指标，基于数据动态迭代内容策略，深度掌握平台算法与流量分发逻辑。',
    tags: ['数据分析', '算法优化', '增长策略'],
    badge: '02 / 06',
  },
  {
    icon: '🤖',
    title: 'AI 多模态创作',
    subtitle: 'AI Multimodal Creation',
    desc: '紧跟前沿AI技术，熟练运用多模态AI工具深度赋能内容生产，精通提示词工程，解决画面一致性等技术痛点。',
    tags: ['AI视频', '提示词工程', '多模态'],
    badge: '03 / 06',
  },
  {
    icon: '💻',
    title: '高效自驱与学习力',
    subtitle: 'Efficient Self-Motivation and Learning Ability',
    desc: '紧跟前沿AI技术，熟练实现多模态AI工具深度赋能内容生产。',
    tags: ['AIGC', 'AI多模态', '无限进步'],
    badge: '04 / 06',
  },
  {
    icon: '💰',
    title: '商业变现能力',
    subtitle: 'Monetization',
    desc: '统筹账号流量转化与商业变现链路，累计GMV超200万，具备百万级商业变现的操盘经验。',
    tags: ['GMV 200万+', '商业闭环', '转化优化'],
    badge: '05 / 06',
  },
  {
    icon: '🚀',
    title: 'IP打造与冷启动',
    subtitle: 'IP & Cold Start',
    desc: '成功操盘多个垂类IP账号，沉淀出一套成熟的起号方法论，擅长定位、人设构建与粉丝增长。',
    tags: ['IP运营', '冷启动', '涨粉'],
    badge: '06 / 06',
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-label">Core Strengths</div>
        <h2 className="section-title">核心优势</h2>
        <p className="section-desc skills__lead" style={{ marginBottom: '3rem' }}>
          从内容创作到商业变现，从传统运营到AI赋能，全方位的能力矩阵。
        </p>

        <div className="skills__grid">
          {skills.map((s, i) => (
            <div key={i} className="skills__card">
              <div className="skills__card-content">
                {/* 正面(初始隐藏,参考 Pasta 卡片样式) */}
                <div className="skills__card-front">
                  <div className="skills__card-front-content">
                    {/* 背景多色光晕 */}
                    <div className="skills__card-orb skills__card-orb--yellow"></div>
                    <div className="skills__card-orb skills__card-orb--red-dark"></div>
                    <div className="skills__card-orb skills__card-orb--red"></div>

                    {/* 中央大图标 */}
                    <div className="skills__card-icon-wrap">
                      <span className="skills__card-icon">{s.icon}</span>
                    </div>

                    {/* 底部信息 */}
                    <div className="skills__card-front-info">
                      <h3 className="skills__card-title">{s.title}</h3>
                      <p className="skills__card-subtitle">{s.subtitle}</p>
                      <p className="skills__card-desc">{s.desc}</p>
                      <div className="skills__card-tags">
                        {s.tags.map(t => (
                          <span key={t} className="skills__tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 背面(初始可见,带旋转光晕) */}
                <div className="skills__card-back">
                  <div className="skills__card-back-content">
                    <div className="skills__card-circle"></div>
                    <div className="skills__card-circle skills__card-circle--bottom"></div>
                    <div className="skills__card-circle skills__card-circle--right"></div>
                    <div className="skills__card-back-info">
                      <div className="skills__card-back-num">{s.badge.split(' / ')[0]}</div>
                      <h3 className="skills__card-back-title">{s.title}</h3>
                      <p className="skills__card-back-subtitle">{s.subtitle}</p>
                      <div className="skills__card-back-tags">
                        {s.tags.map(t => (
                          <span key={t} className="skills__tag skills__tag--back">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills .section-label {
          color: #ff9966;
          border-color: rgba(255, 153, 102, 0.3);
          background: rgba(255, 153, 102, 0.08);
          width: fit-content;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 153, 102, 0.3);
        }

        /* 去掉 ::before 装饰横线(跟 Skills 区橙色主题有冲突) */
        .skills .section-label::before {
          display: none;
        }

        .skills .section-title {
          color: white;
        }

        .skills__lead {
          color: #ff9966;
          font-weight: 500;
        }

        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* 卡片外层 - Uiverse 风格 */
        .skills__card {
          overflow: visible;
          width: 100%;
          height: 360px;
          perspective: 1000px;
          cursor: pointer;
        }

        .skills__card-content {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 16px;
        }

        .skills__card:hover .skills__card-content {
          transform: rotateY(180deg);
        }

        /* 正面 + 背面 共享 */
        .skills__card-front,
        .skills__card-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(22px) saturate(150%);
          -webkit-backdrop-filter: blur(22px) saturate(150%);
          border: 1px solid rgba(255, 153, 102, 0.25);
        }

        /* 正面(初始隐藏,翻转后显示) */
        .skills__card-front {
          transform: rotateY(180deg);
          color: white;
        }

        /* 背面(初始可见) */
        .skills__card-back {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* 背面 ::before 旋转光带(透明度调低,不刺眼) */
        .skills__card-back::before {
          position: absolute;
          content: ' ';
          display: block;
          width: 300px;
          height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255, 153, 102, 0.45), rgba(255, 153, 102, 0.45), rgba(255, 153, 102, 0.45), rgba(255, 153, 102, 0.45), transparent);
          opacity: 0.55;
          animation: skills__rotation 5000ms infinite linear;
        }

        @keyframes skills__rotation {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }

        /* 正面内容 - 参考 Pasta 卡片样式 */
        .skills__card-front-content {
          position: absolute;
          inset: 0;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          background: #0a0a0f;
          overflow: hidden;
        }

        /* 多色背景光晕 */
        .skills__card-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.7;
          pointer-events: none;
        }

        .skills__card-orb--yellow {
          width: 180px;
          height: 180px;
          background: #fbbf24;
          top: -40px;
          left: -40px;
          opacity: 0.55;
          animation: skills__orb-drift-1 14s ease-in-out infinite;
        }

        .skills__card-orb--red-dark {
          width: 200px;
          height: 200px;
          background: #991b1b;
          top: -50px;
          right: -60px;
          opacity: 0.6;
          animation: skills__orb-drift-2 18s ease-in-out infinite;
        }

        .skills__card-orb--red {
          width: 220px;
          height: 220px;
          background: #ef4444;
          bottom: -80px;
          left: -30px;
          opacity: 0.5;
          animation: skills__orb-drift-3 22s ease-in-out infinite;
        }

        /* 三个光圈各自不同轨迹、不同周期,看起来"随意" */
        @keyframes skills__orb-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25%      { transform: translate(80px, 50px) scale(1.1); }
          50%      { transform: translate(40px, 110px) scale(0.95); }
          75%      { transform: translate(-30px, 60px) scale(1.05); }
        }

        @keyframes skills__orb-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25%      { transform: translate(-60px, -40px) scale(1.12); }
          50%      { transform: translate(-100px, 20px) scale(0.9); }
          75%      { transform: translate(-30px, 70px) scale(1.08); }
        }

        @keyframes skills__orb-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25%      { transform: translate(80px, -50px) scale(1.06); }
          50%      { transform: translate(30px, -100px) scale(0.92); }
          75%      { transform: translate(-60px, -40px) scale(1.1); }
        }

        .skills__card-badge {
          position: relative;
          z-index: 2;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 0.4rem 0.9rem;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          width: fit-content;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skills__card-icon-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .skills__card-icon {
          font-size: 3.5rem;
          filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));
        }

        .skills__card-front-info {
          position: relative;
          z-index: 2;
        }

        .skills__card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: white;
          line-height: 1.3;
        }

        .skills__card-subtitle {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.03em;
          margin-bottom: 0.6rem;
        }

        .skills__card-desc {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.55;
          margin-bottom: 0.7rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .skills__card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }

        .skills__tag {
          padding: 0.2rem 0.55rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 100px;
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.75);
        }

        .skills__tag--back {
          padding: 0.3rem 0.75rem;
          background: rgba(255, 153, 102, 0.2);
          border-color: rgba(255, 153, 102, 0.4);
          color: #ffcc99;
          font-size: 0.85rem;
        }

        /* 右下小图标(类似参考图右下角青色图标) */
        .skills__card-front-accent {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 2;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #14b8a6;
          border-radius: 6px;
          color: white;
          font-size: 1rem;
          line-height: 1;
          box-shadow: 0 4px 12px rgba(20, 184, 166, 0.4);
        }

        /* 背面内容 - 故意内缩 1%,形成 Uiverse 风格的"内嵌玻璃框" */
        .skills__card-back-content {
          position: absolute;
          inset: 1%;
          width: 98%;
          height: 98%;
          background: rgba(20, 20, 30, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
          text-align: center;
        }

        .skills__card-circle {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background-color: #ffbb66;
          position: absolute;
          filter: blur(20px);
          opacity: 0.5;
          animation: skills__floating 2600ms infinite linear;
        }

        .skills__card-circle--bottom {
          background-color: #ff8866;
          left: 100px;
          top: 0;
          width: 250px;
          height: 250px;
          opacity: 0.5;
          animation-delay: -800ms;
        }

        .skills__card-circle--right {
          background-color: #ff2233;
          right: 40px;
          top: -100px;
          width: 50px;
          height: 50px;
          opacity: 0.5;
          animation-delay: -1800ms;
        }

        @keyframes skills__floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
          100% { transform: translateY(0px); }
        }

        .skills__card-back-info {
          position: relative;
          z-index: 2;
        }

        .skills__card-back-num {
          font-family: var(--font-mono);
          font-size: 4.2rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1;
          margin-bottom: 1rem;
          text-shadow:
            0 0 20px rgba(255, 153, 102, 0.6),
            0 2px 8px rgba(0, 0, 0, 0.4);
          letter-spacing: -0.02em;
        }

        .skills__card-back-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }

        .skills__card-back-subtitle {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }

        .skills__card-back-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .skills__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills__grid {
            grid-template-columns: 1fr;
          }
          .skills__card {
            height: auto;
            min-height: 360px;
          }
          /* 关键:mobile 禁用 3D 翻转(mobile 没有 hover,且 3D + 5 个动画掉帧严重)
             改成直接展示正面内容,触摸点击不翻转 */
          .skills__card-content {
            transform: none !important;
          }
          /* 背面在 mobile 不显示,只显示正面 */
          .skills__card-back {
            display: none;
          }
          /* 正面取消 rotateY(180deg) 初始隐藏,直接显示 */
          .skills__card-front {
            transform: none;
            position: relative;
            inset: auto;
          }
          /* 减少动效复杂度:关闭 3 个 orb 模糊,避免 mobile 渲染压力 */
          .skills__card-orb {
            filter: blur(40px);
          }
        }
      `}</style>
    </section>
  )
}
