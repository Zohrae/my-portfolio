"use client";

import React, { useState } from "react";
import { Users, Languages, ChevronLeft, ChevronRight } from "lucide-react";

const skillsData = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Computer Vision", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    ],
  },
  {
    title: "Web & DevOps",
    items: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    ],
  },
];

const softSkills = ["Teamwork", "Leadership", "Communication", "Adaptability"];
const languages = ["Arabic (Native)", "English (Fluent)", "French (Fluent)", "Spanish (Beginner)"];

const SkillsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillsData.length) % skillsData.length);
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Animated Blurred Dot Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        {/* Large blurred orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-rose-300/40 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-300/40 rounded-full blur-[120px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-pink-300/30 rounded-full blur-[120px] animate-float-slow transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Small floating dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-rose-400/60 rounded-full blur-sm animate-float-dots"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2
            style={{ fontFamily: "Libre Baskerville, serif" }}
            className="text-5xl md:text-6xl font-bold text-[#3b1d2a] mb-4 drop-shadow-sm"
          >
            My Skills
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            A blend of technical expertise, creative thinking, and human-centered skills —
            shaped through projects, teamwork, and constant curiosity.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-20">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {skillsData.map((skill, i) => (
                <div key={i} className="min-w-full px-4">
                  <div className="backdrop-blur-2xl bg-white/60 border-2 border-white/60 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto hover:shadow-rose-200/50 transition-all duration-500 hover:scale-[1.02]">
                    <h3 className="text-3xl font-bold text-[#3b1d2a] mb-10 text-center">
                      {skill.title}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {skill.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-white/60 hover:border-rose-300 transition-all duration-300 hover:scale-110 hover:shadow-lg group animate-scale-in"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className="w-16 h-16 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <img
                              src={item.icon}
                              alt={item.name}
                              className="w-full h-full object-contain drop-shadow-md"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700 text-center">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-xl hover:bg-rose-100 transition-all duration-300 hover:scale-110 border border-rose-200"
          >
            <ChevronLeft className="w-6 h-6 text-[#3b1d2a]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-xl hover:bg-rose-100 transition-all duration-300 hover:scale-110 border border-rose-200"
          >
            <ChevronRight className="w-6 h-6 text-[#3b1d2a]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {skillsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentSlide
                    ? "w-12 h-3 bg-gradient-to-r from-rose-400 to-purple-400"
                    : "w-3 h-3 bg-gray-300 hover:bg-rose-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in-up">
          {/* Soft Skills */}
          <div className="backdrop-blur-2xl bg-white/60 border-2 border-white/60 rounded-3xl p-10 shadow-2xl hover:shadow-rose-200/50 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6 text-[#3b1d2a]">
              <Users className="w-7 h-7" />
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-gradient-to-r from-rose-200/80 to-purple-200/80 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/40 animate-bounce-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="backdrop-blur-2xl bg-white/60 border-2 border-white/60 rounded-3xl p-10 shadow-2xl hover:shadow-rose-200/50 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6 text-[#3b1d2a]">
              <Languages className="w-7 h-7" />
              <h3 className="text-2xl font-bold">Languages</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              {languages.map((lang, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-base animate-slide-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full shadow-sm"></span>
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 40px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(calc(-50% + 20px), calc(-50% - 20px)); }
        }
        
        @keyframes float-dots {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.5); }
          50% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-float-dots {
          animation: float-dots 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s backwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out backwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out backwards;
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out backwards;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;