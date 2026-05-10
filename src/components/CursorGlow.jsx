import { useEffect, useState } from 'react'

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      })

    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }

  }, [])

  return (

    <div
      className="
        fixed
        top-0
        left-0
        w-[500px]
        h-[500px]
        rounded-full
        pointer-events-none
        z-0
        blur-3xl
      "

      style={{
        background:
          'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',

        transform: `translate(${position.x - 250}px, ${position.y - 250}px)`
      }}
    />

  )
}

export default CursorGlow