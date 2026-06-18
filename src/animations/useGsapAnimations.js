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

      // ==========================================
      //  HERO OPENING — 整段开场(无 ScrollTrigger)
      // ==========================================

      gsap.from('.nav', { y: -60, opacity: 0, duration: dur, ease: 'power3.out', delay: 0.1 })

      gsap.from('.hero__title-line', {
        clipPath: 'inset(0 100% 0 0)',
        scaleY: 0.85,
        y: 40,
        opacity: 0,
        duration: 1.6,
        ease: 'expo.out',
        delay: 0.4,
      })

      gsap.from('.hero__badge', {
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.9,
      })

      gsap.from('.hero__subtitle-bar', {
        width: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.1,
      })

      gsap.from('.hero__subtitle', {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.2,
      })

      gsap.from('.hero__desc > span', {
        clipPath: 'inset(100% 0 0 0)',
        y: 25,
        opacity: 0,
        duration: 1.0,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 1.3,
      })

      // 7. 按钮组 — 动效在 Hero.jsx 用纯 CSS @keyframes 实现
      //    (React 19 StrictMode + gsap.context().revert 多次打断 GSAP 路径,改用 CSS 更稳)

      gsap.from('.hero__stats', {
        clipPath: 'inset(100% 0 0 0)',
        y: 40,
        opacity: 0,
        duration: 1.4,
        ease: 'expo.out',
        delay: 2.0,
      })

      gsap.from('.hero__scroll', {
        opacity: 0,
        y: 20,
        duration: 1.0,
        ease: 'power3.out',
        delay: 2.4,
      })

      // Hero 背景视差
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
        '.about__data-grid',
        '.skills__grid',
        '.projects__grid',
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
