import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
// 2026-07-04: 新增 Methodology 板块(AI 创作手记),2 张飞书创作文档卡,跟 Projects 视觉语言一致
import Methodology from './components/Methodology'
import Accounts from './components/Accounts'
// 2026-07-02: Skills 组件(标题"核心优势 / Core Strengths")已下线,用户要求去掉整个板块
import Contact from './components/Contact'
import DynamicBackground from './components/DynamicBackground'
import { useGsapAnimations } from './animations/useGsapAnimations'

function App() {
  const [loaded, setLoaded] = useState(false)

  // 加载 GSAP + ScrollTrigger 全套动效
  useGsapAnimations()

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`app ${loaded ? 'app--loaded' : ''}`}>
      <Navbar />
      <Hero />
      <div className="app__dynamic-bg-wrap">
        <DynamicBackground />
        <About />
        <Projects />
        <Methodology />
        <Accounts />
        {/* 2026-07-02: <Skills /> 已下线(原标题"核心优势 / Core Strengths",6 张翻转卡片) */}
        <Contact />
      </div>
    </div>
  )
}

export default App
