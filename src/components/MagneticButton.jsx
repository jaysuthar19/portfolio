import { useRef } from 'react'

function MagneticButton({ children, className, href }) {

  const buttonRef = useRef(null)

  const handleMouseMove = (e) => {

    const button = buttonRef.current

    const rect = button.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2

    const y = e.clientY - rect.top - rect.height / 2

    button.style.transform = `
      translate(${x * 0.2}px, ${y * 0.2}px)
    `
  }

  const handleMouseLeave = () => {

    const button = buttonRef.current

    button.style.transform = 'translate(0px, 0px)'
  }

  return (

    <a
      ref={buttonRef}

      href={href}

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

      className={`
        inline-flex
        items-center justify-center
        transition-transform duration-200
        ${className}
      `}
    >

      {children}

    </a>

  )
}

export default MagneticButton