"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react"
import MobileMenu from "./MobileMenu"

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
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

  useGSAP(() => {
    if (!headerRef.current) return

    const header = headerRef.current

    gsap.set(header, {
      backgroundColor: "transparent",
      backdropFilter: "blur(0px)",
      border: "none",
      borderRadius: "0",
      width: "100%",
      maxWidth: "100%",
      margin: "0 auto",
      padding: "1.5rem 1rem",
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=200",
        scrub: 0.3,
      },
    }).to(header, {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(200, 200, 200, 0.3)",
      borderRadius: "16px",
      width: "90%",
      maxWidth: "1200px",
      margin: "1rem auto",
      padding: "1rem 1.5rem",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      ease: "power2.out",
    })

    let lastScroll = 0
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      onUpdate: (self) => {
        const scroll = self.scroll()
        if (scroll > 100) {
          if (scroll > lastScroll) {
            gsap.to(header, { y: "-100%", duration: 0.35, ease: "power2.out" })
          } else {
            gsap.to(header, { y: 0, duration: 0.35, ease: "power2.out" })
          }
        } else {
          gsap.to(header, { y: 0, duration: 0.25, ease: "power1.out" })
        }
        lastScroll = scroll
      },
    })

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "top top",
      onLeaveBack: () => {
        gsap.to(header, {
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          borderRadius: "0",
          border: "none",
          backdropFilter: "blur(0px)",
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: "1.5rem 1rem",
          duration: 0.4,
          ease: "power2.out",
        })
      },
    })
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
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
          
        </div>

        <nav className="lg:flex gap-8 items-center hidden">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href
            return (
              <Link
                href={link.href}
                key={index}
                className="relative text-sm font-medium text-black"
              >
                <span>{link.name}</span>
                {isActive && (
                  <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gray-500 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* <div className="flex items-center gap-2.75">
          {socialIcons.map((social) => (
            <Link
              href={social.href}
              key={social.name}
              className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center"
            >
              <Icon icon={social.icon} className="w-5 h-5 lg:w-6 lg:h-6" />
            </Link>
          ))}
        </div> */}

        <MobileMenu />
      </div>
    </header>
  )
}