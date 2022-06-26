import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="main">
      <Link href="/">Home</Link>
      <Link href="/work">Work</Link>
      {/* <Link href="/experiments">Experiments</Link> */}

      <Link href="/contact">Contact me</Link>
      <Link href="/blogs">Blogs</Link>
    </nav>
  );
}

export default Header;
