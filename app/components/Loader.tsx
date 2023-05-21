"use client";

import React, { useEffect } from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";

const Loader = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden bg-black flex items-center justify-center">
        <div className="relative w-1/4 h-1/4 sm:w-1/5 sm:h-1/5 md:w-1/6 md:h-1/6 lg:w-1/7 lg:h-1/7 xl:w-1/8 xl:h-1/8 2xl:w-1/9 2xl:h-1/9 relative popIn">
          <Image alt="logo" layout="fill" objectFit="contain" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
