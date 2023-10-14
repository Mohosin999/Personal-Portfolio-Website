"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  // usePathname to track current location. ( '/' or '/about' or others )
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${className} relative group dark:text-gray-100`}
    >
      {title}
      {/* Underline below the link - start */}
      <span
        className={`h-[1px] bg-gray-900 inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
      {/* Underline below the link - end */}
    </Link>
  );
};

export default CustomLink;
