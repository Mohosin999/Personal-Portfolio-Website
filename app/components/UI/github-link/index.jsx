import React from "react";
import Link from "next/link";
import { GithubIcon } from "../../icons";

const GithubLink = ({ href, title, className }) => {
  return (
    <Link
      href={href}
      target="_blank"
      title={title}
      className={`w-10 md:w-6 hover:scale-105 active:scale-100 duration-300 text-gray-900 dark:text-gray-100 ${className}`}
    >
      <GithubIcon />
    </Link>
  );
};

export default GithubLink;
