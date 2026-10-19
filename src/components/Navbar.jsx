
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['about', 'skills', 'projects', 'contact']

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = links
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-15% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => setOpen(false)

  const renderLabel = (link) =>
    link.charAt(0).toUpperCase() + link.slice(1)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          aria-label="Jay - Home"
          className="text-2xl font-black tracking-[4px]"
        >
          JAY
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-10 text-sm uppercase tracking-widest md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                aria-current={active === link ? 'location' : undefined}
                className={`relative block py-1 transition-colors duration-300 hover:text-white ${
                  active === link ? 'text-white' : 'text-gray-500'
                }`}
              >
                {renderLabel(link)}

                {active === link && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-white"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="text-3xl transition-colors hover:text-gray-300 md:hidden"
        >
          {open ? '×' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-black md:hidden"
          >
            <ul className="flex flex-col items-center gap-8 py-10 uppercase tracking-widest">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    onClick={closeMenu}
                    aria-current={active === link ? 'location' : undefined}
                    className={`transition-colors duration-300 hover:text-white ${
                      active === link ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {renderLabel(link)}
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
