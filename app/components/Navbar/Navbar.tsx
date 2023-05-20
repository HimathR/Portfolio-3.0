"use client";

import Logo from "./Logo";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

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
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AiOutlineMenu />
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

      {isOpen && (
        <div className="md:hidden">
          <Link href="/experience">
            <div className="block px-2 py-1 hover:bg-pink-300 cursor-pointer">
              Experience
            </div>
          </Link>
          <Link href="/projects">
            <div className="block px-2 py-1 hover:bg-pink-300 cursor-pointer">
              Projects
            </div>
          </Link>
          <Link href="/contact">
            <div className="block px-2 py-1 hover:bg-pink-300 cursor-pointer">
              Contact
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
