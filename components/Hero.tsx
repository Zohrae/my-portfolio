"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, MapPin, Download } from 'lucide-react';
import Image from 'next/image';

const titles = [
  "Full Stack Web Developer",
  "Database Enthusiast",
  "AI & Data Passionate",
  "DevOps Explorer",
  "Systems Security Curious",
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentTitleText = titles[currentTitle];
    const typingSpeed = 50; // ms per character
    const erasingSpeed = 30; // ms per character
    const pauseTime = 2000; // ms to pause before erasing

    let timeout: NodeJS.Timeout | undefined;

    if (!isErasing) {
      // Typing phase
      if (displayedText.length < currentTitleText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTitleText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before erasing
        timeout = setTimeout(() => {
          setIsErasing(true);
        }, pauseTime);
      }
    } else {
      // Erasing phase
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, erasingSpeed);
      } else {
        // Move to next title
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsErasing(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, currentTitle]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left side - Text content */}
        <div className="space-y-12">
          <div className="flex items-center gap-2 text-rose-600">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium uppercase tracking-wide">Welcome to my world</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Fatima
              </span>
            </h1>
            
            {/* Rotating titles */}
            <div className="h-24 relative overflow-hidden">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 min-h-[2.5rem] flex items-start">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
            Master's student in Software Systems Engineering, passionate about building{' '}
            <span className="text-rose-500 font-semibold">bold digital experiences</span> through 
            Full Stack development and smart AI integration. I believe great work speaks louder than words.
          </p>
          <div className="h-2"></div>

          <div className="flex items-center gap-3 text-base text-gray-600 ">
            <MapPin className="w-5 h-5 text-rose-500" />
            <span>Marrakech, Morocco</span>
          </div>
          
            <div className="h-6"></div>

          {/* CTA Buttons — slightly narrower, a bit taller */}
          <div className="flex flex-col md:flex-row md:flex-nowrap gap-6 pt-8 items-stretch md:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center
                      w-full md:w-auto md:min-w-[180px]
                      min-h-[50px] px-12 py-5
                      bg-gradient-to-r from-rose-500 to-purple-500
                      text-white text-lg font-semibold leading-none
                      rounded-full
                      hover:shadow-xl hover:scale-105
                      transition-all duration-300 whitespace-nowrap text-center"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center
                      w-full md:w-auto md:min-w-[180px]
                      min-h-[50px] px-12 py-5
                      bg-white text-gray-700
                      text-lg font-semibold leading-none
                      rounded-full border-2 border-gray-300
                      hover:border-rose-400 hover:shadow-lg hover:scale-105
                      transition-all duration-300 whitespace-nowrap text-center"
            >
              Get In Touch
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-3
                      w-full md:w-auto md:min-w-[200px]
                      min-h-[50px] px-10 py-5
                      bg-gradient-to-r from-purple-500 to-pink-500
                      text-white text-lg font-semibold leading-none
                      rounded-full
                      hover:shadow-xl hover:scale-105
                      transition-all duration-300 whitespace-nowrap text-center"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>

          <div className="h-3"></div>


          {/* Social links — increased vertical gap */}
          <div className="flex items-center gap-6 mt-20">
            <a
              href="https://github.com/Zohrae"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-rose-400 hover:to-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/fatima-lamssane-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-rose-400 hover:to-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:zahraelamssane@gmail.com"
              className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-rose-400 hover:to-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Decorative circles */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute inset-6 bg-gradient-to-br from-rose-300 to-purple-300 rounded-full opacity-25 animate-pulse delay-300"></div>
            
            {/* Profile image */}
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
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors duration-300 cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium tracking-wide">Scroll Down</span>
        <ArrowDown className="w-6 h-6 animate-bounce group-hover:text-rose-500" />
      </button>
    </section>
  );
};

export default Hero;
