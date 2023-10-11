import React from "react";
import Wrapper from "../wrapper";

const Footer = () => {
  return (
    <footer class="w-full border-t-2 border-solid border-gray-900 font-medium text-lg">
      <Wrapper className="flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>

        <div>
          <p class="text-2xl capitalize">Email me for quick contact</p>
          <span class="bg-slate-300 px-4 py-1 mt-2">
            mohosin.h.akash@gmail.com
          </span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
