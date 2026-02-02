"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import SimpleCurtainReveal from "@/components/UI/ExpandableImage"
import { Icon } from "@iconify/react"
import ScrollLogoLines from "@/components/UI/Scroll"
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

export default function Home() {
  return (
    <div className="absolute top-2 right-0 left-0 bottom-2 flex flex-col space-y-32 ">

      <div className="translate-y-26 lg:translate-y-32 flex flex-col gap-4 lg:gap-18 px-4 lg:px-12">
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

      <section className="flex flex-col gap-8 translate-y-10 lg:gap-17.75 lg:translate-y-32 px-4 lg:px-12">
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
            <p className="font-semibold text-sm lg:text-[32px] text-black">(1.1)</p>
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
              Lorem ipsum dolor sit amet consectetur. Nunc lacus imperdiet adipiscing urna. Amet aenean ac faucibus varius curabitur consequat pellentesque morbi. Tincidunt eleifend morbi mauris nascetur porta vulputate. At egestas mi senectus nam aliquam vivamus. Egestas non sit pulvinar faucibus tincidunt at quis morbi tortor. Ultrices egestas rhoncus in justo massa consectetur est ut magna. Eget vitae duis a aliquam condimentum id non scelerisque.
            </motion.p>
            <button className="w-31 h-9.75 px-6 py-4 lg:w-45.75 lg:h-14.75 lg:px-12 lg:py-3.5 flex items-center gap-[2.22px] lg:gap-2.5 bg-black rounded-full">
              <p className="font-medium text-sm lg:text-base text-white">Learn more</p>
            </button>
          </div>
        </div>
      </section>

      <section>
        <ScrollLogoLines />
      </section>
    </div>
  )
}