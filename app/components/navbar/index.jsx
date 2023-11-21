"use client";
import React, { useState } from "react";
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
import CustomMobileLink from "../UI/custom-mobile-link";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  // Function for click handle
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper className="!py-8">
      <div className="flex items-center justify-between relative">
        {/* Toogle button of Navbar (Hamburger Menu) - start */}
        <button
          className="hidden lg:flex flex-col items-center justify-center"
          onClick={handleClick}
        >
          <span
            className={`bg-gray-900 dark:bg-gray-100 transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-gray-900 dark:bg-gray-100 transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-gray-900 dark:bg-gray-100 transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        {/* Toogle button of Navbar (Emburger Menu) - end */}

        {/* In 'lg' screen, this div will stay hidden */}
        <div className="w-full flex items-center justify-between lg:hidden">
          {/* Left section of the navbar. */}
          <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="/projects" title="Projects" className="mx-4" />
            {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
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

        {/*
         * ==========================================================================
         * Mobile menu
         * ==========================================================================
         */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col z-30 items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900/90 dark:bg-gray-100/75 rounded-lg backdrop-blur-md py-32"
          >
            {/* Left section of the navbar. */}
            <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className=""
                toggle={handleClick}
              />
              {/* <CustomMobileLink
                href="/articles"
                title="Articles"
                className=""
                toggle={handleClick}
              /> */}
            </nav>

            {/**
             * Right section of the navbar.
             * Social links
             */}
            <nav className="flex flex-wrap items-center justify-center mt-2">
              <motion.a
                href="https://web.facebook.com/MohosinH99"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 sm:mx-1"
              >
                <FacebookIcon />
              </motion.a>
              <motion.a
                href="https://github.com/Mohosin999"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 bg-gray-200 dark:bg-gray-900 dark:text-gray-200  sm:mx-1 rounded-full"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href=""
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href=""
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 ml-3 sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>

              {/* Theme switcher button */}
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className="ml-3 flex items-center justify-center rounded-full p-1"
              >
                {mode === "dark" ? (
                  <SunIcon className="fill-gray-900 bg-gray-200 rounded-full p-1" />
                ) : (
                  <MoonIcon className="fill-gray-900 bg-gray-200 rounded-full p-1" />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Navbar;
