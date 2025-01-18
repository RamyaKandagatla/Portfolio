import React from "react";
import netflixgpt from "../assets/projects/netflixgpt.png";
import foodDeliveryApp from '../assets/projects/foodDeliveryApp.png';
import weatherApp from '../assets/projects/weatherApp.png';

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
      demo: 'https://appforfooddelivery.netlify.app/',
      code: 'https://github.com/RamyaKandagatla/Food-Delivery-App'
    },
    {
      id: 4,
      src: weatherApp,
      demo: 'https://weatherappwithtoasts.netlify.app/',
      code: 'https://github.com/RamyaKandagatla/weatherApp'
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-[rgb(255,1,79)] opacity-100">
            PROJECTS
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md h-48 w-full object-cover duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>window.open(demo, "_blank")}>Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>window.open(code, "_blank")}>
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
