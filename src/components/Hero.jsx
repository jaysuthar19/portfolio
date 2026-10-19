
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-5xl text-center"
      >
        {/* Role */}
        <p className="mb-6 text-sm uppercase tracking-[5px] text-gray-400 md:tracking-[8px]">
          PHP Laravel Developer Intern · Full Stack Developer
        </p>

        {/* Main Heading */}
        <h1 className="mb-8 text-6xl font-black leading-tight md:text-8xl">
          JAY
          <br />
          SUTHAR
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Building practical web applications, e-commerce experiences, and
          business platforms with Laravel, React, and modern web technologies.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
          <MagneticButton
            href="#projects"
            className="border border-white px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black"
          >
            View Projects
          </MagneticButton>

          <MagneticButton
            href="/resume.pdf"
            download
            className="bg-white px-8 py-4 text-black transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
