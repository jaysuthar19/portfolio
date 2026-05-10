import { motion } from 'framer-motion'

function Loader() {

  return (

    <motion.div

      initial={{
        opacity: 1
      }}

      exit={{
        opacity: 0
      }}

      transition={{
        duration: 0.8
      }}

      className="
        fixed inset-0
        bg-black
        z-[999]
        flex items-center justify-center
      "
    >

      <div className="text-center">

        {/* Logo */}
        <motion.h1

          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}

          className="
            text-6xl md:text-8xl
            font-black
            tracking-[10px]
          "
        >

          JAY

        </motion.h1>

        {/* Loading Line */}
        <div className="
          mt-8
          w-52
          h-[2px]
          bg-white/10
          overflow-hidden
          mx-auto
        ">

          <motion.div

            initial={{
              x: '-100%'
            }}

            animate={{
              x: '100%'
            }}

            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'linear'
            }}

            className="
              w-1/2
              h-full
              bg-white
            "
          />

        </div>

      </div>

    </motion.div>

  )
}

export default Loader