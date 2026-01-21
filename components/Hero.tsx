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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 px-4 sm:px-6 lg:px-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-5 sm:left-10 w-60 sm:w-72 h-60 sm:h-72 bg-rose-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-5 sm:right-10 w-80 sm:w-96 h-80 sm:h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-36 items-center">
        {/* LEFT */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Fatima
              </span>
            </h1>

            {/* Typing titles */}
            <div className="h-12 sm:h-16 relative overflow-hidden">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 flex items-start">
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

        {/* RIGHT */}
        <div className="relative flex justify-center mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute inset-6 bg-gradient-to-br from-rose-300 to-purple-300 rounded-full opacity-25 animate-pulse delay-300" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-6 sm:border-8 border-white shadow-2xl ring-4 ring-rose-100/50">
              <Image
                src="/img/me.jpg"
                alt="Fatima LAMSSANE"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors group"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
