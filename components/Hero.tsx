"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, MapPin } from 'lucide-react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Text content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-rose-600">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium uppercase tracking-wide">Welcome to my world</span>
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Fatima</span>
            </h1>
            
            {/* Rotating titles */}
            <div className="h-16 relative overflow-hidden">
              {titles.map((title, index) => (
                <h2
                  key={title}
                  className={`absolute w-full text-2xl md:text-3xl font-semibold text-gray-700 transition-all duration-700 ${
                    index === currentTitle
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                >
                  {title}
                </h2>
              ))}
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Master's student in Software Systems Engineering, passionate about building <span className="text-rose-500 font-medium">bold digital experiences</span> through Full Stack development and smart AI integration. I believe great work speaks louder than words.
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-rose-500" />
            <span>Marrakech, Morocco</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-200 hover:border-rose-300 hover:shadow-md transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/Zohrae"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-rose-400 hover:to-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/fatima-lamssane-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-rose-400 hover:to-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:zahraelamssane@gmail.com"
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-rose-400 hover:to-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Decorative circles */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-rose-300 to-purple-300 rounded-full opacity-30 animate-pulse delay-300"></div>
            
            {/* Profile image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/img/me.jpg"
                alt="Fatima LAMSSANE"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-6 py-3 animate-bounce-slow">
              <p className="text-sm font-semibold text-gray-700">Available for</p>
              <p className="text-lg font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">Internship</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors duration-300 cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;