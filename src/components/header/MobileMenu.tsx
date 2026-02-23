"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
}

const linkVariants: Variants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.2, duration: 0.5, ease: "easeOut" },
  }),
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECT", href: "/project" },
    { name: "CONTACT", href: "/contact" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const handleLinkClick = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          {/* Top line */}
          <motion.path
            d="M6 10 L26 10"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { d: "M6 10 L26 10", rotate: 0, translateY: 0 },
              open: { d: "M8 8 L24 24", rotate: 0, translateY: 0 },
            }}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
          {/* Middle line */}
          <motion.path
            d="M6 16 L26 16"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { opacity: 1, scaleX: 1 },
              open: { opacity: 0, scaleX: 0.1 },
            }}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.25 }}
          />
          {/* Bottom line */}
          <motion.path
            d="M6 22 L26 22"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { d: "M6 22 L26 22", rotate: 0, translateY: 0 },
              open: { d: "M8 24 L24 8", rotate: 0, translateY: 0 },
            }}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-lg pt-20 px-6 h-screen overflow-hidden"
          >
            <nav className="flex flex-col items-center justify-center gap-8 text-xl font-medium">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href

                return (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block py-3 transition-colors ${
                        isActive ? "text-orange-600" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}