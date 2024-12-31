"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navlinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // Get the actual path
  const pathname = usePathname();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <ul className="w-full h-full flex items-center justify-center gap-6">
        {navlinks.map((link, index) => (
          <li
            key={index}
            className={`text-sm font-medium ${
              pathname === link.path ? "text-primarycolor" : "text-white"
            } hover:text-primarycolor transition-all ease-out duration-200`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Hire me button */}
      <a href="#">
        <button className="w-full text-sm bg-primarycolor px-6 py-2 rounded-2xl hover:opacity-85 transition-all ease-out duration-200 whitespace-nowrap ">
          Hire Me
        </button>
      </a>
    </div>
  );
};

export default Navbar;
