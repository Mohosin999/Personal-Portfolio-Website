"use client";
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="">
      <h2 className="font-bold text-4xl lg:text-3xl sm:text-2xl mt-28 lg:mt-20 md:mt-16 w-full text-center text-gray-900 dark:text-gray-200">
        Education
      </h2>

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full"
      >
        <p className="mt-8 lg:mt-6 text-lg lg:text-base xs:text-sm text-gray-900 dark:text-gray-300">
          I droped out from my honors course with my decision. Because I want to
          do a large things that college cannot teach me.
        </p>
      </motion.div>
    </div>
  );
};

export default Education;
