"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Sparkles,
  MapPin,
  Download,
} from "lucide-react";
import Image from "next/image";

const titles = [
  "Full Stack Web Developer",
  "Database Enthusiast",
  "AI & Data Passionate",
  "DevOps Explorer",
  "Systems Security Curious",
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentTitleText = titles[currentTitle];
    const typingSpeed = 50;
    const erasingSpeed = 30;
    const pauseTime = 1800;

    let timeout: NodeJS.Timeout | undefined;

    if (!isErasing) {
      if (displayedText.length < currentTitleText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            currentTitleText.slice(0, displayedText.length + 1)
          );
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsErasing(true), pauseTime);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, erasingSpeed);
      } else {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsErasing(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, currentTitle]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-32 sm:gap-x-40 items-center">
        
        {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-8 pl-4 sm:pl-8">
                    <div className="space-y-4">
                      <h1
                      style={{
                fontFamily: "Freestyle Script, cursive",
                letterSpacing: "0.1em",
                textShadow: "0 4px 12px rgba(59,29,42,0.55)",
                color: "#3b1d2a"
            }}
                       className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Hi, I'm{" "}
                          <span className="text-[#3b1d2a] drop-shadow-[0_4px_12px_rgba(59,29,42,0.55)]">
                            Fatima
                          </span>
                      </h1>
                      
                      {/* Typing titles */}
                      <div className="h-12 sm:h-16 relative">
            <h2
              style={{ fontFamily: "Libre Baskerville, serif", letterSpacing: "0.05em" }}
              className="text-lg sm:text-xl md:text-1xl font-semibold text-gray-700 flex items-start pl-1"
            >
              {displayedText}
              <span className="animate-pulse ml-1">|</span>
            </h2>
          </div>

          </div>

          <p className="relative text-gray-900 text-base sm:text-lg md:text-lg leading-relaxed max-w-xl">
            I build things that{" "}
            <span className="font-semibold relative">click, scroll, and wow</span>.  
            <br />
            Scroll down to see what I’ve been up to!

            {/* Soft animated sparkles */}
            <span className="absolute top-0 left-1 w-2 h-2 bg-pink-200 rounded-full animate-sparkle" />
            <span className="absolute top-1/3 left-3/4 w-2 h-2 bg-pink-200 rounded-full animate-sparkle animate-sparkle-delay-500" />
            <span className="absolute top-2/3 left-1/2 w-2 h-2 bg-pink-200 rounded-full animate-sparkle animate-sparkle-delay-1000" />
          </p>

          <div className="h-3"></div>
          <div className="flex items-center gap-3 text-base text-gray-600">
            <MapPin className="w-5 h-5 text-rose-500" />
            <span>Marrakech, Morocco</span>
          </div>
          <div className="h-5"></div>
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-[42px] sm:w-[145px] bg-gradient-to-r from-[var(--color-rose)] to-[var(--color-purple)] text-white text-[15px] font-medium tracking-wide rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center h-[42px] sm:w-[145px] bg-gradient-to-r from-[var(--color-rose)] to-[var(--color-purple)] text-white text-[15px] font-medium tracking-wide rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center h-[42px] w-[42px] bg-transparent text-gray-700 rounded-full hover:bg-[var(--color-rose)] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>
          <div className="h-2"></div>
          {/* Social links - NO BACKGROUND */}
          <div className="flex items-center gap-4 sm:gap-6 pt-6 sm:pt-10">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href={
                  i === 0
                    ? "https://github.com/Zohrae"
                    : i === 1
                    ? "https://linkedin.com/in/fatima-lamssane-"
                    : "mailto:zahraelamssane@gmail.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-gray-600 hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
            ))}
          </div>
        </div>


        {/* Right side - Image */}
        <div className="relative flex justify-center mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]">
            {/* Decorative circles - more subtle */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute inset-6 bg-gradient-to-br from-rose-300 to-purple-300 rounded-full opacity-25 animate-pulse delay-300"></div>
            
            {/* Profile image with better border */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl ring-4 ring-rose-100/50">
              <Image
                src="/img/me.jpg"
                alt="Fatima LAMSSANE"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-60 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* Scroll indicator - icon only, cute */}
<button
  onClick={scrollToNext}
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
  aria-label="Scroll down"
>
  {/* Cute animated circles around arrow */}
  <div className="relative w-6 h-6 flex items-center justify-center">
    <span className="absolute w-2 h-2 bg-purple-200 rounded-full animate-bounce-slow opacity-80"></span>
    <span className="absolute w-2 h-2 bg-pink-200 rounded-full animate-bounce-slow delay-150 opacity-80"></span>
    <span className="absolute w-2 h-2 bg-blue-200 rounded-full animate-bounce-slow delay-300 opacity-80"></span>
    <ArrowDown className="w-6 h-6 text-gray-500 animate-bounce" />
  </div>
</button>

    </section>
  );
};

export default Hero;