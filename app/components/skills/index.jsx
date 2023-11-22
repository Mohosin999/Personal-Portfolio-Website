import React from "react";

/**
 * Skills component
 *
 * @returns {JSX.Element}
 */
const Skills = () => {
  const allSkills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Redux",
    "Node.js",
    "Express.js",
    "Strapi",
    "Git & GitHub",
  ];

  return (
    <>
      <h2 className="font-bold text-4xl lg:text-3xl sm:text-2xl mt-28 lg:mt-20 md:mt-16 w-full text-center text-gray-900 dark:text-gray-200">
        Skills
      </h2>

      <div className="w-full mt-8 lg:mt-6 flex flex-wrap justify-center items-center">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="text-lg lg:text-base xs:text-sm text-gray-900 dark:text-gray-300 mx-2 md:mx-1 my-2 md:my-1 border border-green-500 border-solid py-2 px-5 bg-gray-300 dark:bg-gray-800 rounded-full"
          >
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
