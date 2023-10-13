"use client";
import React from "react";
import Wrapper from "../wrapper";
import { motion } from "framer-motion";
import CustomLink from "../UI/custom-link";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  FacebookIcon,
  SunIcon,
  MoonIcon,
} from "../icons";
import useThemeSwitcher from "@/app/hooks/useThemeSwitcher";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <Wrapper>
      <div className="flex items-center justify-between">
        {/* Left section of the navbar. */}
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        {/**
         * Right section of the navbar.
         * Social links
         */}
        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href="https://web.facebook.com/MohosinH99"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <FacebookIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Mohosin999"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href=""
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href=""
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <LinkedInIcon />
          </motion.a>

          {/* Theme switcher button */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-3 flex items-center justify-center rounded-full p-1"
          >
            {mode === "dark" ? (
              <SunIcon className="fill-gray-900" />
            ) : (
              <MoonIcon className="fill-gray-900" />
            )}
          </button>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
