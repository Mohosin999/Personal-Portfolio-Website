"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/wrapper";
import AnimatedText from "../components/animated-text";
import { GithubIcon } from "../components/icons";
import featuredImage from "../../public/featured.png";
import { motion } from "framer-motion";

// Framer motion component
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-gray-900 bg-gray-200 shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      {/* The following div for 3d design - start */}
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-gray-900 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      {/* The following div for 3d design - end */}

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-purple-600 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-gray-900 sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-gray-900 text-gray-200 p-2 px-6 font-semibold text-lg sm:px-4 sm:text-base"
          >
            Visite Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, githubLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-gray-900 bg-gray-200 p-6 relative xs:p-4">
      {/* The following div for 3d design - start */}
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-gray-900 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      {/* The following div for 3d design - end */}
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-purple-600 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        {/* Github link and visit link here */}
        <div className="mt-2 w-full flex items-center justify-between">
          <Link href={githubLink} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-gray-900 text-gray-200 p-2 px-4 font-semibold text-base md:text-sm"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Wrapper>
        <AnimatedText
          text="This is project portion"
          className="lg:!text-7xl sm:!text-6xl xs:text-4xl"
        />

        <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          {/* Featured projet */}
          <div className="col-span-12">
            <FeaturedProject
              title="ShoeStore eCommerce Project"
              summary="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod rerum quidem odio perferendis inventore ex ipsum minus esse provident iure."
              img={featuredImage}
              link="/"
              githubLink="/"
              type="Featured Project"
            />
          </div>

          {/* Other projects */}
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="ShoeStore eCommerce Project"
              img={featuredImage}
              link="/"
              githubLink="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="ShoeStore eCommerce Project"
              img={featuredImage}
              link="/"
              githubLink="/"
              type="Featured Project"
            />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default Projects;
