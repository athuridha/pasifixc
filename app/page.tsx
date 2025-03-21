"use client";
import Image from "next/image"
import { RedBeam } from "@/components/red-beam"
import { motion } from "motion/react"

const letters = "PASIFIXC".split("");

export default function Home() {
  return (
    <motion.div
      className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <RedBeam />

      {/* Horror elements */}
      <div className="absolute inset-0 bg bg-repeat opacity-5 mix-blend-overlay"></div>

      <div className="z-20 flex flex-col md:flex-row items-center justify-center gap-8 p-8 max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg border border-red-900/20">
        <div className="relative w-48 h-48 md:w-64 md:h-64 group">
          <div className="absolute inset-0 bg-red-900/20 rounded-md animate-pulse"></div>
          <Image
            src="/images/pasifixc.webp"
            alt="PASIFIXC Logo"
            width={256}
            height={256}
            priority
            className="rounded-md relative z-10 filter contrast-125 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent rounded-md z-20"></div>
        </div>

        <div className="text-center md:text-left overflow-hidden">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 tracking-wider text-red-50"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring", stiffness: 200, damping: 20 }}
          >
            <span className="text-red-600 animate-pulse inline-block">;</span>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, type: "spring", stiffness: 200, damping: 20 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-red-100/70 max-w-lg font-medium tracking-wide overflow-hidden"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay:0.2, duration: 2, type: "spring", stiffness: 400, damping: 40 }}
          >
            人生、死ぬこと、それらが全部理解する前に私たちを通り過ぎるだろうまで、落ち着いてそのことを忘す
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

