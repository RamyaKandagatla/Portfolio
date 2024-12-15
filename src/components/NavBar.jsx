import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setnav] = React.useState(false);

  const navLinks = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "about",
    },
    {
      id: 3,
      title: "projects",
    },
    {
      id: 3,
      title: "portfolio",
    },
    {
      id: 4,
      title: "skills",
    },
    {
      id: 5,
      title: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <h1 className="text-4xl font-signature">Ramya Kandagatla</h1>

      <ul className="hidden md:flex">
        {navLinks.map(({ id, title }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 capitalize"
          >
            <Link to={title} smooth duration={500}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navLinks.map(({ id, title }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl capitalize">
              <Link
                onClick={() => setnav(!nav)}
                to={title}
                smooth
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
