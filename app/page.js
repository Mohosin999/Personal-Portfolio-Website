import React from "react";
import Wrapper from "./components/wrapper";
import Image from "next/image";
import profilePic from "../public/images/akash.jpg";
import AnimatedText from "./components/animated-text";
import Link from "next/link";
import { LinkArrow } from "./components/icons";

const Home = () => {
  return (
    <Wrapper className="pt-0">
      <div class="flex items-center justify-between w-full">
        {/* Right side image */}
        <div class="w-1/2">
          <Image src={profilePic} alt="profile-photo" class="w-3/4 h-auto" />
        </div>
        {/* Left side title, text and buttons - start */}
        <div class="w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            text={"A passionate frontend web developer."}
            className="!text-6xl !text-left"
          />
          <p class="my-4 text-base font-medium">
            Front-end development, also known as client-side development,
            focuses on the visual and interactive elements of a website or web
            application. Front-end developers are responsible for creating the
            user interface (UI), ensuring that web pages are visually appealing,
            responsive, and user-friendly.
          </p>
          <div class="flex items-center self-start mt-2">
            <Link
              href="/dummy.pdf"
              target="_blank"
              class="flex items-center bg-gray-900 text-gray-200 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 hover:text-gray-900 border-2 border-solid border-transparent hover:border-gray-900"
            >
              Resume <LinkArrow class="w-6 ml-1" />
            </Link>
            <Link
              href="mailto:mohosin.h.akash@gmail.com"
              target="_blank"
              class="ml-4 text-lg font-medium capitalize text-gray-900 underline"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Left side title, text and buttons - end */}
      </div>
    </Wrapper>
  );
};

export default Home;
