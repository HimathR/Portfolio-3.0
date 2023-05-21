"use client";

import React from "react";
import { SocialLinks } from "../SocialLinks";
import BannerImg from "../LottieRenders/Homepage1";
import FadeIn from "../FadeIn";

const Homepage = () => {
  return (
    <FadeIn>
      <div
        className="w-11/12 mx-auto mt-4 flex flex-col sm:flex-row items-start sm:items-center space-y-8 sm:space-y-0 sm:space-x-8"
        id="greeting"
      >
        <div className="flex-1">
          <h1 className="text-4xl sm:text-6xl mt-0 mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-pink-500 typewriter-text-bold">
            {"Hello!"}
          </h1>
          <h1 className="text-3xl sm:text-4xl mt-0 mb-2 sm:mb-4 leading-snug font-bold text-white-800">
            I'm Himath
            <span className="inline-block transform origin-center animate-wave">
              👋
            </span>
          </h1>
          <h1 className="text-3xl sm:text-4xl mt-0 mb-2 sm:mb-4 leading-snug font-normal text-fuchsia-600 pb-4 sm:pb-0">
            {"Software Developer"}
          </h1>
          <span className="text-base sm:text-lg mt-2 mb-2 sm:mt-4 mr-10 font-medium text-current">
            Computer Science / Japanese @ Griffith University
          </span>
          <SocialLinks />
        </div>
        <div className="order-1 sm:order-none flex-1 max-w-full lg:max-w-[500px]">
          <BannerImg />
        </div>
      </div>
    </FadeIn>
  );
};

export default Homepage;
