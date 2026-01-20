"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-[#F9DBBD] via-[#FFA5AB] to-[#DA627D] text-white overflow-hidden">
      
      {/* Floating abstract circles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 h-40 w-40 rounded-full bg-[#A53860]/50 blur-3xl mix-blend-multiply"
      />
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-1/3 h-64 w-64 rounded-full bg-[#450920]/40 blur-3xl mix-blend-multiply"
      />

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="z-10 flex max-w-3xl flex-col items-center gap-6"
      >
        <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl">
          Fatima LAMSSANE
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light">
          Junior Full Stack Web Developer
        </h2>
        <p className="max-w-xl text-md sm:text-lg md:text-xl font-medium leading-relaxed text-[#F9DBBD]">
          Master’s student in Software Systems Engineering. I build bold digital experiences, from
          creative frontends to smart backend systems, blending innovation, reliability, and AI.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="rounded-full bg-[#A53860] px-6 py-3 font-semibold text-white shadow-lg hover:bg-[#DA627D] transition-colors"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white shadow-lg hover:bg-white hover:text-[#450920] transition-colors"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
