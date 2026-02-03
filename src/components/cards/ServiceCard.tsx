import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export default function ServiceCard({
  src,
  serviceName,
  content,
  ...props
}: {
  src: string
  serviceName: string
  content: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!cardRef.current) return

    const card = cardRef.current
    let currentX = 0
    let currentY = 0

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const x = (mouseX / rect.width - 0.5) * 2
      const y = (mouseY / rect.height - 0.5) * 2

      currentX = x
      currentY = y

      gsap.to(card, {
        rotationY: x * 15,     
        rotationX: -y * 12,   
        transformPerspective: 800,
        transformStyle: "preserve-3d",
        ease: "power2.out",
        duration: 0.4,
        overwrite: "auto",
      })
    }

    const onMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.6,
        ease: "power3.out",
      })
    }

    card.addEventListener("mousemove", onMouseMove)
    card.addEventListener("mouseleave", onMouseLeave)

    return () => {
      card.removeEventListener("mousemove", onMouseMove)
      card.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="w-full perspective-[1000px] group" 
      {...props}
    >
      <div className="w-full flex flex-col gap-6 lg:gap-11.25 border border-gray-300 rounded-lg px-5 pt-4 pb-5 hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="w-12 h-12 lg:w-28 lg:h-28 px-6 py-6 rounded-full bg-gray-100 flex items-center justify-center">
          <img
            src={src}
            className="w-[27.43px] h-[27.43px] lg:w-16 lg:h-16"
            alt={serviceName}
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="font-bold text-base lg:text-lg">{serviceName}</p>
          <p className="font-medium text-sm lg:text-base">{content}</p>
        </div>
      </div>
    </div>
  )
}