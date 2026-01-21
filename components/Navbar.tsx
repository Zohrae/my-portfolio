"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-pink-100"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="group">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-gray-700 font-medium hover:text-rose-500 transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-rose-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-pink-200">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-50 to-purple-50 flex items-center justify-center text-gray-600 hover:text-white hover:from-rose-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-110 hover:shadow-md"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center text-gray-700 hover:from-rose-200 hover:to-purple-200 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-lg border-t border-pink-100 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-medium hover:text-rose-500 transition-colors duration-300 animate-fade-in-down"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE SOCIAL ICONS */}
          <div className="flex items-center gap-3 pt-4 border-t border-pink-100">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-50 to-purple-50 flex items-center justify-center text-gray-600 hover:text-white hover:from-rose-400 hover:to-purple-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
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
