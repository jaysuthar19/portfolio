import { motion } from 'framer-motion'

function Background() {

  return (

    <div className="
      fixed inset-0
      -z-10
      overflow-hidden
    ">

      {/* Glow 1 */}
      <motion.div

        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}

        transition={{
          duration: 10,
          repeat: Infinity
        }}

        className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-white/10
          rounded-full
          blur-3xl
        "
      />

      {/* Glow 2 */}
      <motion.div

        animate={{
          x: [0, -80, 0],
          y: [0, -50, 0]
        }}

        transition={{
          duration: 12,
          repeat: Infinity
        }}

        className="
          absolute
          bottom-20
          right-20
          w-96
          h-96
          bg-white/5
          rounded-full
          blur-3xl
        "
      />

    </div>

  )
}

export default Background