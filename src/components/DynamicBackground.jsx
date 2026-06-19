export default function DynamicBackground() {
  return (
    <div className="dynamic-bg" aria-hidden="true">
      <div className="dynamic-bg__base" />

      {/* 径向光斑(蓝/橙) — 飘移 + 旋转 */}
      <div className="stream stream--blue-1" />
      <div className="stream stream--blue-2" />
      <div className="stream stream--blue-3" />
      <div className="stream stream--orange-1" />
      <div className="stream stream--orange-2" />
      <div className="stream stream--orange-3" />

      {/* SVG 弯曲光带(丝绸/水波) — 平移 + 旋转 + 缩放 */}
      <svg className="ribbon ribbon--1" viewBox="0 0 2000 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ribbonGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(59,130,246,0)" />
            <stop offset="0.3" stopColor="rgba(59,130,246,0.55)" />
            <stop offset="0.5" stopColor="rgba(147,197,253,0.85)" />
            <stop offset="0.7" stopColor="rgba(59,130,246,0.55)" />
            <stop offset="1" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
        </defs>
        <path
          d="M -100 320 C 300 180, 600 460, 1000 300 S 1700 140, 2100 320"
          stroke="url(#ribbonGrad1)"
          strokeWidth="180"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <svg className="ribbon ribbon--2" viewBox="0 0 2000 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ribbonGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(249,115,22,0)" />
            <stop offset="0.3" stopColor="rgba(249,115,22,0.6)" />
            <stop offset="0.5" stopColor="rgba(251,191,36,0.9)" />
            <stop offset="0.7" stopColor="rgba(249,115,22,0.6)" />
            <stop offset="1" stopColor="rgba(249,115,22,0)" />
          </linearGradient>
        </defs>
        <path
          d="M -100 280 C 400 460, 800 100, 1200 280 S 1800 460, 2100 280"
          stroke="url(#ribbonGrad2)"
          strokeWidth="200"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <svg className="ribbon ribbon--3" viewBox="0 0 2000 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ribbonGrad3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(96,165,250,0)" />
            <stop offset="0.3" stopColor="rgba(96,165,250,0.5)" />
            <stop offset="0.5" stopColor="rgba(59,130,246,0.8)" />
            <stop offset="0.7" stopColor="rgba(96,165,250,0.5)" />
            <stop offset="1" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
        </defs>
        <path
          d="M -100 360 C 350 240, 700 480, 1100 360 S 1750 240, 2100 360"
          stroke="url(#ribbonGrad3)"
          strokeWidth="160"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <svg className="ribbon ribbon--4" viewBox="0 0 2000 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ribbonGrad4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(251,146,60,0)" />
            <stop offset="0.3" stopColor="rgba(251,146,60,0.5)" />
            <stop offset="0.5" stopColor="rgba(249,115,22,0.85)" />
            <stop offset="0.7" stopColor="rgba(251,146,60,0.5)" />
            <stop offset="1" stopColor="rgba(251,146,60,0)" />
          </linearGradient>
        </defs>
        <path
          d="M -100 200 C 400 380, 800 60, 1200 220 S 1800 380, 2100 200"
          stroke="url(#ribbonGrad4)"
          strokeWidth="150"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <style>{`
        .dynamic-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          background: #03060f;
          /* 2026-06-19: contain: paint 隔离渲染,减少对外部 layout 重排的影响 */
          contain: paint;
        }

        /* 2026-06-19: mobile 端彻底关闭 ribbon 和重模糊动画
           mobile 上 filter: blur(70px)+mix-blend-mode: screen 直接掉帧 */
        @media (max-width: 768px) {
          .ribbon { display: none; }
          /* mobile 关闭一半 stream + 减小 blur,保留背景氛围但大幅降低 GPU */
          .stream--blue-2,
          .stream--orange-2,
          .stream--orange-3 { display: none; }
          .stream { filter: blur(40px); will-change: auto; }
        }

        /* prefers-reduced-motion 用户:全部动画停止 (2026-06-19) */
        @media (prefers-reduced-motion: reduce) {
          .stream, .ribbon { animation: none !important; }
        }

        .dynamic-bg__base {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.10), transparent 55%),
            radial-gradient(ellipse at 70% 75%, rgba(249, 115, 22, 0.08), transparent 55%);
        }

        .stream {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          mix-blend-mode: screen;
          will-change: transform;
        }

        .stream--blue-1 {
          width: 580px; height: 580px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.55), transparent 65%);
          top: 5%; left: -8%;
          animation: drift-a 18s ease-in-out infinite;
        }
        .stream--blue-2 {
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(96, 165, 250, 0.45), transparent 65%);
          top: 48%; left: 55%;
          animation: drift-b 22s ease-in-out infinite;
        }
        .stream--blue-3 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.38), transparent 65%);
          top: -8%; left: 50%;
          animation: drift-c 26s ease-in-out infinite;
        }
        .stream--orange-1 {
          width: 620px; height: 620px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.5), transparent 65%);
          top: 30%; left: 18%;
          animation: drift-d 16s ease-in-out infinite;
        }
        .stream--orange-2 {
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.45), transparent 65%);
          top: 60%; left: 68%;
          animation: drift-e 20s ease-in-out infinite;
        }
        .stream--orange-3 {
          width: 460px; height: 460px;
          background: radial-gradient(circle, rgba(234, 88, 12, 0.4), transparent 65%);
          top: 78%; left: 30%;
          animation: drift-f 24s ease-in-out infinite;
        }

        .ribbon {
          position: absolute;
          width: 200%;
          height: 80%;
          left: -50%;
          filter: blur(45px);
          mix-blend-mode: screen;
          opacity: 0.85;
          will-change: transform;
          pointer-events: none;
        }

        .ribbon--1 {
          top: 5%;
          animation: ribbon-a 14s ease-in-out infinite;
        }
        .ribbon--2 {
          top: 25%;
          animation: ribbon-b 18s ease-in-out infinite;
        }
        .ribbon--3 {
          top: 50%;
          animation: ribbon-c 16s ease-in-out infinite;
        }
        .ribbon--4 {
          top: 70%;
          animation: ribbon-d 20s ease-in-out infinite;
        }

        @keyframes drift-a {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(180px, 90px) scale(1.18) rotate(45deg); }
          66% { transform: translate(-90px, 170px) scale(0.88) rotate(90deg); }
        }
        @keyframes drift-b {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-220px, -110px) scale(1.22) rotate(-60deg); }
          66% { transform: translate(120px, -160px) scale(0.85) rotate(-120deg); }
        }
        @keyframes drift-c {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(140px, 220px) scale(0.9) rotate(30deg); }
          66% { transform: translate(-200px, 90px) scale(1.1) rotate(60deg); }
        }
        @keyframes drift-d {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-160px, 110px) scale(1.1) rotate(-45deg); }
          66% { transform: translate(140px, -90px) scale(0.95) rotate(-90deg); }
        }
        @keyframes drift-e {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(220px, -130px) scale(1.2) rotate(60deg); }
          66% { transform: translate(-110px, 160px) scale(0.9) rotate(120deg); }
        }
        @keyframes drift-f {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-130px, -90px) scale(0.95) rotate(-30deg); }
          66% { transform: translate(200px, 110px) scale(1.18) rotate(-60deg); }
        }

        @keyframes ribbon-a {
          0%, 100% { transform: translateX(0) translateY(0) rotate(-8deg) scaleY(1); }
          50% { transform: translateX(12%) translateY(-3%) rotate(-3deg) scaleY(1.15); }
        }
        @keyframes ribbon-b {
          0%, 100% { transform: translateX(0) translateY(0) rotate(6deg) scaleY(1); }
          50% { transform: translateX(-14%) translateY(4%) rotate(2deg) scaleY(0.9); }
        }
        @keyframes ribbon-c {
          0%, 100% { transform: translateX(0) translateY(0) rotate(-3deg) scaleY(1); }
          50% { transform: translateX(8%) translateY(3%) rotate(0deg) scaleY(1.1); }
        }
        @keyframes ribbon-d {
          0%, 100% { transform: translateX(0) translateY(0) rotate(-10deg) scaleY(1); }
          50% { transform: translateX(-10%) translateY(-3%) rotate(-6deg) scaleY(1.12); }
        }
      `}</style>
    </div>
  )
}
