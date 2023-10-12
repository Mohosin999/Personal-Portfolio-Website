"use client";
import React from "react";
import { motion } from "framer-motion";

// This reusable component for slide all skills
const SkillSlider = ({ skillsProp, initialX }) => {
  return (
    <ul>
      {skillsProp.map((item, index) => (
        <motion.li
          key={index}
          initial={{ x: initialX }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="text-2xl"
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
};

const Skills = () => {
  const leftSkills = ["JavaScript", "React.js", "Next.js", "Redux"];
  const rightSkills = ["Node.js", "Express.js", "Strapi", "Git & GitHub"];
  return (
    <>
      <h2 className="font-bold text-8xl mt-28 w-full text-center">Skills</h2>
      {/* <div className="w-full h-screen relative flex items-center justify-center rounded-full"></div> */}
      <div className="w-[50%] mx-auto mt-16 flex items-center justify-between">
        <div>
          <SkillSlider skillsProp={leftSkills} initialX={-400} />
        </div>
        <div>
          <SkillSlider skillsProp={rightSkills} initialX={400} />
        </div>
      </div>
    </>
  );
};

export default Skills;
