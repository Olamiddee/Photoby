"use client"

import Footer from "@/components/Footer"
import { motion, animate } from "framer-motion"
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
    return (
        <div className="pt-30 lg:pt-40 flex flex-col gap-10 lg:gap-30 bg-[#F2F2F2]">

            <div className="flex items-start gap-2 px-4 lg:px-10.5">
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
                    {"PROJECTS".split(" ").map((word, index) => (
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

            <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0 px-4 lg:px-10.5">
                <motion.h1
                    variants={container}
                    initial="hidden"
                    whileInView="visible"      
                    viewport={{ once: true }}
                    className="uppercase font-semibold text-2xl lg:text-[32px] text-black lg:w-65"
                >
                    {"SARA KINGSTON PHOTOSESSION".split(" ").map((word, index) => (
                        <motion.span
                            variants={child}
                            key={word + index}
                            className="inline-block"
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.h1>
                
                <div className="flex flex-col gap-4 lg:gap-6 items-start">
                    <div className="flex items-center gap-3.25 text-black">
                        <p className="font-medium text-sm">January 10 , 2025</p>
                        <div className="w-3.25 h-3.25 rounded-full bg-black" />
                        <p className="font-semibold text-sm">Decoration</p>
                    </div>

                    <div className="">
                        <img
                            src="/images/project1.svg"
                            alt="Project_Image"
                            
                            className="lg:w-full lg:h-140 w-full h-100 object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0 px-4 lg:px-10.5">    
                <div className="flex flex-col gap-4 lg:gap-6 items-end">
                    <div className="flex items-center gap-3.25 text-black">
                        <p className="font-medium text-sm">January 15, 2025</p>
                        <div className="w-3.25 h-3.25 rounded-full bg-black" />
                        <p className="font-semibold text-sm">Decoration</p>
                    </div>

                    <div className="">
                        <img
                            src="/images/project2.svg"
                            alt="Project_Image"
                            className="lg:w-full lg:h-140 w-full h-100 object-cover"
                        />
                    </div>
                </div>

                <motion.h1
                    variants={container}
                    initial="hidden"
                    whileInView="visible"      
                    viewport={{ once: true }}
                    className="uppercase font-semibold text-2xl lg:text-[32px] text-black lg:w-65"
                >
                    {"SARA KINGSTON PHOTOSESSION".split(" ").map((word, index) => (
                        <motion.span
                            variants={child}
                            key={word + index}
                            className="inline-block"
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.h1>
            </section>

            <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0 px-4 lg:px-10.5">
                <motion.h1
                    variants={container}
                    initial="hidden"
                    whileInView="visible"      
                    viewport={{ once: true }}
                    className="uppercase font-semibold text-2xl lg:text-[32px] text-black lg:w-65"
                >
                    {"SARA KINGSTON PHOTOSESSION".split(" ").map((word, index) => (
                        <motion.span
                            variants={child}
                            key={word + index}
                            className="inline-block"
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.h1>
                
                <div className="flex flex-col gap-4 lg:gap-6 items-start">
                    <div className="flex items-center gap-3.25 text-black">
                        <p className="font-medium text-sm">January 14, 2025</p>
                        <div className="w-3.25 h-3.25 rounded-full bg-black" />
                        <p className="font-semibold text-sm">Decoration</p>
                    </div>

                    <div className="">
                        <img
                            src="/images/project3.svg"
                            alt="Project_Image"
                            
                            className="lg:w-full lg:h-140 w-full h-100 object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0 px-4 lg:px-10.5">    
                <div className="flex flex-col gap-4 lg:gap-6 items-end">
                    <div className="flex items-center gap-3.25 text-black">
                        <p className="font-medium text-sm">May 14, 2025</p>
                        <div className="w-3.25 h-3.25 rounded-full bg-black" />
                        <p className="font-semibold text-sm">Decoration</p>
                    </div>

                    <div className="">
                        <img
                            src="/images/project4.svg"
                            alt="Project_Image"
                            
                            className="lg:w-full lg:h-140 w-full h-100 object-cover"
                        />
                    </div>
                </div>

                <motion.h1
                    variants={container}
                    initial="hidden"
                    whileInView="visible"      
                    viewport={{ once: true }}
                    className="uppercase font-semibold text-2xl lg:text-[32px] text-black lg:w-65"
                >
                    {"SARA KINGSTON PHOTOSESSION".split(" ").map((word, index) => (
                        <motion.span
                            variants={child}
                            key={word + index}
                            className="inline-block"
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.h1>
            </section>

            <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0 px-4 lg:px-10.5">
                <motion.h1
                    variants={container}
                    initial="hidden"
                    whileInView="visible"      
                    viewport={{ once: true }}
                    className="uppercase font-semibold text-2xl lg:text-[32px] text-black lg:w-65"
                >
                    {"SARA KINGSTON PHOTOSESSION".split(" ").map((word, index) => (
                        <motion.span
                            variants={child}
                            key={word + index}
                            className="inline-block"
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.h1>
                
                <div className="flex flex-col gap-4 lg:gap-6 items-start">
                    <div className="flex items-center gap-3.25 text-black">
                        <p className="font-medium text-sm">January 11, 2026</p>
                        <div className="w-3.25 h-3.25 rounded-full bg-black" />
                        <p className="font-semibold text-sm">Decoration</p>
                    </div>

                    <div className="">
                        <img
                            src="/images/project5.svg"
                            alt="Project_Image"
                            
                            className="lg:w-full lg:h-140 w-full h-100 object-cover"
                        />
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}