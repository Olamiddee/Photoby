"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function SimpleCurtainReveal({
  src,
  alt,
  width,
  height,
  curtainColor = "#f48c06",
}: {
  src: string
  alt: string
  width?: string
  height?: string
  curtainColor?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !curtainRef.current || !imageRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        once: true,
        toggleActions: "play none none none",
      },
    })

    tl.set(imageRef.current, { opacity: 1 }, 0)

    tl.to(curtainRef.current, {
      scaleX: 0,
      duration: 0.8,
      ease: "power3.out",
      transformOrigin: "right center",
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: height || "100%" }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`${width ?? "w-full"} ${height ?? "h-full"} object-cover opacity-0`}
      />

      <div
        ref={curtainRef}
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: curtainColor,
          transformOrigin: "right center",
        }}
      />
    </div>
  )
}