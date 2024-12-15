import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-24"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-4">
          Highly skilled Software Engineer with almost 3 years of experience in
          frontend development, specializing in React.js. Proficient in data
          structures and algorithms, with a proven track record of successfully
          delivering features across multiple platforms and ensuring stable
          releases. Experienced in developing responsive websites and committed
          to excellence in problem-solving and communication. Possesses strong
          knowledge of React.js, JavaScript, and Webpack.
        </p>
        <br />
        <p className="text-xl">
          Spearheaded the development, deployment, and maintenance of the PD/PRV frontend module,
          taking full ownership of the process. Conducted thorough code reviews and implemented
          industry best practices to optimize performance and improve code quality
        </p>
      </div>
    </div>
  );
};

export default About;
