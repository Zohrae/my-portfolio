"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, Github, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  { icon: Github, href: "https://github.com", label: "Github" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-xl border-b border-pink-100"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-16 py-5">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 overflow-hidden transition-all duration-300 group-hover:scale-105">
            <Image
              src="/img/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span
          className="text-xl sm:text-2xl font-bold text-[var(--color-rose)]"
          style={{
            fontFamily: "Libre Baskerville, serif",
            letterSpacing: "0.06em",
            textShadow: "3px 3px 8px rgba(219, 39, 119, 0.6)" // darker pink shadow
          }}
        >
          Portfolio
        </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-6 sm:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-2 py-1 text-black-1800 text-xl transition-all duration-300
                            hover:text-rose-500 hover:-translate-y-[2px]
                            hover:drop-shadow-[0_6px_12px_rgba(244,114,182,0.35)]
                            group"
                  style={{ fontFamily: "Freestyle Script, cursive", letterSpacing: "0.1em" }}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-rose-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>

              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 pl-4 sm:pl-6 border-l border-pink-200">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-gray-600 
                            hover:text-[var(--color-rose)] hover:scale-110 transition-all duration-300"
                  style={{ transition: "all 0.3s ease" }}
                  aria-label={social.label}
                >
                  <Icon
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    style={{
                      filter: "drop-shadow(0.2px 0.5px 0.7px currentColor)", // light shadow using icon color
                      transition: "all 0.3s ease",
                    }}
                  />
                </a>
              );
            })}
          </div>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-rose-100 to-purple-100
                     flex items-center justify-center text-gray-700
                     hover:from-rose-200 hover:to-purple-200 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-pink-100
                    transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
      >
        <div className="px-4 sm:px-6 py-6 space-y-5">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-medium hover:text-rose-500 transition-all duration-300 animate-fade-in-down"
              style={{ animationDelay: `${index * 60}ms`, fontFamily: "Freestyle Script, cursive", letterSpacing: "0.1em" }}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 pt-4 border-t border-pink-100">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-gray-600 hover:text-rose-500 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
