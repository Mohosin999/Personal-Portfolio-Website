'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/wrapper";
import AnimatedText from "../components/animated-text";
import articleImg from "../../public/featured.png";
import { motion } from "framer-motion";

// Framer motion component
const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-gray-100 border border-solid border-gray-900 rounded-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="text-2xl capitalize font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-yellow-700 font-semibold">{time}</span>
    </li>
  );
};

const Articles = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
      <Wrapper>
        <AnimatedText text="All of my articles shown here" className="mb-16" />
        <ul className="grid grid-cols-2 gap-16">
          <FeaturedArticle
            title="Next.js 13 - New Version for You"
            link="/"
            time="7 min to read"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, expedita ipsa. Dolor ratione, culpa assumenda debitis in error. Architecto, sit?"
            img={articleImg}
          />
          <FeaturedArticle
            title="Next.js 13 - New Version for You"
            link="/"
            time="7 min to read"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, expedita ipsa. Dolor ratione, culpa assumenda debitis in error. Architecto, sit?"
            img={articleImg}
          />
        </ul>
      </Wrapper>
    </main>
  );
};

export default Articles;
