import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-between">
        <div className="pb-4">
          <p className="text-4xl font-bold inline text-[rgb(255,1,79)]">
            ABOUT
          </p>
          <div className="w-20 h-1 mt-2 bg-[rgb(255,1,79)] rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-slate-300 bg-gradient-to-b from-gray-700 to-gray-900 text-md md:text-lg leading-relaxed shadow-md shadow-gray-600 rounded-lg p-10 mx-1 space-y-4"
        >
          <p>
            <strong>Software Engineer</strong> with nearly <strong>3 years</strong> of experience
            specializing in frontend development using <strong>React.js</strong>. Adept at building
            responsive user interfaces, optimizing performance, and ensuring high-quality releases
            across multiple platforms. Strong in data structures and algorithms, and recognized for
            delivering stable, well-tested features.
          </p>

          <p>
            Led the complete lifecycle of the <strong>PD/PRV frontend module</strong> — from development to
            deployment and maintenance. Conducted in-depth code reviews, enforced industry best
            practices, and continuously improved both code quality and application performance.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
