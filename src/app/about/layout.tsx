import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "About Photoby | Creative Photography Agency",
  description: "Discover the story behind Photoby – an award-winning team of photographers passionate about crafting cinematic visual narratives for brands, events, and editorial work. Meet our vision, values, and creative approach.",
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}