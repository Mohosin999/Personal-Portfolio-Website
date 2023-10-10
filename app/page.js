import React from "react";
import Wrapper from "./components/wrapper";
import Image from "next/image";
import profilePic from "../public/images/akash.jpg";
import AnimatedText from "./components/animated-text";

const Home = () => {
  return (
    <Wrapper className="pt-0">
      <div class="flex items-center justify-between w-full">
        <div class="w-1/2">
          <Image src={profilePic} alt="profile-photo" class="w-3/4 h-auto" />
        </div>
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
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
