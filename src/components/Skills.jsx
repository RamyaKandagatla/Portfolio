import React from "react";
import html from "../assets/html.png";
import css from "../assets/css3.png";
import github from "../assets/github.png";
import javaScript from "../assets/js.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from '../assets/typescript.png';
import python from '../assets/python.png';
import mysql from '../assets/mysql.jpeg';
import firebase from '../assets/firebase.png';
import awsS3 from '../assets/awsS3.png';

const Skills = () => {
  const techStacks = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-800",
    },
    {
      id: 9,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-700",
    },
    {
      id: 10,
      src: awsS3,
      title: "AWS S3",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    }
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full py-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <div>
          <p className="text-4xl font-bold text-[rgb(255,1,79)] opacity-100 p-2 inline">
            SKILLS
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techStacks.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 sm:w-16 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
