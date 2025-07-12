import React from "react";
import myPhoto from "../assets/myPhoto.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import WordByWordText from "./WordByWordText";
import { motion } from "framer-motion";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ramyakandagatla/",
      style: "text-blue-600 hover:text-blue-800",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/RamyaKandagatla",
      style: "text-gray-400 hover:text-gray-300",
    },
    {
      id: 3,
      child: (
        <>
          <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/u/Kandagatla_Ramya/",
      style: "text-green-500 hover:text-green-700",
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kandagatlaramya5@gmail.com",
      style: "text-yellow-600 hover:text-yellow-800",
    },
    {
      id: 5,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Ramya_Kandagatla_Resume.pdf",
      download: true,
      style: "text-red-500 hover:text-red-700",
    },
  ];

  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 py-28"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6 text-left">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-[rgb(255,1,79)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ramya Kandagatla
            </motion.h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            <WordByWordText />
          </h2>

          {/* Social Links */}
          <div className="flex xl:hidden justify-start space-x-6 pt-4">
            {links.map(({ id, child, href, download, style }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                download={download}
                className={`duration-300 hover:scale-125 ${style}`}
              >
                {child}
              </a>
            ))}
          </div>

          {/* CTA Button (Kept as is - commented) */}
          {/* 
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div> 
          */}
        </div>

        {/* Profile Image */}
        <div className="mb-10 md:mb-0 md:ml-10">
        <motion.img
  src={myPhoto}
  alt="profile"
  className="rounded-full w-60 h-60 sm:w-72 sm:h-72 object-cover shadow-lg"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
/>
        </div>
      </div>
    </div>
  );
};

export default Home;
