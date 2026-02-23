import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Contact Photoby | Photography Agency",
  description: "Ready to bring your vision to life? Get in touch with Photoby for inquiries about brand photography, events, editorial shoots, collaborations, or custom projects. Let's create something extraordinary together.",
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}