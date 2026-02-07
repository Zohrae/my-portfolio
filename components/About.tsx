"use client";
import React from "react";
import { Sparkles, GraduationCap, Quote } from "lucide-react";

const education = [
  {
    year: "Ongoing",
    title: "Master's Degree in Software Systems Engineering",
    short: "MSc Software Systems Eng.",
    place: "FS — Marrakech",
  },
  {
    year: "Jun 2024",
    title: "Professional Bachelor's Degree in Information Systems & Networks",
    short: "Prof. Bachelor's — IS & Networks",
    place: "EST — Safi",
  },
  {
    year: "Jun 2023",
    title: "University Diploma of Technology",
    short: "University Diploma (Tech)",
    place: "EST — Safi",
  },
  {
    year: "Jul 2021",
    title: "Baccalaureate in Science",
    short: "Baccalaureate (Science)",
    place: "Najib Mahfoud — Safi",
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
              <linearGradient id="slantedWaveGrad" gradientUnits="userSpaceOnUse" x1="420" y1="0" x2="0" y2="820">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" stopOpacity="0.08" />
                <stop offset="10%" stopColor="rgba(244,114,182,1)" stopOpacity="0.35" />
                <stop offset="35%" stopColor="rgba(244,114,182,1)" stopOpacity="0.65" />
                <stop offset="60%" stopColor="rgba(255,255,255,1)" stopOpacity="0.35" />
                <stop offset="85%" stopColor="rgba(255,255,255,1)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="rgba(255,255,255,1)" stopOpacity="0.08" />
              </linearGradient>

              <filter id="softBlur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            <path
              d={`
                M 300 10
                C 360 160, 140 260, 220 390
                C 300 520, 160 620, 120 660
                L 80 660
              `}
              fill="none"
              stroke="url(#slantedWaveGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#softBlur)"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur="5s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

        </div>
        </div>

          {/* LEFT */}
          <div className="flex items-start w-full">
            <div className="relative w-full">
              <Quote className="w-12 h-12 text-[#3b1d2a]/20 mb-6" />

              <div className="relative">
              <p className="text-gray-900 leading-relaxed text-base sm:text-lg md:text-lg italic">
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
                    <br />
                <p className="mt-6 text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl italic">
                It has never been simple. I never received anything the easy way. 
                Yet, I cherish every sorrow I went through, because it shaped my strength 
                and taught me how to face whatever comes next with courage and grace.
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
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700/40 to-transparent left-1/2 transform -translate-x-1/2"></div>

              <div className="flex flex-col relative z-10 w-full max-w-xl gap-12">
                {education.map((item, idx) => (
                  <div key={idx} className="relative flex items-start md:items-center">

                    {/* LEFT TITLES */}
                    <div
                      className="hidden md:flex w-1/2 justify-end"
                      style={{ marginRight: "2.5rem" }} // espace subtil pour tous les titres à gauche
                    >
                      {idx % 2 === 0 && (
                        <div className="text-right space-y-0.5">
                          <div className="text-xs text-gray-700 font-semibold">{item.year}</div>
                          <div className="text-sm md:text-base font-semibold text-gray-900">{item.title}</div>
                          <div className="text-xs text-gray-600">{item.place}</div>
                        </div>
                      )}
                    </div>

                    {/* CENTER DOT */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div className="w-8 h-8 rounded-full bg-[#3b1d2a] shadow-md flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-white" />
                        </div>
                      </div>


                    {/* RIGHT TITLES */}
                    <div
                      className="hidden md:flex w-1/2 justify-start"
                      style={{ marginLeft: "0.2rem" }} // espace subtil pour tous les titres à droite
                    >
                      {idx % 2 === 1 && (
                        <div className="text-left space-y-0.5">
                          <div className="text-xs text-gray-700 font-semibold">{item.year}</div>
                          <div className="text-sm md:text-base font-semibold text-gray-900">{item.title}</div>
                          <div className="text-xs text-gray-600">{item.place}</div>
                        </div>
                      )}
                    </div>

                    {/* MOBILE */}
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
