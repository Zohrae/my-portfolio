"use client";


import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#A53860]/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#DA627D] to-[#A53860] rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-[#DA627D] to-[#A53860] text-white font-bold px-4 py-2 rounded-lg">
                FL
              </div>
            </div>
            <span className="hidden sm:block text-white font-semibold text-lg">Fatima Lamssane</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a 
                  href={item.href}
                  className="text-gray-300 hover:text-[#FFA5AB] transition-colors duration-200 font-medium relative group"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFA5AB] to-[#DA627D] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact"
                className="px-5 py-2 bg-gradient-to-r from-[#DA627D] to-[#A53860] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#DA627D]/50 transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <ul className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-[#FFA5AB] transition-colors py-2"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact"
                  className="block px-5 py-2 bg-gradient-to-r from-[#DA627D] to-[#A53860] text-white rounded-full font-medium text-center"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 