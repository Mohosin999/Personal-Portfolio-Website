import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
import CustomLink from "../UI/custom-link";
import { FacebookIcon, TwitterIcon, GithubIcon } from "../icons";

const Navbar = () => {
  return (
    <Wrapper>
      <div class="flex items-center justify-between">
        {/* Left section of the navbar. */}
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        {/* Right section of the navbar. */}
        <nav>
          <Link href="/">
            <FacebookIcon />
          </Link>
          <Link href="/">
            <TwitterIcon />
          </Link>
          <Link href="/">
            <GithubIcon />
          </Link>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
