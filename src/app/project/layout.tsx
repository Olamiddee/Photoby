import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Projects & Portfolio | Photoby Photography Agency",
  description: "Browse our latest creative projects and portfolio – stunning brand campaigns, editorial features, event photography, and cinematic visual stories that capture emotion and elevate brands.",
}

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}