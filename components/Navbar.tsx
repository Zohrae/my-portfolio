"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all ${
        scrolled ? "bg-[#450920]/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-[#F9DBBD]">
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            className="font-bold text-2xl tracking-wider"
          >
            Fatima LAMSSANE
          </motion.h1>
        </Link>
        <ul className="flex gap-6 font-medium">
          {navItems.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ y: -3, color: "#FFA5AB" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={item.href}>{item.title}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
