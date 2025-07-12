import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import foodDeliveryApp from "../assets/projects/foodDeliveryApp.png";
import weatherApp from "../assets/projects/weatherApp.png";

const Projects = () => {
  const portfolios = [
    // {
    //   id: 1,
    //   src: netflixgpt,
    //   demo: '',
    //   code: 'https://github.com/RamyaKandagatla/NetflixGPT'
    // },
    // {
    //   id: 2,
    //   src: netflixgpt,
    //   demo: '',
    //   code: ''
    // },
    {
      id: 3,
      src: foodDeliveryApp,
      title: "Food Delivery App",
      demo: "https://appforfooddelivery.netlify.app/",
      code: "https://github.com/RamyaKandagatla/Food-Delivery-App",
      alt: "Food Delivery App",
    },
    {
      id: 4,
      src: weatherApp,
      title: "Weather App",
      demo: "https://weatherappwithtoasts.netlify.app/",
      code: "https://github.com/RamyaKandagatla/weatherApp",
      alt: "Weather App",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-4">
          <p className="text-4xl font-bold inline text-[rgb(255,1,79)]">PROJECTS</p>
          <div className="w-20 h-1 mt-2 bg-[rgb(255,1,79)] rounded-full"></div>
          <p className="py-6 text-gray-300">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
          {portfolios.map(({ id, src, demo, code, alt, title }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: id * 0.1 }}
              className="shadow-md hover:shadow-lg shadow-gray-700 hover:shadow-pink-500/30 rounded-lg overflow-hidden duration-300"
            >
              <img
                src={src}
                alt={alt || `Project ${id}`}
                loading="lazy"
                className="rounded-md h-48 w-full object-cover duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-semibold text-white text-center mt-3 px-2">
                {title}
              </h3>
              <div className="flex items-center justify-center bg-gray-900 mt-3">
                <button
                  className="w-1/2 px-4 py-2 m-2 font-semibold flex items-center justify-center gap-2 text-white bg-[rgb(255,1,79)] rounded-md hover:bg-pink-600 hover:scale-105 duration-300"
                  onClick={() => window.open(demo, "_blank")}
                >
                  <FaExternalLinkAlt /> Demo
                </button>
                <button
                  className="w-1/2 px-4 py-2 m-2 font-semibold flex items-center justify-center gap-2 text-white bg-gray-700 rounded-md hover:bg-gray-600 hover:scale-105 duration-300"
                  onClick={() => window.open(code, "_blank")}
                >
                  <FaGithub /> Code
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
