"use client"
import { useState, useRef } from "react"
import {
  motion,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react"
import MobileMenu from "./MobileMenu"

const headerVariants: Variants = {
  visible: { y: 0 },
  hidden: { y: "-100%" },
}

export default function Header() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()       
  const previousScrollY = useRef(0)

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current < 100) {
      setHidden(false)
      return
    }

    const direction = current > previousScrollY.current ? "down" : "up"

    if (direction === "down") {
      setHidden(true)
    } else if (direction === "up") {
      setHidden(false)
    }

    previousScrollY.current = current
  })

  const pathname = usePathname()

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECT", href: "/project" },
    { name: "CONTACT", href: "/contact" },
  ]

  const socialIcons = [
    { name: "facebook", icon: "gg:facebook", href: "/facebook" },
    { name: "twitter", icon: "proicons:x-twitter", href: "/twitter" },
    { name: "instagram", icon: "mdi:instagram", href: "/instagram" },
  ]

  return (
    <motion.header
      variants={headerVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto px-4 py-6 lg:px-0 lg:py-8"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-6.5">
            <Link href="/" className="cursor-pointer">
                <Image 
                    src="/images/brand2.svg"
                    alt="photoby_brand_logo"
                    width={133}
                    height={29}
                />
            </Link>
            <nav className="lg:flex gap-8 items-center hidden">
                {navLinks.map((link, index) => {
                    const isActive = pathname === link.href
                    return (                    
                        <Link href={link.href} key={index} className="relative text-sm font-medium text-black">
                            <span className={`${isActive ? "" : ""}`}>{link.name}</span>

                            {isActive && (
                                <motion.div
                                layoutId="active-underline"
                                className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gray-500 rounded-full"
                                initial={false} 
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                                />
                            )}
                        </Link>
                    )
                })}
            </nav>
        </div>

        <div className="flex items-center gap-2.75">
            {socialIcons.map((social) => (
                <Link href={social.href} key={social.name} className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center">
                    <Icon icon={social.icon} className="w-5 h-5 lg:w-6 lg:h-6" />
                </Link>
            ))}
        </div>

        <MobileMenu />
      </div>
    </motion.header>
  )
}