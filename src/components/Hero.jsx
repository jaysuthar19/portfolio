import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

function Hero() {

  return (

    <section className="
      min-h-screen
      flex items-center justify-center
      px-6
      relative
      overflow-hidden
    ">

      {/* Grid Background */}
      <div className="
        absolute inset-0
        opacity-20
      ">

        <div className="
          w-full h-full
          bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
          bg-[size:40px_40px]
        " />

      </div>

      {/* Main Content */}
      <motion.div

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}

        className="
          max-w-5xl
          text-center
          z-10
        "
      >

        {/* Top Text */}
        <p className="
          uppercase
          tracking-[10px]
          text-gray-500
          mb-6
        ">

          Full Stack MERN Developer

        </p>

        {/* Main Heading */}
        <h1 className="
          text-6xl md:text-8xl
          font-black
          leading-tight
          mb-8
        ">

          JAY
          <br />
          SUTHAR

        </h1>

        {/* Description */}
        <p className="
          text-gray-400
          text-lg md:text-xl
          max-w-2xl
          mx-auto
          leading-relaxed
        ">

          Building scalable web applications
          with modern UI, authentication systems,
          and REST APIs.

        </p>

        {/* Buttons */}
        <div className="
  mt-12
  flex justify-center
  gap-6
  flex-wrap
">

  <MagneticButton

    href="#projects"

    className="
      border border-white
      px-8 py-4
      hover:bg-white
      hover:text-black
      transition-all duration-300
    "
  >

    View Projects

  </MagneticButton>

  <MagneticButton

    href="/resume.pdf"

    className="
      bg-white
      text-black
      px-8 py-4
      hover:scale-105
      transition-all duration-300
    "
  >

    Download Resume

  </MagneticButton>

</div>

      </motion.div>

    </section>

  )
}

export default Hero