import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {

  const [open, setOpen] = useState(false)

  const [active, setActive] = useState('')

  useEffect(() => {

    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }

        })

      },

      {
        threshold: 0.3
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }

  }, [])

  const links = [
    'about',
    'skills',
    'projects',
    'contact'
  ]

  return (

    <nav className="
      fixed top-0 w-full
      border-b border-white/10
      bg-black/70
      backdrop-blur-md
      z-50
    ">

      <div className="
        max-w-7xl mx-auto
        px-6 py-5
        flex justify-between items-center
      ">

        {/* Logo */}
        <a
          href="#"

          className="
            text-2xl font-black
            tracking-[4px]
          "
        >

          JAY

        </a>

        {/* Desktop Menu */}
        <ul className="
          hidden md:flex
          gap-10
          text-sm
          uppercase
          tracking-widest
        ">

          {links.map((link) => (

            <li key={link}>

              <a
                href={`#${link}`}

                className={`
                  relative
                  transition-all duration-300
                  hover:text-white

                  ${
                    active === link
                      ? 'text-white'
                      : 'text-gray-500'
                  }
                `}
              >

                {link}

                {active === link && (

                  <motion.div

                    layoutId="active-nav"

                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-full
                      h-[2px]
                      bg-white
                    "
                  />

                )}

              </a>

            </li>

          ))}

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}

          className="
            md:hidden
            text-3xl
          "
        >

          {open ? '×' : '☰'}

        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            exit={{
              opacity: 0,
              y: -20
            }}

            className="
              md:hidden
              border-t border-white/10
              bg-black
            "
          >

            <ul className="
              flex flex-col
              items-center
              gap-8
              py-10
              uppercase
              tracking-widest
            ">

              {links.map((link) => (

                <li key={link}>

                  <a
                    href={`#${link}`}

                    onClick={() => setOpen(false)}

                    className={
                      active === link
                        ? 'text-white'
                        : 'text-gray-500'
                    }
                  >

                    {link}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  )
}

export default Navbar