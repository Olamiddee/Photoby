"use client"
import { useState, useReducer } from "react"
import { motion, animate } from "framer-motion"
import Footer from "@/components/Footer"

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
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div className="pt-30 lg:pt-40 flex flex-col gap-10 lg:gap-30 bg-[#F2F2F2]">

        
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 px-4 lg:px-10.5">
                <img 
                    src="/images/contact.svg"
                    alt="Contact_image"
                    className="lg:w-137 lg:h-155 hidden lg:flex"
                />

                <div className="flex flex-col gap-12 w-full">

                    <div className="flex items-center gap-4">
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
                            {"CONTACT".split(" ").map((word, index) => (
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

                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col lg:flex-row gap-4.75">
                            <input 
                                className="focus:outline-none w-full h-12 px-2 py-4.75 border-b border-black font-semibold text-sm text-black"
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />

                            <input 
                                className="focus:outline-none w-full h-12 px-2 py-4.75 border-b border-black font-semibold text-sm text-black"
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <input 
                            className="focus:outline-none w-full h-12 px-2 py-4.75 border-b border-black font-semibold text-sm text-black"
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button className="lg:w-55.5 h-14.75 w-55.5 rounded-[9999px] px-12 py-3.5 flex items-center justify-center border">
                            <p className="font-semibold text-base text-black">SEND MESSAGE</p>
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 lg:flex-row lg:gap-16.75">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-black" />
                                <p className="font-semibold text-lg text-black">STAY IN THE KNOW</p>
                            </div>
                            <div className="flex flex-col gap-2.25 text-black">
                                <p className="font-medium text-base">Photograpy@biz.com</p>
                                <p className="font-medium text-base">+36 (879) 79879</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img 
                    src="/images/contact.svg"
                    alt="Contact_image"
                    className="w-full h-80 lg:hidden object-cover"
                />
            </div>

            <Footer />
        </div>
    )
}