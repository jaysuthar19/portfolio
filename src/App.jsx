import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Background from './components/Background'
import CursorGlow from './components/CursorGlow'
import Loader from './components/Loader'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)

  }, [])

  return (

    <div className="
      bg-black
      text-white
      overflow-x-hidden
      selection:bg-white
      selection:text-black
    ">

      <AnimatePresence>

        {loading && <Loader />}

      </AnimatePresence>

      <Background />

      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>

  )
}

export default App