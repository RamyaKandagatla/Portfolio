import React from "react";

const WordByWordText = () => {
  const text = 'Frontend  Developer'
  return (
    <div className="flex flex-wrap w-full break-words">
      {text.split("").map((char, index) => (
        <div
          key={index}
          className="break-words opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </div>
      ))}
    </div>
  );
};

export default WordByWordText;
