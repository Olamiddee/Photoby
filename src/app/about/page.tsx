"use client"
import { motion, animate } from "framer-motion"
import SimpleCurtainReveal from "@/components/UI/ExpandableImage"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CountUp from "@/components/UI/CountUp"
import { Icon } from "@iconify/react"
import serviceData from "@/data/ServicesData"
import ServiceCard from "@/components/cards/ServiceCard"
import TeamCard from "@/components/cards/TeamCard"
import { TeamData } from "@/data/TeamData"
import Footer from "@/components/Footer"

gsap.registerPlugin(ScrollTrigger)

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

const fadeUpVariant = {
    hidden: { 
      opacity: 0,
      y: 40,          
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.9,
        ease: "easeOut" as const,
      },
    },
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.15,    
        delayChildren: 0.2,      
        },
    },
}

const logos = [
    "/logos/FoxHub.svg",
    "/logos/Goldline.svg",
    "/logos/Solaytic.svg",
    "/logos/Earth.svg",
    "/logos/Ztos.svg",
    "/logos/Utosia.svg",
]

export default function Page() {
    const trackRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!trackRef.current) return

        gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
        })
    }, [])

    /* UseEffect for the divs to appear one after the other */
    useEffect(() => {
        if (!containerRef.current) return

        gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            },
        }
        )
    }, [])

    return (
        <div className="py-30 lg:py-40 flex flex-col gap-10 lg:gap-30 pb-100 lg:pb-40 bg-[#F2F2F2]">

            <div className="flex flex-col gap-4 lg:gap-8 px-4 lg:px-10.5">

                <div className="flex items-start gap-2">
                    <div className="h-5.5 lg:h-10 flex items-end justify-end">
                        <div className="w-2.5 h-2.5 lg:w-8 lg:h-8 bg-black rounded-full" />
                    </div>

                    <motion.h1
                        variants={container}
                        initial="hidden"
                        whileInView="visible"      
                        viewport={{ once: true }}
                        className="uppercase font-bold text-2xl lg:text-[64px] text-black lg:leading-15 tracking-[2%] lg:w-154.75"
                    >
                        {"CRAFTING DIGITAL EXPERIENCE".split(" ").map((word, index) => (
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

                <div>
                    <SimpleCurtainReveal 
                        src={"/images/aboutHero.svg"}
                        alt={"photographer_shot_image"}
                        width="w-full"
                        height="h-[240px] lg:h-[522px]"
                    />
                </div>

            </div>

            <div className="flex flex-col gap-8 lg:gap-17.75 px-4 lg:px-10.5">

                <div className="flex items-center justify-between">

                    <div className="flex gap-2 lg:gap-4 items-center">
                        <div className="w-2 h-2 lg:w-4 lg:h-4 bg-black rounded-full" />

                        <motion.h1
                            variants={container}
                            initial="hidden"
                            whileInView="visible"      
                            viewport={{ once: true }}
                            className="uppercase font-bold lg:font-semibold text-lg lg:text-[32px] text-black"
                        >
                            {"About".split(" ").map((word, index) => (
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

                    <div>
                        <p className="font-semibold text-lg lg:text-[32px] text-black">(1.1)</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">

                    <div className="flex flex-col gap-4 lg:gap-8.75 w-full">
                        <div>
                            <img src='/images/brand2.svg' alt="photoby_brand_logo" className="h-5.5 lg:h-25 object-contain" />
                        </div>
                        <div>
                            <SimpleCurtainReveal 
                                src={"/images/about.png"}
                                alt={"photoby_about_image"}
                                width="w-full lg:w-[666px]"
                                height="h-[100px] lg:h-[216px]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 lg:gap-7.25">
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUpVariant}
                            className="font-medium text-sm lg:text-lg text-black max-w-4xl mx-auto"
                        >
                            We are a full-service photography agency delivering bold, high-impact visuals for brands, events, and editorial projects. Our team of photographers, art directors, and retouchers handles everything from concept and location scouting to studio shoots and post-production. With a focus on creative direction, technical precision, and fast delivery, we create market-ready imagery that elevates your story and drives results across digital, social, and print.
                        </motion.p>
                    </div>
                </div>

            </div>

            <div className="overflow-hidden w-full px-4 lg:px-10.5">
                <div
                    ref={trackRef}
                    className="flex w-max gap-12 lg:h-12.75 items-center"
                >
                    {[...logos, ...logos].map((logo, i) => (
                    <img
                        key={i}
                        src={logo}
                        className="h-12 shrink-0"
                    />
                    ))}
                </div>
            </div>

            <div ref={containerRef} className="w-full grid lg:grid-cols-4 md:grid-cols-2">

                <div className="h-49.75 lg:h-72.5 flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center justify-center gap-6 text-black">
                        <CountUp to={200} duration={3} className="font-bold text-5xl lg:text-[64px]" />
                        <p className="uppercase font-semibold text-base lg:text-lg">Visualisation</p>
                    </div>
                </div>

                <div className="h-49.75 lg:h-72.5 flex items-center justify-center bg-black">
                    <div className="flex flex-col items-center justify-center gap-6 text-white">
                        <CountUp to={7} duration={3} className="font-bold text-5xl lg:text-[64px]" />
                        <p className="uppercase font-semibold text-base lg:text-lg">YEARS EXPERIENCE</p>
                    </div>
                </div>

                <div className="h-49.75 lg:h-72.5 flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center justify-center gap-6 text-black">
                        <CountUp to={32} duration={3} className="font-bold text-5xl lg:text-[64px]" />
                        <p className="uppercase font-semibold text-base lg:text-lg">AWARDS</p>
                    </div>
                </div>

                <div className="h-49.75 lg:h-72.5 flex items-center justify-center bg-black">
                    <div className="flex flex-col items-center justify-center gap-6 text-white">
                        <CountUp to={16} duration={3} className="font-bold text-5xl lg:text-[64px]" />
                        <p className="uppercase font-semibold text-base lg:text-lg">PHOTOGRAPHERS</p>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-20 px-4 lg:px-10.5">
                <div className="w-full border border-black hidden lg:flex" />

                <div className="flex flex-col lg:gap-16">

                    <div className="flex flex-col gap-8 lg:gap-16">

                        <div className="flex items-center justify-between">

                            <div className="flex gap-2 lg:gap-4 items-center">
                                <div className="w-2.5 h-2.5 py-1.25 lg:w-4 lg:h-4 bg-black rounded-full" />

                                <motion.h1
                                    variants={container}
                                    initial="hidden"
                                    whileInView="visible"      
                                    viewport={{ once: true }}
                                    className="uppercase font-bold lg:font-semibold text-lg lg:text-[32px] text-black"
                                >
                                    {"Services".split(" ").map((word, index) => (
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

                            <div className="flex items-center justify-center gap-[5.33px] lg:gap-6">
                                <Link href="/services" className="flex items-center gap-[3.56px] lg:gap-4">
                                    <span className="flex font-semibold text-xs lg:text-sm">Explore services</span>
                                    <Icon icon="solar:arrow-right-outline"  className="w-4 h-4 lg:w-6 lg:h-6" />
                                </Link>

                                <p className="font-semibold text-lg lg:text-[32px] text-black">(1.2)</p>
                            </div>

                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }} 
                            className="grid lg:grid-cols-3 gap-8 lg:gap-6"
                        >
                            {serviceData.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    src={service.serviceIcon}
                                    serviceName={service.serviceName}
                                    content={service.content}
                                />
                            ))}
                        </motion.div>

                        <div className="lg:hidden">
                            <SimpleCurtainReveal 
                            src={"/images/serviceImage.svg"}
                            alt={"photoby_service_image"}
                            width="w-full"
                            height="h-[256px] lg:h-[680px]"
                            />
                        </div>

                    </div>

                </div>

                <div className="w-full border border-black" />
            </div>

            <div className="flex flex-col gap-8 lg:gap-12 px-4 lg:px-10.5">

                <div className="flex items-center justify-between">

                    <div className="flex gap-2 lg:gap-4 items-center">
                        <div className="w-2.5 h-2.5 py-1.25 lg:w-4 lg:h-4 bg-black rounded-full" />

                        <motion.h1
                            variants={container}
                            initial="hidden"
                            whileInView="visible"      
                            viewport={{ once: true }}
                            className="uppercase font-bold lg:font-semibold text-lg lg:text-[32px] text-black"
                        >
                            {"TEAM".split(" ").map((word, index) => (
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

                    <div>
                        <p className="font-semibold text-lg lg:text-[32px] text-black">(1.3)</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 w-full">
                    {TeamData.map((team, index) => (
                        <TeamCard 
                            key={index}
                            image={team.image}
                            name={team.name}
                        />
                    ))}
                </div>

            </div>

            <Footer />


        </div>
    )
}