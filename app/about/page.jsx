import React from "react";
import Image from "next/image";
import AnimatedText from "../components/animated-text";
import Wrapper from "../components/wrapper";
import myImage from "../../public/images/akash.jpg";
import AnimatedNumber from "../components/animated-number";

const About = () => {
  return (
    <>
      <main class="flex flex-col items-center justify-center w-full">
        <Wrapper>
          <AnimatedText text="Passion Fuel Perpose!" className="mb-16" />
          <div class="grid grid-cols-8 gap-16 w-full">
            {/* Left side - start */}
            <div class="col-span-3 flex flex-col items-start justify-start">
              <h2 class="mb-4 font-bold text-lg uppercase text-gray-900/75">
                Biography
              </h2>
              <p class="font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit odio in mollitia quo velit adipisci eveniet, nobis
                architecto magni dignissimos.
              </p>
              <p class="font-medium my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate porro repellendus asperiores voluptatum aut et ducimus
                pariatur cumque dolores debitis laudantium molestiae provident,
                possimus assumenda velit deleniti quis suscipit enim aspernatur
                molestias quae labore! Neque at optio eaque saepe recusandae.
              </p>
              <p class="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                deserunt tempore voluptatem earum iure mollitia ipsam rerum eius
                id? Fuga dolorem tempora aperiam, saepe est mollitia nihil
                fugiat omnis ut!
              </p>
            </div>
            {/* Left side - end */}

            {/* Middle side - start */}
            <div class="col-span-3 relative h-max rounded-2xl border-2 border-solid border-gray-900 bg-gray-200 p-8">
              {/* The following div for 3d style of the Image - start */}
              <div class="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-gray-900" />
              {/* The following div for 3d style of the Image - end */}
              <Image
                src={myImage}
                alt="Profile-image"
                class="w-full h-auto rounded-2xl"
              />
            </div>
            {/* Middle side - end */}

            {/* Right side - start */}
            <div class="col-span-2 flex flex-col items-end justify-between">
              <div class="flex flex-col items-end justify-center">
                <span class="inline-block text-7xl font-bold">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 class="text-xl font-medium capitalize text-gray-900/75">
                  satisfied clients
                </h2>
              </div>

              <div class="flex flex-col items-end justify-center">
                <span class="inline-block text-7xl font-bold">
                  <AnimatedNumber value={20} />+
                </span>
                <h2 class="text-xl font-medium capitalize text-gray-900/75">
                  projects completed
                </h2>
              </div>

              <div class="flex flex-col items-end justify-center">
                <span class="inline-block text-7xl font-bold">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 class="text-xl font-medium capitalize text-gray-900/75">
                  years of experience
                </h2>
              </div>
            </div>
            {/* Right side - end */}
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default About;
