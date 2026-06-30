const accounts = [
  {
    platform: 'douyin',
    platformLabel: '抖音',
    name: '正畸赵志河',
    tagline: '医生IP · 半年从0到1',
    avatar: '/avatars/zhao-zhihe.png',
    stats: [
      { num: '6万+', label: '半年涨粉' },
      { num: '千万+', label: '爆款播放' },
    ],
    link: 'https://v.douyin.com/T6GVExGyq1U/',
    gradient: 'linear-gradient(135deg, #fe2c55 0%, #25f4ee 100%)',
    accentColor: '#fe2c55',
  },
  {
    platform: 'douyin',
    platformLabel: '抖音',
    name: '阿祖（三角洲）',
    tagline: '游戏IP · 跑通垂类起号',
    avatar: '/avatars/azu.png',
    stats: [
      { num: '1700万+', label: '单条爆款播放' },
    ],
    link: 'https://v.douyin.com/29sDkIcXrTg/',
    gradient: 'linear-gradient(135deg, #0a0a0f 0%, #fe2c55 100%)',
    accentColor: '#fe2c55',
  },
  {
    platform: 'douyin',
    platformLabel: '抖音',
    name: '口语老炮儿马思瑞',
    tagline: '百万知识博主',
    avatar: '/avatars/masirui.png',
    stats: [
      { num: '100万+', label: '抖音粉丝' },
    ],
    link: 'https://v.douyin.com/l68An8l7yKA/',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
    accentColor: '#fe2c55',
  },
  {
    platform: 'douyin',
    platformLabel: '抖音',
    name: '夏波波Brian',
    tagline: '400万娱乐博主',
    avatar: '/avatars/xiabobo.png',
    stats: [
      { num: '400万+', label: '抖音粉丝' },
    ],
    link: 'https://v.douyin.com/YVvdLNljOp4/',
    gradient: 'linear-gradient(135deg, #16213e 0%, #fe2c55 100%)',
    accentColor: '#fe2c55',
  },
  {
    platform: 'bilibili',
    platformLabel: 'B站',
    name: '口语老炮儿马思瑞',
    tagline: '百万知识博主',
    avatar: '/avatars/masirui.png',
    stats: [
      { num: '100万+', label: 'B站粉丝' },
    ],
    link: 'https://space.bilibili.com/24801003?spm_id_from=333.1387.follow.user_card.click',
    gradient: 'linear-gradient(135deg, #fb7299 0%, #1a1a2e 100%)',
    accentColor: '#fb7299',
  },
  {
    platform: 'bilibili',
    platformLabel: 'B站',
    name: '夏波波Brian',
    tagline: '百万美食博主',
    avatar: '/avatars/xiabobo.png',
    stats: [
      { num: '100万+', label: 'B站粉丝' },
    ],
    link: 'https://space.bilibili.com/85835398?spm_id_from=333.1387.follow.user_card.click',
    gradient: 'linear-gradient(135deg, #fb7299 0%, #2d1b69 100%)',
    accentColor: '#fb7299',
  },
]

const PlatformIcon = ({ platform }) => {
  if (platform === 'douyin') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.43 1.18-2.6 2.6-2.6.27 0 .53.05.78.13V9.74a5.74 5.74 0 00-.78-.05A5.6 5.6 0 005.3 15.3c0 3.08 2.52 5.6 5.6 5.6 3.1 0 5.6-2.52 5.6-5.6V9.01a7.36 7.36 0 004.3 1.38V7.3s-1.88.09-3.2-1.48z"/>
      </svg>
    )
  }
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 01-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 01.16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906l-1.173 1.12zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374a1.348 1.348 0 01-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374a1.348 1.348 0 01-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386z"/>
    </svg>
  )
}

export default function Accounts() {
  return (
    <section className="accounts section" id="accounts">
      <div className="container">
        <div className="section-label">Accounts Portfolio</div>
        <h2 className="section-title">操盘账号矩阵</h2>
        <p className="section-desc" style={{ marginBottom: '3rem' }}>
          从医生IP到游戏垂类，从百万知识博主到跨平台美食IP——跑通多个账号从0到1的完整链路。
        </p>

        <div className="accounts__grid">
          {accounts.map((a, i) => (
            <a
              key={i}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="account-card"
              style={{
                '--card-bg': a.gradient,
                '--accent': a.accentColor,
              }}
            >
              {/* 大头像(默认占满) */}
              <div className="account-card__pic">
                <img src={a.avatar} alt={a.name} />
              </div>

              {/* 底部信息块 */}
              <div className="account-card__bottom">
                <div className="account-card__content">
                  <span className="account-card__name">{a.name}</span>
                  <span className="account-card__about">{a.tagline}</span>

                  <div className="account-card__stats">
                    {a.stats.map((st, j) => (
                      <div key={j} className="account-card__stat">
                        <span className="account-card__stat-num">{st.num}</span>
                        <span className="account-card__stat-label">{st.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="account-card__bottom-bottom">
                  <div className="account-card__platform">
                    <PlatformIcon platform={a.platform} />
                    <span>{a.platformLabel}</span>
                  </div>
                  <span className="account-card__button">查看主页 →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .accounts {
          padding: 6rem 0;
          position: relative;
        }

        .accounts__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* ===== 主卡片 ===== */
        .account-card {
          width: 100%;
          height: 380px;
          background: var(--card-bg);
          border-radius: 24px;
          padding: 3px;
          position: relative;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 30px -30px;
          transition: all 0.5s ease-in-out;
          display: block;
          text-decoration: none;
          color: white;
          overflow: hidden;
          cursor: pointer;
        }

        /* ===== 大头像(默认占满) ===== */
        .account-card__pic {
          position: absolute;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          top: 3px;
          left: 3px;
          border-radius: 21px;
          z-index: 1;
          border: 0px solid rgba(255, 255, 255, 0.3);
          overflow: hidden;
          transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
        }
        .account-card__pic img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          object-position: center 25%;
          transition: all 0.5s ease-in-out 0s;
        }

        /* ===== 底部信息块(默认露 35% 高度,容纳 name + tagline + 平台徽章 + 按钮) ===== */
        .account-card__bottom {
          position: absolute;
          bottom: 3px;
          left: 3px;
          right: 3px;
          background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 50%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          top: 65%;
          border-radius: 21px;
          z-index: 2;
          box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px 0px inset;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
          /* flex column 让 content 在上、bottom-bottom 始终推到底部 */
          display: flex;
          flex-direction: column;
          padding: 1rem 1.5rem 1.1rem;
        }

        .account-card__content {
          flex: 1;
          min-height: 0;
        }

        .account-card__name {
          display: block;
          font-size: 1.15rem;
          color: white;
          font-weight: 700;
          line-height: 1.3;
        }
        .account-card__about {
          display: block;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.85);
          margin-top: 0.6rem;
          line-height: 1.4;
        }

        /* 数据 hover 时显示 */
        .account-card__stats {
          display: flex;
          gap: 1.5rem;
          margin-top: 0.8rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease-in-out 0.1s;
        }
        .account-card__stat-num {
          display: block;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          line-height: 1.1;
        }
        .account-card__stat-label {
          display: block;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 0.15rem;
        }

        /* 底部固定行:平台徽章 + 跳转按钮(margin-top:auto 推到底部,与 content 不重叠) */
        .account-card__bottom-bottom {
          margin-top: auto;
          padding-top: 0.6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }
        .account-card__platform {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 100px;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          color: white;
        }
        .account-card__button {
          background: white;
          color: var(--accent);
          border: none;
          border-radius: 20px;
          font-size: 0.7rem;
          padding: 0.45rem 0.85rem;
          font-weight: 600;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px 0px;
          transition: all 0.3s ease-in-out;
        }
        /* ===== Hover 效果(仅支持鼠标的设备触发,移动端 tap 不会变形) ===== */
        @media (hover: hover) and (pointer: fine) {
          .account-card:hover .account-card__button {
            background: var(--accent);
            color: white;
          }

          .account-card:hover {
            border-top-left-radius: 55px;
          }
          .account-card:hover .account-card__bottom {
            top: 20%;
            border-radius: 50px 21px 21px 21px;
            transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
          }
          .account-card:hover .account-card__pic {
            width: 90px;
            height: 90px;
            aspect-ratio: 1;
            top: 10px;
            left: 10px;
            border-radius: 50%;
            z-index: 3;
            border: 4px solid rgba(255, 255, 255, 0.3);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
            transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
          }
          .account-card:hover .account-card__pic:hover {
            transform: scale(1.2);
            border-radius: 12px;
          }
          .account-card:hover .account-card__pic img {
            transform: scale(1.6);
            object-position: center 30%;
            transition: all 0.5s ease-in-out 0.5s;
          }
          .account-card:hover .account-card__stats {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== 平板 ===== */
        @media (max-width: 1024px) {
          .accounts__grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .account-card {
            height: 360px;
          }
        }

        /* ===== Mobile:始终显示 hover 后的效果 ===== */
        @media (max-width: 768px) {
          .accounts {
            padding: 4rem 0;
          }
          .accounts__grid {
            grid-template-columns: 1fr;
          }
          /* 卡片改成水平布局:头像圆在左,信息在右 */
          .account-card {
            height: auto;
            min-height: auto;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.1rem;
            border-radius: 20px;
            border-top-left-radius: 35px;  /* 模拟 desktop hover 的左上圆角 */
          }
          /* 头像:90×90 圆 + 白边 + 永久 hover 缩放效果 */
          .account-card__pic {
            position: relative;
            width: 90px;
            height: 90px;
            aspect-ratio: 1;
            top: 0;
            left: 0;
            border-radius: 50%;
            border: 4px solid rgba(255, 255, 255, 0.3);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
            flex-shrink: 0;
            z-index: 3;
          }
          .account-card__pic img {
            transform: scale(1.6);
            object-position: center 30%;
          }
          /* 底部信息块:占满右侧,完整展开,无毛玻璃无圆角 */
          .account-card__bottom {
            position: relative;
            top: auto;
            bottom: auto;
            left: auto;
            right: auto;
            width: auto;
            flex: 1;
            height: auto;
            border-radius: 0;
            background: transparent;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            box-shadow: none;
            padding: 0;
          }
          .account-card__content {
            flex: 1;
            min-height: 0;
          }
          /* stats 始终显示 */
          .account-card__stats {
            opacity: 1;
            transform: none;
            margin-top: 0.5rem;
            gap: 1rem;
          }
          .account-card__stat-num {
            font-size: 0.95rem;
          }
          .account-card__stat-label {
            font-size: 0.68rem;
          }
          /* 底部行:平台 + 按钮 */
          .account-card__bottom-bottom {
            margin-top: 0.8rem;
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  )
}