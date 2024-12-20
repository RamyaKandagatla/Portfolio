import React from "react";
import netflixgpt from "../assets/projects/netflixgpt.png";
import foodDeliveryApp from '../assets/projects/foodDeliveryApp.png';

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: netflixgpt,
    },
    {
      id: 2,
      src: netflixgpt,
    },
    {
      id: 3,
      src: foodDeliveryApp,
    },
    {
      id: 4,
      src: netflixgpt,
    },
    {
      id: 5,
      src: foodDeliveryApp,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen py-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button>Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
