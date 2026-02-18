"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { motion, animate } from "framer-motion"
import { Icon } from "@iconify/react"
import Link from "next/link"
import Footer from "@/components/Footer"
import Image from "next/image"

const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },  
    },
}

const child = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
}

export default function Page() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const loadedImages = useRef(0)  
    const totalImages = 5

    const handleImageLoad = () => {
        loadedImages.current += 1
        if (loadedImages.current === totalImages) {
            ScrollTrigger.refresh()  
        }
    }

    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger)

      const sections = gsap.utils.toArray<HTMLElement>(".section")

      sections.forEach((section) => {
        const first = section.querySelector<HTMLElement>(".box1")
        const second = section.querySelector<HTMLElement>(".box2")

        if (!first || !second) return

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              invalidateOnRefresh: true,  
            },
          })
          .from(first, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
          })
          .from(
            second,
            {
              opacity: 0,
              y: 40,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"  
          )
      })

      ScrollTrigger.refresh()
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="pt-30 lg:pt-40 flex flex-col gap-10 lg:gap-50 bg-[#F2F2F2] ">

            <section className="section flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between px-4 lg:px-10.5">
                <div className="box box1 flex flex-col gap-4 lg:gap-8 lg:w-114.75">
                    <div className="flex items-start gap-2">
                        <div className="h-5.5 lg:h-10 flex items-end justify-end">
                            <div className="w-2.5 h-2.5 lg:w-8 lg:h-8 bg-black rounded-full" />
                        </div>

                        <motion.h1
                            variants={container}
                            initial="hidden"
                            whileInView="visible"      
                            viewport={{ once: true }}
                            className="uppercase font-bold text-2xl lg:text-[64px] text-black lg:leading-15 tracking-[2%] w-26.75 lg:w-70.75"
                        >
                            {"OUR SERVICES".split(" ").map((word, index) => (
                                <motion.span
                                    variants={child}
                                    key={word + index}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-start">
                        <div className="w-16 h-4 flex items-center justify-center">
                            <div className="w-full border border-black" />
                        </div>
                        <p className="font-medium text-base text-black">
                            Lorem ipsum dolor sit amet consectetur. Eget vitae leo dolor sed massa. Lorem pulvinar ut amet dictumst id netus neque consectetur semper. Nec et habitant mi amet penatibus purus commodo. 
                        </p>
                    </div>
                </div>

                <div className="box box2 relative">
                    <Image 
                        src="/images/serviceCard1.svg"
                        alt="Service_Card_Img"
                        width={614}
                        height={448}  
                        className="lg:w-153.5 lg:h-112 h-52.75 w-full object-cover"
                        onLoad={handleImageLoad}
                    />

                    <div className="p-4 lg:p-8 bg-white lg:w-104.75 lg:absolute lg:-bottom-30">
                        <div className="flex flex-col gap-4 lg:gap-6 text-black">
                            <p className="font-semibold uppercase text-base lg:text-[32px]">
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <Link href="/services" className="flex items-center lg:justify-start justify-between gap-8">
                                <p className="font-semibold text-sm lg:text-base">
                                    Explore services
                                </p>
                                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center border border-black">
                                    <Icon icon="mdi-light:arrow-right"  className="w-4 h-4 lg:w-6 lg:h-6" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between px-4 lg:px-10.5">
                <div className="box box1 relative">
                    <Image 
                        src="/images/serviceCard2.svg"
                        alt="Service_Card_Img"
                        width={614}
                        height={448}
                        className="lg:w-153.5 lg:h-112 h-52.75 w-full object-cover"
                        onLoad={handleImageLoad}
                    />
                    
                    <div className="p-4 lg:p-8 bg-white lg:w-104.75 lg:absolute lg:bottom-15 lg:right-0">
                        <div className="flex flex-col gap-4 lg:gap-6 text-black">
                            <p className="font-semibold uppercase text-base lg:text-[32px]">
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <Link href="/services" className="flex items-center lg:justify-start justify-between gap-8">
                                <p className="font-semibold text-sm lg:text-base">
                                    Explore services
                                </p>
                                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center border border-black">
                                    <Icon icon="mdi-light:arrow-right"  className="w-4 h-4 lg:w-6 lg:h-6" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="box box2 relative">
                   <Image 
                        src="/images/serviceCard3.svg"
                        alt="Service_Card_Img"
                        width={485}
                        height={624}
                        className="lg:w-121.25 lg:h-156 h-52.75 w-full object-cover transform lg:translate-y-1/4"
                        onLoad={handleImageLoad}
                    />

                    <div className="p-4 lg:p-8 bg-white lg:w-104.75 lg:absolute lg:-bottom-70 lg:right-0">
                        <div className="flex flex-col gap-4 lg:gap-6 text-black">
                            <p className="font-semibold uppercase text-base lg:text-[32px]">
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <Link href="/services" className="flex items-center lg:justify-start justify-between gap-8">
                                <p className="font-semibold text-sm lg:text-base">
                                    Explore services
                                </p>
                                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center border border-black">
                                    <Icon icon="mdi-light:arrow-right"  className="w-4 h-4 lg:w-6 lg:h-6" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className="section flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between px-4 lg:px-10.5">
                <div className="box box1 relative">
                    <Image
                        src="/images/serviceCard4.svg"
                        alt="Service_Card_Img"
                        width={614}
                        height={683}
                        className="lg:w-153.5 lg:h-170.75 h-52.75 w-full object-cover"
                        onLoad={handleImageLoad}
                    />

                    <div className="p-4 lg:p-8 bg-white lg:w-104.75 lg:absolute lg:-bottom-30 lg:left-0">
                        <div className="flex flex-col gap-4 lg:gap-6 text-black">
                            <p className="font-semibold uppercase text-base lg:text-[32px]">
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <Link href="/services" className="flex items-center lg:justify-start justify-between gap-8">
                                <p className="font-semibold text-sm lg:text-base">
                                    Explore services
                                </p>
                                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center border border-black">
                                    <Icon icon="mdi-light:arrow-right"  className="w-4 h-4 lg:w-6 lg:h-6" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box box2 relative">
                    <Image
                        src="/images/serviceCard5.svg"
                        alt="Service_Card_Img"
                        width={614}
                        height={408}
                        className="lg:w-153.5 lg:h-102 h-52.75 w-full object-cover transform lg:translate-y-2/3"
                        onLoad={handleImageLoad}
                    />
                   
                    <div className="p-4 lg:p-8 bg-white lg:w-104.75 lg:absolute lg:-bottom-30 lg:left-0">
                        <div className="flex flex-col gap-4 lg:gap-6 text-black">
                            <p className="font-semibold uppercase text-base lg:text-[32px]">
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <Link href="/services" className="flex items-center lg:justify-start justify-between gap-8">
                                <p className="font-semibold text-sm lg:text-base">
                                    Explore services
                                </p>
                                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center border border-black">
                                    <Icon icon="mdi-light:arrow-right"  className="w-4 h-4 lg:w-6 lg:h-6" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}