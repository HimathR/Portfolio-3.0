"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const checkActive = (path: string) => {
    if (path === pathname) {
      return "text-pink-500";
    } else {
      return "";
    }
  };

  return (
    <nav className="text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between md:justify-start w-full md:w-auto min xl:ml-24">
          <Link href="/">
            <Logo />
          </Link>
          <div className="md:hidden ml-4 ">
            <button
              type="button"
              className="xl:px-6 xl:py-4 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-transform duration-500 focus:outline-none"
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

        <div className="hidden md:flex items-center xl:mr-24 xl:text-2xl font-bold">
          <Link href="/">
            <button
              onClick={() => router.push("/")}
              className={`btn-primary ${checkActive("/")}`}
            >
              Home
            </button>
          </Link>
          <Link href="/experience">
            <button
              onClick={() => router.push("/experience")}
              className={`btn-primary ${checkActive("/experience")}`}
            >
              Experience
            </button>
          </Link>
          <Link href="/projects">
            <button
              onClick={() => router.push("/projects")}
              className={`btn-primary ${checkActive("/projects")}`}
            >
              Projects
            </button>
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
        <Link href="/">
          <button
            onClick={() => router.push("/")}
            className={`block px-5 py-3 hover:bg-pink-500 cursor-pointer ${checkActive(
              "/"
            )}`}
          >
            Home
          </button>
        </Link>
        <Link href="/experience">
          <button
            onClick={() => router.push("/experience")}
            className={`block px-5 py-3 hover:bg-pink-500 cursor-pointer ${checkActive(
              "/experience"
            )}`}
          >
            Experience
          </button>
        </Link>
        <Link href="/projects">
          <button
            onClick={() => router.push("/projects")}
            className={`block px-5 py-3 hover:bg-pink-500 cursor-pointer ${checkActive(
              "/projects"
            )}`}
          >
            Projects
          </button>
        </Link>
      </div>
    </nav>
  );
}
