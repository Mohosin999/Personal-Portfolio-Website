import React from "react";
import Wrapper from "../wrapper";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-gray-800 dark:border-gray-300 font-medium">
      <Wrapper className="flex items-center justify-between md:flex-col !py-8 md:py-6">
        <span className="text-lg lg:text-sm text-gray-900 dark:text-gray-300">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>

        <div className="lg:py-2">
          <p className="text-2xl lg:text-lg capitalize mb-2 text-gray-900 dark:text-gray-200">
            Email me for quick contact
          </p>
          <span className="bg-slate-300 px-4 py-1 text:base text-gray-900 dark:text-gray-200 dark:bg-slate-700">
            mohosin.h.akash@gmail.com
          </span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
