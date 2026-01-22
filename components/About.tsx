"use client";

import React from "react";
import { Sparkles, GraduationCap } from "lucide-react";

const education = [
  {
    year: "Ongoing",
    title: "Master's Degree in Software Systems Engineering",
    place: "Faculty of Sciences Semlalia — Marrakech, Morocco",
  },
  {
    year: "June 2024",
    title: "Professional Bachelor's Degree in Information Systems & Networks",
    place: "Higher School of Technology — Safi, Morocco",
  },
  {
    year: "June 2023",
    title: "University Diploma of Technology",
    place: "Higher School of Technology — Safi, Morocco",
  },
  {
    year: "July 2021",
    title: "Baccalaureate in Science",
    place: "Najib Talib High School",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100 py-24 sm:py-32"
    >
      {/* Soft background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-300/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[420px] h-[420px] bg-pink-300/20 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-300/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-6 text-rose-500">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="tracking-widest uppercase text-sm font-medium">
            About Me
          </span>
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>

        {/* Title */}
        <h2
          className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-16"
          style={{ fontFamily: "Libre Baskerville, serif" }}
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
            Journey
          </span>
        </h2>

        {/* Profile paragraph - AVANT LA TIMELINE */}
        <div className="max-w-4xl mx-auto text-center text-gray-800 leading-relaxed text-base sm:text-lg mb-20">
          <p>
            Master's student in{" "}
            <span className="text-rose-600 font-semibold">
              Software Systems Engineering
            </span>{" "}
            seeking a Final Year Internship, passionate about building bold
            digital experiences through{" "}
            <span className="text-pink-600 font-semibold">
              Full Stack development
            </span>{" "}
            and smart AI integration.
          </p>

          <p className="mt-6 italic text-gray-600">
            I believe great work speaks louder than words — my projects tell the
            story, blending creativity, reliability, and innovation from frontend
            to backend.
          </p>
        </div>

        {/* Timeline - APRÈS LE PARAGRAPHE */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-rose-400/60 via-pink-400/40 to-transparent" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative pl-16">
                {/* Dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 shadow-[0_0_25px_rgba(244,114,182,0.6)] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>

                <span className="text-sm text-rose-600 tracking-wide font-medium">
                  {item.year}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  {item.place}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;