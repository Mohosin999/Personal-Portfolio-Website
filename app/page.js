import React from "react";
import Wrapper from "./components/wrapper";
import Image from "next/image";
import profilePic from "../public/images/akash.jpg";
import AnimatedText from "./components/animated-text";
import Link from "next/link";
import { LinkArrow } from "./components/icons";
import TransitionEffect from "./components/transition-effect";

const Home = () => {
  return (
    <Wrapper className="!pt-0">
      <TransitionEffect /> {/* It is use for loading time effect */}
      <div className="flex items-center justify-between w-full lg:flex-col">
        {/* Right side image */}
        <div className="w-1/2 md:w-full md:mb-4">
          <Image
            src={profilePic}
            alt="profile-photo"
            className="w-3/4 h-auto lg:hidden md:inline-block md:w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>

        {/* Left side title, text and buttons - start */}
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
          <AnimatedText
            text={"A passionate frontend web developer."}
            className="!text-left lg:!text-center"
          />

          <p className="my-4 text-base lg:text-sm text-gray-900 dark:text-gray-300">
            Front-end development, also known as client-side development,
            focuses on the visual and interactive elements of a website or web
            application. Front-end developers are responsible for creating the
            user interface (UI), ensuring that web pages are visually appealing,
            responsive, and user-friendly.
          </p>
          <p className="mt-2 mb-6 text-base lg:text-sm text-gray-900 dark:text-gray-300">
            Front-end development, also known as client-side development,
            focuses on the visual and interactive elements of a website or web
            application. Front-end developers are responsible for creating the
            user interface (UI), ensuring that web pages are visually appealing,
            responsive, and user-friendly.
          </p>

          {/* "Resume" and "Hire Me" buttons */}
          <div className="flex items-center self-start mt-2 lg:self-center">
            <Link
              href="/dummy.pdf"
              target="_blank"
              className="flex items-center bg-gray-900 text-gray-200 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 hover:text-gray-900 border-2 border-solid border-transparent animate-bounce hover:border-gray-900 md:p-2 md:px-4 md:text-base dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:hover:border-gray-200"
            >
              Resume <LinkArrow className="w-6 ml-1" />
            </Link>
            <Link
              href="/"
              className="flex items-center bg-gray-900 text-gray-200 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 hover:text-gray-900 border-2 border-solid border-transparent hover:border-gray-900 ml-4 md:p-2 md:px-4 md:text-base dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:hover:border-gray-200"
            >
              Hire Me
            </Link>
            {/* <Link
              href="mailto:mohosin.h.akash@gmail.com"
              target="_blank"
              className="ml-4 text-lg font-medium capitalize text-gray-900 underline"
            >
              Contact
            </Link> */}
          </div>
        </div>
        {/* Left side title, text and buttons - end */}
      </div>
    </Wrapper>
  );
};

export default Home;
