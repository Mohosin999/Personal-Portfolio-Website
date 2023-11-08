"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  // usePathname to track current location. ( '/' or '/about' or others )
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      onClick={handleClick}
      className={`${className} relative group dark:text-gray-900 text-gray-200 my-2`}
    >
      {title}
      {/* Underline below the link - start */}
      <span
        className={`h-[1px] bg-gray-200 dark:bg-gray-900 inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
      {/* Underline below the link - end */}
    </button>
  );
};

export default CustomMobileLink;
