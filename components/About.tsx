"use client";

import React from "react";
import { Sparkles, GraduationCap, Quote } from "lucide-react";

const education = [
  {
    year: "Ongoing",
    title: "Master's Degree in Software Systems Engineering",
    short: "MSc Software Systems Eng.",
    place: "Faculty of Sciences Semlalia — Marrakech",
  },
  {
    year: "Jun 2024",
    title: "Professional Bachelor's Degree in Information Systems & Networks",
    short: "Prof. Bachelor's — IS & Networks",
    place: "Higher School of Technology — Safi",
  },
  {
    year: "Jun 2023",
    title: "University Diploma of Technology",
    short: "University Diploma (Tech)",
    place: "Higher School of Technology — Safi",
  },
  {
    year: "Jul 2021",
    title: "Baccalaureate in Science",
    short: "Baccalaureate (Science)",
    place: "Najib Talib High School",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden py-28"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, rgba(251,207,232,0.3) 50%, rgba(251,182,206,0.5) 70%, rgba(236,72,153,0.3) 100%)'
      }}
    >
      {/* Smoky wave-like background overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-16 -top-28 w-[650px] h-[650px] rounded-full blur-[200px] bg-white/60 animate-pulse" />
        <div className="absolute right-0 top-24 w-[500px] h-[500px] rounded-full blur-[170px] bg-pink-100/85 animate-pulse delay-700" />
        <div className="absolute left-1/2 top-1/2 w-[780px] h-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[240px] bg-fuchsia-100/65" />
      </div>

      {/* KEEP the same centering logic */}
      <div className="relative z-10 px-6 sm:px-10 w-full flex flex-col items-center justify-center">

        {/* Title - Same colors as Hero */}
        <h2
          className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-12"
          style={{
            fontFamily: "Libre Baskerville, serif",
            letterSpacing: "0.06em",
          }}
        >
          What about{" "}
          <span className="text-[#3b1d2a]" style={{ textShadow: "0 4px 12px rgba(59,29,42,0.55)" }}>
            Me ?
          </span>
        </h2>

        <div className="h-5"></div>

        {/* Two-column area: LEFT = speech, RIGHT = vertical timeline - MORE GAP */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
          
          {/* LEFT - Quote/Saying - FULL WIDTH */}
          <div className="flex items-start w-full">
            <div className="relative w-full">
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-[#3b1d2a]/20 mb-6" />
              
              {/* Main text content - LARGER */}
              <div className="relative">
                <p className="text-gray-900 leading-relaxed text-lg sm:text-xl md:text-2xl italic">
                  I believe that we always can excel even if we don't choose what
                  to excel in, but as long as we choose to make it better — even
                  if we are not in our chosen path — we can still do great!
                  <br />
                  <br />
                  I always prefer to keep it <span className="font-bold text-[#3b1d2a] not-italic">creative, unexpected & unique</span>.
                  I don't like it easy, I don't like it casual! Bright & innovative
                  is my thing — and I know I slay at that so good!
                </p>
                
                {/* Blinking cursor */}
                <span className="inline-block w-2 h-6 bg-[#3b1d2a] animate-pulse ml-1"></span>
              </div>
            </div>
          </div>

          {/* Vertical centered alternating timeline with left/right split (full titles, tighter spacing) */}
          <div className="relative w-full flex justify-center" style={{ marginTop: '1.2rem' }}>
            {/* vertical line in the center */}
            <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700/40 to-transparent"></div>
            <div className="flex flex-col relative z-10 w-full max-w-xl gap-12">
              {education.map((item, idx) => (
                <div key={idx} className="relative flex items-start md:items-center">
                  {/* Three column layout: left | dot | right */}
                  {/* LEFT content for even items */}
                  <div className="hidden md:flex w-1/2 pr-4 justify-end">
                    {idx % 2 === 0 && (
                      <div className="text-right space-y-0.5">
                        <div className="text-xs text-gray-700 font-semibold">{item.year}</div>
                        <div className="text-sm md:text-base font-semibold text-gray-900">{item.title}</div>
                        <div className="text-xs text-gray-600">{item.place}</div>
                      </div>
                    )}
                  </div>
                  {/* CENTER: Dot */}
                  <div className="flex flex-col items-center relative z-10 w-8 mx-4">
                    <div className="w-8 h-8 rounded-full bg-[#3b1d2a] shadow-md flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  {/* RIGHT content for odd items */}
                  <div className="hidden md:flex w-1/2 pl-4 justify-start">
                    {idx % 2 === 1 && (
                      <div className="text-left space-y-0.5">
                        <div className="text-xs text-gray-700 font-semibold">{item.year}</div>
                        <div className="text-sm md:text-base font-semibold text-gray-900">{item.title}</div>
                        <div className="text-xs text-gray-600">{item.place}</div>
                      </div>
                    )}
                  </div>
                  {/* Mobile fallback: stacked below dot */}
                  <div className="md:hidden mt-4 w-full text-center space-y-0.5">
                    <div className="text-xs text-gray-700 font-semibold">{item.year}</div>
                    <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-600">{item.place}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;