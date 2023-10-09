import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";

const Navbar = () => {
  return (
    <Wrapper>
      <div class="flex items-center justify-between">
        {/* Left section of the navbar. */}
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/articles">Articles</Link>
        </nav>

        {/* Right section of the navbar. */}
        <nav>
          <Link href="/">FB</Link>
          <Link href="/">FB</Link>
          <Link href="/">FB</Link>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
