import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Photography Services | Photoby – Creative Agency Lagos",
  description: "Professional photography services in Lagos: brand campaigns, corporate headshots, event coverage, editorial shoots, product photography, fashion & lifestyle visuals. Tailored creative solutions from concept to stunning delivery.",
  keywords: ["photography services Lagos", "brand photography Nigeria", "event photographer Lagos", "corporate headshots", "product photography", "creative agency Lagos"],
}

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}