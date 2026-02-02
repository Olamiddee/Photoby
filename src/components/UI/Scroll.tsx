"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ScrollLogoLines() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -400])   
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600])   
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -800]) 
  const x4 = useTransform(scrollYProgress, [0, 1], [0, 500])  

  const LogoMarquee = ({
    logos,            
    x,
    className = "",
    reverse = false,
  }: {
    logos: string[]
    x: any
    className?: string
    reverse?: boolean
  }) => {
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

    return (
      <div className="overflow-hidden">
        <motion.div
          className={`flex items-center gap-16 md:gap-24 lg:gap-32 ${className}`}
          style={{ x }}
        >
          {duplicatedLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Partner logo"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    )
  }

  const logosRow1 = [
    "/logos/FoxHub.svg",
    "/logos/Goldline.svg",
    "/logos/Solaytic.svg",
    "/logos/Earth.svg",
    "/logos/Ztos.svg",
    "/logos/Utosia.svg",
  ]

  const logosRow2 = [
    "/logos/FoxHub.svg",
    "/logos/Goldline.svg",
    "/logos/Solaytic.svg",
    "/logos/Earth.svg",
    "/logos/Ztos.svg",
    "/logos/Utosia.svg",
  ]

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-white lg:translate-y-32"
    >
      <div className="space-y-10 md:space-y-16 lg:space-y-20">
        <LogoMarquee logos={logosRow1} x={x1} className="grayscale" />
        <LogoMarquee logos={logosRow2} x={x2} />
        <LogoMarquee
          logos={[...logosRow1].reverse()}
          x={x3}
          className="grayscale"
        />
        <LogoMarquee logos={logosRow2} x={x4} />
      </div>
    </div>
  )
}