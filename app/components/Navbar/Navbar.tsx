"use client";

import Logo from "./Logo";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
          <Link href="/">
            <Logo />
          </Link>
          <div className="md:hidden ml-4">
            <button
              type="button"
              className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-transform duration-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`hamburger ${isOpen ? "open" : ""}`}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/experience">
            <button className="btn-primary">Experience</button>
          </Link>
          <Link href="/projects">
            <button className="btn-primary">Projects</button>
          </Link>
          <Link href="/contact">
            <button className="btn-primary">Contact</button>
          </Link>
        </div>
      </div>

      <div
        className="transition-all duration-500 ease-in-out overflow-hidden md:hidden"
        style={{
          height: isOpen ? "auto" : "0",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-10%)",
        }}
      >
        <Link href="/experience">
          <div className="block px-5 py-3 hover:bg-pink-300 cursor-pointer">
            Experience
          </div>
        </Link>
        <Link href="/projects">
          <div className="block px-5 py-3 hover:bg-pink-300 cursor-pointer">
            Projects
          </div>
        </Link>
        <Link href="/contact">
          <div className="block px-5 py-3 hover:bg-pink-300 cursor-pointer">
            Contact
          </div>
        </Link>
      </div>
    </nav>
  );
}
