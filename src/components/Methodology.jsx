/**
 * Methodology - AI 创作手记 section
 * 2026-07-04: 新增板块,放在 Projects 和 Accounts 之间
 * 展示 2 篇飞书创作手记(对应 Projects 里 id=2 ZURU / id=6 Bunch)
 * 设计:暖奶卡身 + 暖橙边 + 顶部色带 + 居中大图标,跟 Accounts / Projects 视觉语言统一
 */
const methodologies = [
  {
    id: 'm1',
    title: '「Bunch O Balloons」TVC 创作全流程',
    desc: '把 60 秒商业 TVC 拆成 6 个可复用环节 — 从脚本拆解 / 镜头分镜 / 提示词工程到 AI 视频拼接,每一环都给可直接抄走的 Prompt 模板。',
    tags: ['提示词工程', '多镜头', '商业TVC'],
    relatedProject: 'Bunch O Balloons TVC 广告',
    feishuLink: 'https://my.feishu.cn/wiki/JqSOwcYyYiarJqk2wtycH6bfnRd',
  },
  {
    id: 'm2',
    title: '「ZURU 穿搭爆款」AI 工作流拆解',
    desc: '从"产品调性 × 用户喜好"挖掘开始,到角色一致性处理、多模态换装、爆款节奏复盘,完整工作流 + 9 段可直接复用提示词。',
    tags: ['一致性', '多模态换装', '节奏复盘'],
    relatedProject: 'ZURU Fuggler 爆款内容复刻',
    feishuLink: 'https://my.feishu.cn/wiki/Oiftw7pg6iokybkp5Ixcir4SnBh',
  },
  {
    id: 'm3',
    title: '「ZURU 潮玩创意广告」AI 全流程',
    desc: '从产品卖点提炼到概念脚本、镜头分镜、提示词工程到成片交付，全链路 AI 化提效。覆盖潮玩/品牌/品类调性，产出一条商业广告片只需传统方式几分之一时间。',
    tags: ['品牌广告', '多模态', '潮玩创意'],
    relatedProject: 'ZURU潮玩创意广告',
    feishuLink: 'https://my.feishu.cn/docx/PPGddKsTVoNXuRxY0D1cDEn9nmb?from=from_copylink',
  },
]

export default function Methodology() {
  return (
    <section className="methodology section" id="methodology">
      <div className="container">
        <div className="section-label">Methodology · AI Workflow Notes</div>
        <h2 className="section-title">AI 创作手记</h2>
        <p className="section-desc" style={{ marginBottom: '3rem' }}>
          把成品背后的工作流拆给你看 — Prompt / 分镜 / 节奏,全过程公开。
        </p>

        <div className="methodology__grid">
          {methodologies.map((m) => (
            <a
              key={m.id}
              href={m.feishuLink}
              target="_blank"
              rel="noopener noreferrer"
              className="methodology__card"
            >
              <div className="methodology__card-body">
                <h3 className="methodology__card-title">{m.title}</h3>
                <p className="methodology__card-related">
                  对应作品 · <strong>{m.relatedProject}</strong>
                </p>
                <p className="methodology__card-desc">{m.desc}</p>

                <div className="methodology__card-tags">
                  {m.tags.map((t) => (
                    <span key={t} className="methodology__tag">{t}</span>
                  ))}
                </div>

                <div className="methodology__card-cta" aria-hidden="true">
                  打开飞书文档 <span className="methodology__card-arrow">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        /* ===== 网格布局 =====
           2026-07-04:整网格 max-width 收到 760px,每张卡 ~320px(≈1:1 正方形)居中
           之前是 repeat(2, 1fr) 在 1440 视口下撑满,卡看起来太宽太长
           2026-07-13:加 m3 卡,grid 改 3 列, max-width 提到 1100px 跟 Projects 板块视觉协调 */
        .methodology__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
          max-width: 1100px;
          margin: 0 auto 2rem;
        }

        /* ===== 卡片 ===== */
        .methodology__card {
          /* 主体用主题暖奶底 + 主题暖橙边框,跟 Accounts mobile 卡 / Projects 卡设计语言一致 */
          background: var(--bg-primary);
          border: 1.5px solid var(--brand-primary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: all 0.4s var(--ease-out);
          position: relative;
          min-height: 300px;
        }

        .methodology__card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(217, 114, 64, 0.25);
          border-color: var(--brand-primary-hover);
        }

        /* ===== 卡身(文字区) ===== */
        .methodology__card-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0.85rem;
        }

        .methodology__card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary, #1A1A2E);
          margin: 0;
          line-height: 1.35;
        }

        .methodology__card-related {
          font-size: 0.82rem;
          color: var(--text-muted, #555);
          margin: 0;
          font-weight: 500;
        }
        .methodology__card-related strong {
          color: var(--brand-primary);
          font-weight: 600;
        }

        .methodology__card-desc {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--text-secondary, #333);
          margin: 0;
          flex: 1;
        }

        /* ===== tags ===== */
        .methodology__card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.2rem;
        }

        .methodology__tag {
          font-size: 0.72rem;
          padding: 0.3rem 0.7rem;
          border-radius: 100px;
          background: rgba(217, 114, 64, 0.12);
          color: var(--brand-primary);
          border: 1px solid rgba(217, 114, 64, 0.3);
          font-weight: 500;
        }

        /* ===== CTA 按钮 ===== */
        .methodology__card-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.95rem 1.4rem;
          background: var(--brand-primary);
          color: #fefcf6;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 12px;
          margin-top: 0.5rem;
          transition: all 0.3s var(--ease-out);
          pointer-events: none; /* 整个卡已绑 click,按钮不二次拦截 */
        }

        .methodology__card-arrow {
          transition: transform 0.3s var(--ease-out);
          display: inline-block;
        }

        .methodology__card:hover .methodology__card-cta {
          background: var(--brand-primary-hover);
        }
        .methodology__card:hover .methodology__card-arrow {
          transform: translateX(4px);
        }

        /* ===== 平板 ===== */
        @media (max-width: 1024px) {
          .methodology__grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .methodology__card {
            min-height: 400px;
          }
        }

        /* ===== mobile:1 列堆叠 ===== */
        @media (max-width: 768px) {
          .methodology__grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .methodology__card {
            min-height: 0;
          }
          .methodology__card-body {
            padding: 1.5rem;
          }
          .methodology__card-title {
            font-size: 1.15rem;
          }
          .methodology__card-desc {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}
