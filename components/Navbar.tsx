"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        Gloria Mafor
      </Link>

      <div className="nav-links">
        <Link href="/about" className="nav-btn">
          About
        </Link>
        <Link href="/skills" className="nav-btn">
          Skills
        </Link>
        <Link href="/projects" className="nav-btn">
          Projects
        </Link>
        <Link href="/experience" className="nav-btn">
          Experience
        </Link>
        <Link href="/contact" className="nav-btn">
          Contact
        </Link>
        <Link href="/resume" className="nav-btn">
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
