import React from "react";
import Wrapper from "./components/wrapper";
import Image from "next/image";
import profilePic from "../public/images/akash.jpg";

const Home = () => {
  return (
    <Wrapper className="pt-0">
      <div class="flex items-center justify-between w-full">
        <div class="w-1/2">
          <Image src={profilePic} alt="profile-photo" class="w-full h-auto" />
        </div>
        <div class="w-1/2">
          <h1>A passionate web application developer</h1>
          <p>
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
