import React from "react";
import { motion } from "framer-motion";

const WordByWordText = () => {
  const text = "Frontend Developer";

  return (
    <motion.div
      className="flex flex-wrap w-full break-words"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // ensures animation only runs once
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="break-words text-white"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WordByWordText;
