import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * 高端设计师作品集级别动效系统
 *
 * Hero opening:gsap.from(无 ScrollTrigger,自动播放)
 * 滚动触发:set + ScrollTrigger.create + onEnter
 * Hero 按钮:在 Hero.jsx 用纯 CSS @keyframes 实现,见 .btn-uv 入场动画
 */
export function useGsapAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia('(max-width: 640px)').matches
      const dur = isMobile ? 0.7 : 1.2

      // 2026-06-19: 尊重 prefers-reduced-motion 系统设置,用户偏好无动画时全部跳过
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return

      // ==========================================
      //  HERO OPENING — 全部改用 CSS @keyframes (Hero.jsx / Navbar.jsx 内)
      //  2026-07-02: 整段 GSAP from 在 React 19 StrictMode 双调用下,ctx.revert()
      //  会把 chain 中段的 element 还原到 from 起点,delay 链后半段全部卡死
      //  (01 全局日志 §5.5 同类坑),CSS animation fill-mode:both 完全免疫
      //  —— Navbar / title-line / badge / subtitle-bar / subtitle / desc / stats / scroll 全部走 CSS
      // ==========================================

      // Hero 背景视差 — 2026-06-19: mobile 关闭视差
      // scrollTrigger scrub 模式持续触发重绘,移动端会卡顿
      if (!isMobile) {
        gsap.to('.hero__bg, .hero__bg-video, .hero__canvas', {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        })
      }

      // ==========================================
      //  滚动触发 — 每个模块进场
      // ==========================================

      // 英文 eyebrow → 从左 mask 擦开
      document.querySelectorAll('.section-label').forEach(label => {
        gsap.set(label, { clipPath: 'inset(0 100% 0 0)', x: -30, opacity: 0 })
        ScrollTrigger.create({
          trigger: label,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.to(label, { clipPath: 'inset(0 0% 0 0)', x: 0, opacity: 1, duration: 1.0, ease: 'expo.out' })
          },
        })
      })

      // 中文大标题
      document.querySelectorAll('.section-title').forEach(title => {
        gsap.set(title, { y: 80, opacity: 0 })
        ScrollTrigger.create({
          trigger: title,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(title, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
          },
        })
      })

      // 描述 lead
      document.querySelectorAll('.section-desc').forEach(desc => {
        gsap.set(desc, { y: 40, opacity: 0 })
        ScrollTrigger.create({
          trigger: desc,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.to(desc, { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.15 })
          },
        })
      })

// 卡片网格
        const cardGrids = [
          '.about__grid',
          // 2026-07-02: .about__data-grid 已下线
          // 2026-07-02: .skills__grid 已下线(Skills 组件删除,标题"核心优势"被用户要求去掉)
          '.projects__grid',
          // 2026-07-04: 跟 Projects / Contact 卡片网格共享同一套入场动画
          '.methodology__grid',
          '.contact__cards',
        ]

      cardGrids.forEach(selector => {
        document.querySelectorAll(selector).forEach(grid => {
          const children = Array.from(grid.children).filter(
            c => !c.classList.contains('about__avatar-wrap')
          )
          if (children.length === 0) return

          gsap.set(children, { y: 80, opacity: 0, scale: 0.96 })
          ScrollTrigger.create({
            trigger: grid,
            start: 'top 90%',
            once: true,
            onEnter: () => {
              gsap.to(children, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.0,
                stagger: 0.1,
                ease: 'power3.out',
              })
            },
          })
        })
      })

      // About 头像
      const avatarEl = document.querySelector('.about__avatar-wrap')
      if (avatarEl) {
        gsap.set(avatarEl, { x: -60, opacity: 0, scale: 0.9 })
        ScrollTrigger.create({
          trigger: avatarEl,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.to(avatarEl, { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out' })
          },
        })
      }

      // Timeline item
      document.querySelectorAll('.about__timeline-item').forEach((item, i) => {
        gsap.set(item, { x: -40, opacity: 0 })
        ScrollTrigger.create({
          trigger: item,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to(item, { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: i * 0.08 })
          },
        })
      })

      window.addEventListener('load', () => ScrollTrigger.refresh())
    })

    return () => ctx.revert()
  }, [])
}
