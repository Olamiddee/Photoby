"use client" 
import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 500 }
  const mouseXSpring = useSpring(cursorX, springConfig)
  const mouseYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16) 
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", moveCursor)
    document.documentElement.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.documentElement.style.cursor = "auto"
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
      style={{
        x: mouseXSpring,
        y: mouseYSpring,
      }}
    >
      <div className="w-8 h-8 rounded-full border-2 border-teal-500 backdrop-blur-sm" />
      {/* Optional inner dot that follows exactly */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 border border-purple-950 rounded-full" />
      </div>
    </motion.div>
  )
}