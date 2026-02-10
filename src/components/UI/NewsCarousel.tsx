'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useAnimate, useMotionValueEvent } from 'framer-motion'
import { Icon } from '@iconify/react'
import NewsDataCard from '../cards/NewsDataCard'
import { NewsData } from '@/data/NewsData'

export default function NewsCarousel() {
  const [cardsToShow, setCardsToShow] = useState(1)
  const x = useMotionValue(0)
  const [scope, animate] = useAnimate()
  const trackRef = useRef<HTMLDivElement>(null)

  const [canGoPrev, setCanGoPrev] = useState(false)
  const [canGoNext, setCanGoNext] = useState(true)

  useEffect(() => {
    const update = () => {
      setCardsToShow(window.innerWidth >= 768 ? 3 : 1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  
  const [slideStep, setSlideStep] = useState(0)
  useEffect(() => {
    if (trackRef.current?.children?.[0]) {
      const card = trackRef.current.children[0] as HTMLElement
      const gapPx = 24 
      setSlideStep(card.offsetWidth + gapPx)
    }
  }, [cardsToShow, NewsData.length])

  const totalWidth = slideStep * NewsData.length - 24 
  const maxX = -(totalWidth - window.innerWidth + 48) 

  useMotionValueEvent(x, 'change', (latest) => {
    setCanGoPrev(latest < -10)
    setCanGoNext(latest > maxX + 10)
  })

  const paginate = (direction: number) => {
    const current = x.get()
    const delta = direction * -slideStep  
    let target = current + delta

    target = Math.max(maxX, Math.min(0, target))

    animate(x, target, {
      type: 'spring',
      stiffness: 280,
      damping: 32,
    })
  }

  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <motion.div
          ref={scope}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: maxX, right: 0 }}
          dragElastic={0.2}
          className="touch-pan-x"
        >
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
          >
            {NewsData.map((news) => (
              <div key={news.id} className="shrink-0 w-full md:w-1/3">
                <NewsDataCard
                  date={news.date}
                  title={news.title}
                  imageUrl={news.imageUrl}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
        <button
          onClick={() => paginate(-1)} 
          disabled={!canGoPrev}
          className={`cursor-pointer flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-all ${
            canGoPrev
              ? 'opacity-100 hover:bg-black/10'
              : 'opacity-30 cursor-not-allowed'
          }`}
        >
          <Icon icon="solar:arrow-left-outline" className="w-7 h-7" />
        </button>

        <button
          onClick={() => paginate(1)}
          disabled={!canGoNext}
          className={`cursor-pointer flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-all ${
            canGoNext
              ? 'opacity-100 hover:bg-black/10'
              : 'opacity-30 cursor-not-allowed'
          }`}
        >
          <Icon icon="solar:arrow-right-outline" className="w-7 h-7" />
        </button>
      </div>
    </div>
  )
}