"use client"

import { useEffect, useState } from "react"
import { motion, animate } from "framer-motion"

type Props = {
  from?: number
  to: number
  duration?: number
  className?: string
}

export default function CountUp({ from = 0, to, duration = 2, className }: Props) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    const controls = { value: from }
    const animation = animate(from, to, {
      duration,
      onUpdate: (v) => setCount(Math.floor(v)),
    })
    return () => animation.stop()
  }, [from, to, duration])

  return <span className={className}>{count}</span>
}
