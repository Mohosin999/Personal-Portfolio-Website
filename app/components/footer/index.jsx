import React from "react";
import Wrapper from "../wrapper";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-gray-900 font-medium text-lg sm:text-base">
      <Wrapper className="flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>

        <div className="lg:py-2">
          <p className="text-2xl lg:text-lg capitalize">
            Email me for quick contact
          </p>
          <span className="bg-slate-300 px-4 py-1 mt-2">
            mohosin.h.akash@gmail.com
          </span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
