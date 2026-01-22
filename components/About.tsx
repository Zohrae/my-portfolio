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
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, rgba(251,207,232,0.3) 50%, rgba(251,182,206,0.5) 70%, rgba(236,72,153,0.3) 100%)",
      }}
    >
      {/* Smoky wave-like background overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-16 -top-28 w-[650px] h-[650px] rounded-full blur-[200px] bg-white/60 animate-pulse" />
        <div className="absolute right-0 top-24 w-[500px] h-[500px] rounded-full blur-[170px] bg-pink-100/85 animate-pulse delay-700" />
        <div className="absolute left-1/2 top-1/2 w-[780px] h-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[240px] bg-fuchsia-100/65" />
      </div>
        <div className="h-4"></div>

      {/* KEEP the same centering logic */}
      <div className="relative z-10 px-6 sm:px-10 w-full flex flex-col items-center justify-center">
        {/* Title */}
        <h2
            className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-12"
            style={{
                fontFamily: "Freestyle Script, cursive",
                letterSpacing: "0.1em",
                textShadow: "0 4px 12px rgba(59,29,42,0.55)",
                color: "#3b1d2a"
            }}
            >
            What about Me ?
            </h2>

        <div className="h-5"></div>

        {/* Two-column area */}
        <div className="relative w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
         {/* 🌸 Wavy line ends flattened and fades early on left */}
        <div className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
            style={{
            position: "absolute",
            left: "50%",
            top: "4%",
            width: "420px",
            height: "820px",
            transform: "translateX(-50%) rotate(-8deg)",
            overflow: "visible",
            }}
        >
            <svg viewBox="0 0 420 820" width="100%" height="100%">
            <defs>
                {/* gradient fades faster on left before reaching half */}
            <linearGradient id="slantedWaveGrad" gradientUnits="userSpaceOnUse" x1="420" y1="0" x2="0" y2="820">
            {/* start soft → pink → smoky white → end soft */}
            <stop offset="0%"  stopColor="rgba(255,255,255,1)" stopOpacity="0.1" />   {/* soft, like ending */}
            <stop offset="10%" stopColor="rgba(245,150,200,1)" stopOpacity="0.3" />  {/* light pink appears */}
            <stop offset="35%" stopColor="rgba(245,150,200,1)" stopOpacity="0.6" /> {/* stronger pink */}
            <stop offset="60%" stopColor="rgba(255,255,255,1)" stopOpacity="0.4" />  {/* smoky white */}
            <stop offset="85%" stopColor="rgba(255,255,255,1)" stopOpacity="0.2" />  {/* soft fade near end */}
            <stop offset="100%" stopColor="rgba(255,255,255,1)" stopOpacity="0.1" /> {/* barely visible, soft */}
            </linearGradient>

                <filter id="softBlur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" />
                </filter>
            </defs>

            {/* path unchanged except the final segment becomes flat horizontal */}
            <path
                d={`
                M 300 10
                C 360 160, 140 260, 220 390
                C 300 520, 160 620, 120 660
                L  80 660  {/* flattened horizontal line, stops early left */}
                `}
                fill="none"
                stroke="url(#slantedWaveGrad)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.65"
                filter="url(#softBlur)"
            />
            </svg>
        </div>
        </div>

          {/* LEFT */}
          <div className="flex items-start w-full">
            <div className="relative w-full">
              <Quote className="w-12 h-12 text-[#3b1d2a]/20 mb-6" />

              <div className="relative">
                <p className="text-gray-900 leading-relaxed text-lg sm:text-xl md:text-2xl italic">
                  I believe that we always can excel even if we don't choose what
                  to excel in, but as long as we choose to make it better — even
                  if we are not in our chosen path — we can still do great!
                  <br />
                  <br />
                  I always prefer to keep it{" "}
                  <span className="font-bold text-[#3b1d2a] not-italic">
                    creative, unexpected & unique
                  </span>
                  . I don't like it easy, I don't like it casual! Bright &
                  innovative is my thing — and I know I slay at that so good!
                </p>

                <span className="inline-block w-2 h-6 bg-[#3b1d2a] animate-pulse ml-1"></span>
              </div>
            </div>
          </div>

          {/* RIGHT – TIMELINE */}
          <div
            className="relative w-full flex justify-center"
            style={{ marginTop: "1.2rem" }}
          >
            <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700/40 to-transparent"></div>

            <div className="flex flex-col relative z-10 w-full max-w-xl gap-12">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex items-start md:items-center"
                >
                  <div className="hidden md:flex w-1/2 pr-4 justify-end">
                    {idx % 2 === 0 && (
                      <div className="text-right space-y-0.5">
                        <div className="text-xs text-gray-700 font-semibold">
                          {item.year}
                        </div>
                        <div className="text-sm md:text-base font-semibold text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-600">
                          {item.place}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-center relative z-10 w-8 mx-4">
                    <div className="w-8 h-8 rounded-full bg-[#3b1d2a] shadow-md flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="hidden md:flex w-1/2 pl-4 justify-start">
                    {idx % 2 === 1 && (
                      <div className="text-left space-y-0.5">
                        <div className="text-xs text-gray-700 font-semibold">
                          {item.year}
                        </div>
                        <div className="text-sm md:text-base font-semibold text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-600">
                          {item.place}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:hidden mt-4 w-full text-center space-y-0.5">
                    <div className="text-xs text-gray-700 font-semibold">
                      {item.year}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.place}
                    </div>
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
