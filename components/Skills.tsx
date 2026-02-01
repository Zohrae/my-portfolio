"use client";

import React from "react";

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

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* MAIN TITLE (centered at top) */}
      <div className="flex flex-col items-center justify-center text-center mb-16 px-6">
        <h2
          style={{ fontFamily: "Libre Baskerville, serif" }}
          className="text-5xl font-bold text-[#3b1d2a]"
        >
          My Skills
        </h2>
      </div>

      {/* SKILL GROUPS */}
      <div className="px-8 space-y-24">
        {skillsData.map((group, idx) => (
          <div key={idx} className="w-full">
            {/* Category Title LEFT */}
            <h3
              style={{ fontFamily: "Pacifico, cursive" }}
              className="text-left text-xl md:text-2xl text-[#3b1d2a] mb-6"
            >
              {group.title}
            </h3>

            {/* Icons ROW (static) */}
            <div className="flex flex-wrap gap-8">
              {group.items.map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center space-y-2 w-24">
                  <img src={item.icon} alt={item.name} className="w-14 h-14 object-contain" />
                  <span className="text-sm text-gray-800 text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
