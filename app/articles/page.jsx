"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/wrapper";
import AnimatedText from "../components/animated-text";
import articleImg from "../../public/featured.png";
import { motion, useMotionValue } from "framer-motion";

// Framer motion component
const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-gray-100 border border-solid border-gray-900 rounded-2xl relative">
      {/* The following div for 3d design - start */}
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-gray-900" />
      {/* The following div for 3d design - end */}
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
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="text-2xl capitalize font-bold my-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-yellow-700 font-semibold">{time}</span>
    </li>
  );
};

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto z-10 absolute hidden rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ title, link, img, date }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-gray-100 text-gray-900 first:mt-0 border border-solid border-gray-900 border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-yellow-800 font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const Articles = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
      <Wrapper>
        <AnimatedText
          text="All of my articles shown here"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl"
        />
        <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
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

        {/* All articles list */}
        <h2 className="w-full font-bold text-4xl text-center my-16 mt-32">
          All Articles
        </h2>
        <ul>
          <Article
            title="JS All You Need to Know"
            link="/"
            date="January 14, 2022"
            img={articleImg}
          />
          <Article
            title="JS All You Need to Know"
            link="/"
            date="January 14, 2022"
            img={articleImg}
          />
          <Article
            title="JS All You Need to Know"
            link="/"
            date="January 14, 2022"
            img={articleImg}
          />
          <Article
            title="JS All You Need to Know"
            link="/"
            date="January 14, 2022"
            img={articleImg}
          />
          <Article
            title="JS All You Need to Know"
            link="/"
            date="January 14, 2022"
            img={articleImg}
          />
          <Article
            title="JS All You Need to Know"
            link="/"
            date="January 14, 2022"
            img={articleImg}
          />
        </ul>
      </Wrapper>
    </main>
  );
};

export default Articles;
