import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/wrapper";
import AnimatedText from "../components/animated-text";
import { GithubIcon } from "../components/icons";
import featuredImage from "../../public/featured.png";

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-gray-900 bg-gray-200 shadow-2xl p-12 relative">
      {/* The following div for 3d design - start */}
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-gray-900" />
      {/* The following div for 3d design - end */}

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-purple-600 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-gray-900">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-gray-900 text-gray-200 p-2 px-6 font-semibold text-lg"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-gray-900 bg-gray-200 p-6 relative">
      {/* The following div for 3d design - start */}
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-gray-900" />
      {/* The following div for 3d design - end */}
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-purple-600 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        {/* Github link and visit link here */}
        <div className="mt-2 w-full flex items-center justify-between">
          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-gray-900 text-gray-200 p-2 px-4 font-semibold text-base"
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
        <AnimatedText text="This is project portion" />

        <div className="grid grid-cols-12 gap-24 mt-16">
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
          <div className="col-span-6">
            <Project
              title="ShoeStore eCommerce Project"
              img={featuredImage}
              link="/"
              githubLink="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
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
