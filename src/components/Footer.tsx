"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import Link from "next/link"

const socialLinks = [
    {name: "Instagram", href: "/instagram"},
    {name: "Twitter", href: "/twitter"},
    {name: "LinkedIn", href: "/linkedin"},
    {name: "Facebook", href: "/facebook"},
]

const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
]

export default function Footer() {
    const [email, setEmail] = useState("")
    return (
        <footer className="flex items-center bg-black text-white px-6 py-8  lg:px-10.5 lg:py-24 w-full">
            <div className="flex flex-col gap-10 lg:gap-16 w-full">
                <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                    <img src="/logos/whiteLogo.svg" className="w-50 h-20 lg:w-[394.32px] lg:h-21.5" />
                    <p className="font-semibold text-base lg:text-lg">
                        Ready to turn your moments into timeless memories?<br />
                        Let's create something beautiful and meaningful together.
                    </p>
                </div>

                <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-4 lg:gap-2">
                        <div className="flex items-center gap-3.5 lg:gap-4">
                            <div className="w-2.5 h-2.5 bg-white rounded-full" />
                            <p className="uppercase font-semibold text-base lg:text-lg">STAY IN THE KNOW</p>
                        </div>
                        <div className="w-full lg:w-98.75 flex items-center justify-between gap-4 border-b border-white">
                            <input className="focus:outline-none placeholder:text-white placeholder:uppercase font-semibold text-sm px-2 py-3.5 lg:px-2 lg:py-2"
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Icon icon="solar:arrow-right-outline" className="w-4 h-4 lg:w-6 lg:h-6" />
                        </div>
                    </div>

                    <div className="flex justify-between lg:gap-11.75">
                        <div className="flex flex-col gap-4">
                            <p className="font-medium text-base lg:text-lg">SOCIAL</p>
                            <div className="flex flex-col gap-2">
                                {
                                    socialLinks.map((social, index) => (
                                        <Link href={social.href} key={index}>
                                            <span className="font-medium text-sm hover:text-gray-300 transition-colors duration-300">{social.name}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="font-medium text-base lg:text-lg uppercase">Pages</p>
                            <div className="flex flex-col gap-2">
                                {
                                    pageLinks.map((page, index) => (
                                        <Link href={page.href} key={index}>
                                            <span className="font-medium text-sm hover:text-gray-300 transition-colors duration-300">{page.name}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="font-medium text-base lg:text-lg uppercase">Offices</p>
                            <div className="flex flex-col gap-2">
                                {
                                    socialLinks.map((social, index) => (
                                        <Link href={social.href} key={index}>
                                            <span className="font-medium text-sm hover:text-gray-300 transition-colors duration-300">{social.name}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}