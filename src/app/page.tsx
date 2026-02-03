"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import SimpleCurtainReveal from "@/components/UI/ExpandableImage"
import { Icon } from "@iconify/react"
import ScrollLogoLines from "@/components/UI/Scroll"
import Link from "next/link"
import serviceData from "@/data/ServicesData"
import ServiceCard from "@/components/cards/ServiceCard"
import NewsCarousel from "@/components/UI/NewsCarousel"
import Footer from "@/components/Footer"
const date = new Date()
const year = date.getFullYear()

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

export default function Home() {
  return (
    <div className="absolute top-2 right-0 left-0 bottom-2 flex flex-col space-y-20 lg:space-y-32">

      <div className="translate-y-26 lg:translate-y-32 flex flex-col gap-4 lg:gap-18 px-4 lg:px-10.5">
        <div className="flex flex-col gap-4 lg:gap-8 relative">
          
          <div className="flex gap-2">
            <div className="w-[17.11px] h-[17.11px] py-1.25 lg:w-8 lg:h-8 bg-black rounded-full" />
            <motion.h1
              variants={container}
              initial="hidden"
              whileInView="visible"      
              viewport={{ once: true }}
              className="uppercase font-bold text-lg  lg:text-[64px] text-black lg:leading-15 tracking-[2%] w-32.75 -translate-y-2 lg:w-126 lg:-translate-y-3"
            >
              {"Brand Recognition".split(" ").map((word, index) => (
                <motion.span
                  variants={child}
                  key={word + index}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[7.11px] lg:gap-8">
              <p className="text-xs lg:text-sm font-medium text-black">PHOTOGRAPHY</p>
              <div className="w-[40.67px] border-[0.22px] lg:w-45.75 lg:border border-black" />
              <button className="w-4 h-4 lg:w-8 lg:h-8 flex items-center justify-center rounded-full border border-black">
                <span className="flex items-center justify-center">
                  <Icon icon="mdi-light:arrow-right" width="16" height="16" className="hidden lg:flex" />
                  <Icon icon="mdi-light:arrow-right" width="12" height="12" className="lg:hidden" />
                </span>
              </button>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <div className="w-2 h-2 lg:w-[12.65px] lg:h-[12.65px] rounded-full bg-black" />
              <p className="font-medium text-xs lg:text-2xl text-black">NEXT</p>
            </div>

          </div>

          <div className="absolute right-0 bottom-21.75 hidden lg:flex">
            <p className="text-[#000000] text-[196px] font-medium opacity-5 leading-0">{year}</p> 
          </div>

        </div>

        <SimpleCurtainReveal 
          src={"/images/hero.svg"}
          alt={"photoby_hero_image"}
          width="w-full"
          height="h-[240px] lg:h-[522px]"
        />
      </div>

      <section className="flex flex-col gap-8 translate-y-20 lg:gap-17.75 lg:translate-y-32 px-4 lg:px-10.5">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 py-1.25 lg:w-4 lg:h-4 bg-black rounded-full" />
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
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          <div>
            <p className="font-semibold text-lg lg:text-[32px] text-black">(1.1)</p>
          </div>
        </div>

        <div className="grid space-y-4 lg:grid-cols-2 lg:space-x-34">
          <div className="flex flex-col gap-4 lg:gap-8.75">
            <div>
              <img src='/images/brand2.svg' alt="photoby_brand_logo" className="w-[102.33px] h-5.5 lg:w-[458.97px] lg:h-25 object-contain" />
            </div>
            <div>
              <SimpleCurtainReveal 
                src={"/images/about.png"}
                alt={"photoby_about_image"}
                width="w-full lg:w-[666px]"
                height="h-[96px] lg:h-[216px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-7.25">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="font-medium text-sm lg:text-lg text-black max-w-3xl mx-auto"
            >
             We are a full-service photography agency delivering bold, high-impact visuals for brands, events, and editorial projects. Our team of photographers, art directors, and retouchers handles everything from concept and location scouting to studio shoots and post-production. With a focus on creative direction, technical precision, and fast delivery, we create market-ready imagery that elevates your story and drives results across digital, social, and print.
            </motion.p>
            <Link href="/about"  className="w-31 h-9.75 px-6 py-4 lg:w-45.75 lg:h-14.75 lg:px-12 lg:py-3.5 flex items-center gap-[2.22px] lg:gap-2.5 bg-black rounded-full">
              <p className="font-medium text-sm lg:text-base text-white">Learn more</p>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <ScrollLogoLines />
      </section>

      <section className="translate-y-20 lg:translate-y-32 px-4 lg:px-10.5">
        <div className="w-full border border-black" />
      </section>

      <section className="flex flex-col gap-8 lg:gap-16 translate-y-20 lg:translate-y-32 px-4 lg:px-10.5">

        <div className="flex flex-col gap-8 lg:gap-12 mx-auto">

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
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <div className="flex items-center gap-[5.33px] lg:gap-6">
              <Link href="/services" className="flex items-center gap-[3.56px] lg:gap-4">
                <span className="flex font-semibold text-sm">Explore services</span>
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
            className="grid space-y-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0 mx-auto"
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

        </div>

        <div>
          <SimpleCurtainReveal 
            src={"/images/serviceImage.svg"}
            alt={"photoby_service_image"}
            width="w-full"
            height="h-[256px] lg:h-[680px]"
          />
        </div>

        <div className="w-full border border-black my-5 lg:my-10 " />
      </section>

      <section className="flex flex-col gap-8 lg:gap-16 translate-y-12 lg:translate-y-32 px-4 lg:px-10.5">
        <div className="flex flex-col gap-8 lg:gap-12">
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
                {"FEATURE NEWS".split(" ").map((word, index) => (
                  <motion.span
                    variants={child}
                    key={word + index}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <div className="flex items-center gap-[5.33px] lg:gap-6">
              <p className="font-semibold text-lg lg:text-[32px] text-black">(1.3)</p>
            </div>
          </div>

          <NewsCarousel  />
        </div>
      </section>

      <div className="mt-10 lg:mt-20">
        <Footer />
      </div>
    </div>
  )
}