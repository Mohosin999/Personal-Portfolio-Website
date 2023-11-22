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
        <p className="mt-8 lg:mt-6 text-base text-gray-900 dark:text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit neque tenetur ex rerum ratione ullam accusantium
          consequuntur aspernatur excepturi! Blanditiis itaque corporis
          reiciendis minima laboriosam nobis similique, quisquam laborum quos
          porro inventore, delectus iste. Dolor ullam adipisci praesentium
          repudiandae explicabo reprehenderit aperiam quasi, molestias id
          suscipit! Dolor veniam ducimus dolorem.
        </p>
      </motion.div>
    </div>
  );
};

export default Education;
