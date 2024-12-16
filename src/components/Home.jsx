import React from "react";
import myPhoto from "../assets/myPhoto.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";


const Home = () => {

    const links = [
      {
        id: 1,
        child: (
          <>
            <FaLinkedin size={40} />
          </>
        ),
        href: "https://www.linkedin.com/in/ramyakandagatla/",
        style: "text-blue-600 hover:text-blue-800"
      },
      {
        id: 2,
        child: (
          <>
            <FaGithub size={40} />
          </>
        ),
        href: "https://github.com/RamyaKandagatla",
        style: "text-gray-400 hover:text-gray-300"
      },
      {
        id: 3,
        child: (
          <>
            <SiLeetcode size={40} />
          </>
        ),
        href: "https://leetcode.com/u/Kandagatla_Ramya/",
        style: "text-green-500 hover:text-green-700"
      },
      {
        id: 4,
        child: (
          <>
            <HiOutlineMail size={40} />
          </>
        ),
        href: "mailto:kandagatlaramya5@gmail.com",
        style: "text-yellow-600 hover:text-yellow-800"
      },
      {
        id: 5,
        child: (
          <>
            <BsFillPersonLinesFill size={40} />
          </>
        ),
        href: "/Ramya_Kandagatla_Resume.pdf",
        download: true,
        style: "text-red-500 hover:text-red-700"
      },
    ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-28"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Highly skilled Software Engineer with almost 3 years of experience
            in frontend development, specializing in React.js.
          </p>

          <div className="flex xl:hidden justify-start space-x-6 py-6">
            {links.map(({ id, child, href, download, style }) => (
              <a key={id} href={href} target="_blank" rel="noopener noreferrer" download={download} className={`duration-200 hover:scale-125 ${style}`}>
                {child}
              </a>
            ))}
          </div>

          {/* <div>
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
          </div> */}
        </div>

        <div>
          <img
            src={myPhoto}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
