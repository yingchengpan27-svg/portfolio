// 2026-07-04 回退:还原到今天 session 开始的状态
// - 暖奶白 BG (var(--bg-primary))
// - 3 个暖橙 corner gradients (右上暖橙 + 左下金黄 + 左中暖橙)
// - 抠图潘英成 portrait 居中偏右
// - 标题 wipe 动效 + 4 行 desc + 2 个 btn-uv 按钮
// - 移除 stats 玻璃卡片
// - 移除 Skills section(App.jsx 已经在更早时删过)
// - 不用 video / 不用 canvas / 不用 3D raymarch

export default function Hero() {
  const heroData = {
    badge: '新媒体全栈操盘手 · AI 视觉创作者',
    title1: '用内容创造',
    title2: '无限可能',
    // 2026-06-19: 文案拆成 4 行(每段两行),mobile 居中时左右更对称
    desc: '5年短视频全链路运营经验\n精通多平台 IP 打造与 AI 视觉创作。\n从内容策划到商业变现\n用数据驱动增长。',
    buttons: [
      { label: '查看作品', href: '#projects' },
      { label: '了解更多', href: '#about' },
    ],
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        {/* 2026-07-03 招:Hero 加入人物艺术照(中间偏右)
            用户上传 D:\workfile\简历\照片\艺术照.jpeg,
            scripts/remove-bg.mjs 用 @imgly/background-removal-node AI 抠图
            把米黄背景去掉,输出 public/hero-portrait.png(透明背景) */}
        <img
          className="hero__portrait"
          src="/hero-portrait.png"
          alt=""
          aria-hidden="true"
        />
        <div className="hero__gradient hero__gradient--1" />
        <div className="hero__gradient hero__gradient--2" />
        <div className="hero__gradient hero__gradient--3" />
        <div className="hero__grid" />
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
          /* 2026-07-04 回退:暖奶白 BG + 暖橙 corner gradients */
          background: var(--bg-primary);
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        /* 2026-07-03 招:人物艺术照融入 Hero 背景(无缝融合 v3 — AI 抠图版)
           关键: scripts/remove-bg.mjs 用 AI 把图片背景去掉,
           PNG 本身就是 alpha 透明,不需要 mask-image / mix-blend-mode
           自然就和暖底 #fefcf6 融合,无矩形边缘 */
        .hero__portrait {
          position: absolute;
          top: 50%;
          right: 18%;
          transform: translateY(-50%);
          height: 88vh;
          max-height: 760px;
          width: auto;
          max-width: 56vw;
          object-fit: contain;
          opacity: 0.92;
          pointer-events: none;
          user-select: none;
        }

        @media (max-width: 1024px) {
          .hero__portrait {
            height: 70vh;
            max-height: 560px;
            opacity: 0.78;
            right: 6%;
          }
        }

        @media (max-width: 768px) {
          .hero__portrait {
            display: none;
          }
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
          background: radial-gradient(circle, rgba(217, 114, 64, 0.32), transparent 70%);
        }

        .hero__gradient--2 {
          width: 480px;
          height: 480px;
          bottom: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(244, 215, 88, 0.30), transparent 70%);
        }

        /* 2026-07-02: 新增第 3 个光斑,左中位置,平衡构图 */
        .hero__gradient--3 {
          width: 380px;
          height: 380px;
          top: 40%;
          left: 30%;
          background: radial-gradient(circle, rgba(217, 114, 64, 0.16), transparent 70%);
        }

        .hero__grid {
          position: absolute;
          inset: 0;
          /* 2026-07-04:网格透明度 0.04 → 0.10,提升辨识度 */
          background-image:
            linear-gradient(rgba(217, 114, 64, 0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217, 114, 64, 0.10) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent);
          -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent);
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
          background: rgba(217, 114, 64, 0.10);
          border: 1px solid rgba(217, 114, 64, 0.25);
          border-radius: 100px;
          font-size: 0.85rem;
          color: var(--brand-primary-hover);
          font-weight: 500;
          margin-bottom: 1.4rem;
          /* 2026-07-02: 入场动画从 GSAP 移到 CSS */
          animation: hero-badge-enter 1.0s var(--ease-out) 0.9s both;
        }

        @keyframes hero-badge-enter {
          from {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          to {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
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
          50%      { opacity: 0.4; }
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
          /* 2026-07-02: 入场动画从 GSAP 移到 CSS,避免 StrictMode 卡 from */
          animation: hero-title-enter 1.6s var(--ease-out) 0.4s both;
        }

        /* 2026-07-04 回退:暖奶白底上墨色 */
        .hero__title-base {
          color: var(--text-primary);
        }

        /* Fill overlay — 暖橙 wipe */
        .hero__title-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          color: var(--brand-primary);
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid var(--brand-primary);
          transition: width 0.65s cubic-bezier(0.65, 0, 0.35, 1);
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        /* Hover 触发 wipe — 暖橙 wipe 完成后整体发光(暖白外光晕,跟暖主题一致) */
        .hero__title-line:hover .hero__title-fill {
          width: 100%;
          filter: drop-shadow(0 0 20px rgba(254, 252, 246, 0.85))
                  drop-shadow(0 0 6px rgba(254, 252, 246, 0.55));
        }

        .hero__title-accent {
          color: var(--brand-primary);
        }

        /* 2026-07-02: 副标题从渐变文字改成实色暖橙(渐变在暖底上被吃光) */
        .hero__subtitle {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          margin-top: 0;
          font-size: clamp(1.05rem, 1.6vw, 1.35rem);
          font-weight: 600;
          letter-spacing: 0.12em;
          line-height: 1;
          color: var(--brand-primary);
          opacity: 0.92;
          text-transform: none;
          /* 2026-07-02: 入场动画从 GSAP 移到 CSS */
          animation: hero-subtitle-enter 0.8s var(--ease-out) 1.2s both;
        }

        @keyframes hero-subtitle-enter {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 0.92; transform: translateX(0); }
        }

        .hero__subtitle-bar {
          display: inline-block;
          width: 36px;
          height: 2px;
          border-radius: 2px;
          background: var(--brand-primary);
          flex-shrink: 0;
          box-shadow: 0 0 12px rgba(244, 215, 88, 0.6);
          animation: hero-bar-enter 0.8s var(--ease-out) 1.1s both;
        }

        @keyframes hero-bar-enter {
          from { width: 0; }
          to   { width: 36px; }
        }

        .hero__desc {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2.5rem;
          max-width: 560px;
        }

        /* 2026-07-02: 描述每行单独 stagger 入场,用 nth-child 模拟 stagger */
        .hero__desc > span {
          display: inline-block;
          animation: hero-desc-line-enter 1.0s var(--ease-out) both;
        }
        .hero__desc > span:nth-child(1) { animation-delay: 1.30s; }
        .hero__desc > span:nth-child(2) { animation-delay: 1.42s; }
        .hero__desc > span:nth-child(3) { animation-delay: 1.54s; }
        .hero__desc > span:nth-child(4) { animation-delay: 1.66s; }

        @keyframes hero-desc-line-enter {
          from {
            clip-path: inset(100% 0 0 0);
            transform: translateY(25px);
            opacity: 0;
          }
          to {
            clip-path: inset(0 0 0 0);
            transform: translateY(0);
            opacity: 1;
          }
        }

        .hero__actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        /* Hero CTA 按钮 — 2026-07-03 改成白底 + 主题色字
   原 Uiverse 渐变描边 + 深底白字,改成更克制的"白底暖橙字"风格
   跟 Hero 整体"温暖但克制"气质更搭,跟暖底背景呼应 */
        .btn-uv {
          align-items: center;
          background: transparent;
          border: 1.5px solid var(--brand-primary);
          border-radius: 8px;
          box-shadow: 0 6px 18px -4px rgba(217, 114, 64, 0.28);
          box-sizing: border-box;
          color: var(--brand-primary);
          display: inline-flex;
          font-size: 18px;
          justify-content: center;
          line-height: 1em;
          max-width: 100%;
          min-width: 140px;
          padding: 0;
          text-decoration: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s var(--ease-out);
          font-family: inherit;
          font-weight: 600;
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

        /* 内层 span:白底 + 主题色字 */
        .btn-uv span {
          background-color: #fefcf6;
          color: var(--brand-primary);
          padding: 14px 24px;
          border-radius: 6.5px;
          width: 100%;
          height: 100%;
          transition: background-color 0.25s var(--ease-out), color 0.25s var(--ease-out);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .btn-uv:hover {
          border-color: var(--brand-primary-hover);
          box-shadow: 0 10px 24px -4px rgba(217, 114, 64, 0.40);
          transform: translateY(-1px);
        }
        .btn-uv:hover span {
          background-color: var(--brand-primary);
          color: #fefcf6;
        }

        .btn-uv:active {
          transform: scale(0.97);
        }

        /* 2026-07-04 回退:stats 毛玻璃块整体删掉,JSX 也没有 */
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
          /* 2026-07-02: 入场动画从 GSAP 移到 CSS */
          animation: hero-scroll-enter 1s var(--ease-out) 2.4s both;
        }

        @keyframes hero-scroll-enter {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }

        .hero__scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--brand-primary), transparent);
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
            /* 2026-06-19 FIX: align-items:center 让 inline-flex 子元素(badge/subtitle)
               自身居中(默认 stretch 对 inline-flex 不生效,导致 badge 贴左 52px) */
            align-items: center;
          }

          .hero__desc { max-width: 640px; }
          .hero__actions { justify-content: center; flex-wrap: wrap; }
          /* 2026-06-19 FIX: subtitle 宽度被拉伸到全宽 327px,内部 justify-content:normal
             (=flex-start) 让文字贴左;改为 center 让"用内容创造无限可能"居中 */
.hero__subtitle { justify-content: center; }
        }

        @media (max-width: 1024px) {
          .hero__content { min-height: auto; }
        }

        @media (max-width: 768px) {
          .hero__content { padding-top: 8rem; }
          .hero__scroll { display: none; }

          /* ============================================================
             mobile 响应式补丁 (2026-06-19)
             桌面端:hover 触发的 wipe 动效完全不受影响
             ============================================================ */
          /* FIX 2026-06-19: GSAP 残留 inline transform 兜底
             React 19 StrictMode 下 useLayoutEffect 双调用,
             gsap.context().revert() 可能把动画卡在 from 起点,
             导致 hero__subtitle 等元素 inline style = transform:translate(-20px,0),
             偏移 hero__copy 中轴。CSS !important 强制清除。
             max-width:768px 只在 mobile 触发,桌面端入场动画不受影响。 */
          .hero__subtitle,
          .hero__title-line,
          .hero__badge,
          .hero__scroll,
          .hero__desc > span,
          .nav {
            transform: none !important;
            opacity: 1 !important;
            clip-path: none !important;
          }

          /* 关键修复:mobile 没 hover,完全隐藏 fill 层
             否则 width:0 的盒子仍会渲染 4px 暖橙 border-right,
             "潘英成"右侧会一直挂一根暖橙竖条 */
          .hero__title-fill {
            display: none;
          }

          /* 副标题前的装饰横线在 mobile 去掉,让"用内容创造无限可能"完全居中
             桌面端保留(设计装饰元素) */
          .hero__subtitle-bar {
            display: none;
          }

          /* iOS Safari 100vh 含地址栏 bug → 用 100dvh 兜底
             -webkit-fill-available 是 iOS 老版本 fallback,后者覆盖前者 */
          .hero {
            min-height: -webkit-fill-available;
            min-height: 100dvh;
          }

          /* 标题在 mobile 略缩,避免与下方 stats 挤 */
          .hero__title {
            font-size: clamp(2.4rem, 9vw, 3.5rem);
          }

          /* 按钮组在窄屏允许按钮换行 */
          .hero__actions {
            gap: 0.75rem;
            margin-bottom: 3rem;
          }

          /* 按钮文字稍小,适配 360px 屏 */
          .btn-uv { font-size: 16px; min-width: 130px; }
          .btn-uv span { padding: 14px 18px; font-size: 0.88rem; }

          /* 2026-06-22 招 4 实施:
             backdrop-filter blur 在 mobile 是 GPU 杀手,关掉
             半透明底色仍然保留,视觉差异很小,GPU 压力减半 */
        }
      `}</style>
    </section>
  )
}
