"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="my-24">
      <h2 className="font-bold text-8xl mb-16 w-full text-center">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative">
        <motion.div
          className="w-[60%] mx-auto flex flex-col items-center justify-between"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit neque tenetur ex rerum ratione ullam accusantium
            consequuntur aspernatur excepturi! Blanditiis itaque corporis
            reiciendis minima laboriosam nobis similique, quisquam laborum quos
            porro inventore, delectus iste. Dolor ullam adipisci praesentium
            repudiandae explicabo reprehenderit aperiam quasi, molestias id
            suscipit! Dolor veniam ducimus dolorem.
          </p>
          &nbsp;
          <p className="">
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
    </div>
  );
};

export default Experience;
