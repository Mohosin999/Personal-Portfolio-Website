import React from "react";
import Image from "next/image";
import myImage from "../../public/images/akash.jpg";
// Components
import AnimatedText from "../components/animated-text";
import Wrapper from "../components/wrapper";
import AnimatedNumber from "../components/animated-number";
import Skills from "../components/skills";
import Experience from "../components/experience";
import TransitionEffect from "../components/transition-effect";

const About = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full">
        <TransitionEffect /> {/* It is use for loading time effect */}
        <Wrapper className="!pt-0">
          {/* Title of the about page. */}
          <AnimatedText
            text="Details Information About Me"
            className="mb-14 lg:mb-10 md:mb-6"
          />

          <div className="grid grid-cols-8 gap-16 sm:gap-8 w-full">
            {/*
             * =====================
             * Left side - start
             * =====================
             */}
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 font-bold text-lg uppercase text-gray-900/75 dark:text-gray-200/75">
                Biography
              </h2>
              <p className="text-base lg:text-sm text-gray-900 dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit odio in mollitia quo velit adipisci eveniet, nobis
                architecto magni dignissimos.
              </p>
              <p className="text-base lg:text-sm text-gray-900 dark:text-gray-300 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate porro repellendus asperiores voluptatum aut et ducimus
                pariatur cumque dolores debitis laudantium molestiae provident,
                possimus assumenda velit deleniti quis suscipit enim aspernatur
                molestias quae labore! Neque at optio eaque saepe recusandae.
              </p>
              <p className="text-base lg:text-sm text-gray-900 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                deserunt tempore voluptatem earum iure mollitia ipsam rerum eius
                id? Fuga dolorem tempora aperiam, saepe est mollitia nihil
                fugiat omnis ut!
              </p>
            </div>
            {/* Left side - end */}

            {/*
             * =====================
             * Middle side - start
             * =====================
             */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-gray-900 bg-gray-200 p-8 xl:col-span-4 md:order-1 md:col-span-8 dark:border-gray-200 dark:bg-gray-800">
              {/* The following div for 3d style of the Image - start */}
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-gray-900 dark:bg-gray-200" />
              {/* The following div for 3d style of the Image - end */}
              <Image
                src={myImage}
                alt="Profile-image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Middle side - end */}

            {/*
             * =====================
             * Right side - start
             * =====================
             */}
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-gray-900/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block">
                  <AnimatedNumber value={20} />
                </span>
                <h2 className="text-xl font-medium capitalize text-gray-900/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-4xl lg:text-3xl sm:text-2xl">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-gray-900/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
            {/* Right side - end */}
          </div>

          {/* Skills section */}
          <Skills />
          <Experience />
          <h2 className="mt-16 text-8xl font-bold">Education</h2>
        </Wrapper>
      </main>
    </>
  );
};

export default About;
