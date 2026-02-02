import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SimpleCurtainReveal({
  src,
  alt,
  width,
  height,
  curtainColor = "#f48c06",
}: {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  curtainColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`${width ?? "w-full"} ${height ?? "h-full"} object-cover`}
      />

      <motion.div
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute inset-0 origin-right z-10" 
        style={{ backgroundColor: curtainColor }}
      />
    </div>
  );
}