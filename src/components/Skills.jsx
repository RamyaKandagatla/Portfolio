import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css3.png";
import github from "../assets/github.png";
import javaScript from "../assets/js.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import python from "../assets/python.png";
import mysql from "../assets/mysql.jpeg";
import firebase from "../assets/firebase.png";
import awsS3 from "../assets/awsS3.png";

const categories = {
  Frontend: [
    { id: 1, src: html, title: "HTML", border: "border-orange-500" },
    { id: 2, src: css, title: "CSS", border: "border-blue-500" },
    {
      id: 3,
      src: javaScript,
      title: "JavaScript",
      border: "border-yellow-500",
    },
    { id: 4, src: typescript, title: "TypeScript", border: "border-blue-400" },
    { id: 5, src: reactImage, title: "React", border: "border-cyan-400" },
    { id: 6, src: tailwind, title: "Tailwind CSS", border: "border-cyan-500" },
  ],
  Backend: [
    { id: 7, src: mysql, title: "MySQL", border: "border-blue-800" },
    { id: 8, src: firebase, title: "Firebase", border: "border-orange-600" },
    { id: 9, src: awsS3, title: "AWS S3", border: "border-red-500" },
    { id: 10, src: python, title: "Python", border: "border-yellow-400" },
  ],
  Tools: [{ id: 11, src: github, title: "Github", border: "border-gray-400" }],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring" },
  }),
};

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full bg-gradient-to-b from-black to-gray-900 py-28 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-4xl font-bold inline text-[rgb(255,1,79)]">
            SKILLS
          </p>
          <div className="w-20 h-1 mt-2 bg-[rgb(255,1,79)] rounded-full" />
          <p className="text-gray-300 mt-4">Technologies I've worked with</p>
        </div>

        {/* Category-wise Skills */}
        {Object.entries(categories).map(([section, skills], sectionIndex) => (
          <div key={section} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
              {section}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`rounded-2xl border ${skill.border} p-5 backdrop-blur-sm bg-white/5
                    hover:scale-105 hover:shadow-[0_0_20px_2px_rgba(255,1,79,0.2)]
                    transition-transform duration-300`}
                >
                  <img
                    src={skill.src}
                    alt={`${skill.title} Logo`}
                    className="w-16 h-16 mx-auto object-contain"
                    loading="lazy"
                  />
                  <p className="mt-4 text-sm font-semibold text-center">
                    {skill.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
