import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Accounts from './components/Accounts'
import Skills from './components/Skills'
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
        <Accounts />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App
