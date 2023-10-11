import React from "react";
import AnimatedText from "../animated-text";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-28 w-full text-center">Skills</h2>
      {/* <div className="w-full h-screen relative flex items-center justify-center rounded-full"></div> */}
      <div className="flex flex-col items-center justify-center">
        <AnimatedText text="JavaScript" className="text-4xl" />
        <AnimatedText text="React JS" className="text-4xl" />
        <AnimatedText text="Next JS" className="text-4xl" />
      </div>
    </>
  );
};

export default Skills;
