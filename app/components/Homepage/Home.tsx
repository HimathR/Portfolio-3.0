"use client";

import React from "react";
import { SocialLinks } from "../SocialLinks";
import BannerImg from "../LottieRenders/HomeBanner";
import FadeIn from "../FadeIn";

const Homepage = () => {
  return (
    <FadeIn>
      <div
        className="w-11/12 mx-auto mr-8 flex flex-col sm:flex-row items-start sm:items-center space-y-8 sm:space-y-0 sm:space-x-8"
        id="greeting"
      >
        <div className="flex-1 ml-3">
          <h1 className="xl:text-9xl text-7xl sm:text-6xl mt-0 mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-pink-500 font-bold">
            {"Hello!"}
          </h1>
          <h1 className="xl:text-8xl text-3xl sm:text-6xl md:text-4xl mt-0 mb-2 sm:mb-4 leading-snug font-bold text-white-800">
            I'm Himath
            <span className="wave">👋</span>
          </h1>
          <h1 className="xl:text-7xl text-3xl sm:text-6xl md:text-4xl mt-0 mb-2 sm:mb-4 leading-snug font-normal text-fuchsia-600 pb-4 sm:pb-0">
            {"Software Engineer"}
          </h1>
          <span className="xl:text-3xl text-base sm:text-lg mt-2 mb-2 sm:mt-4 mr-10 font-medium text-current">
            Computer Science / Japanese @ Griffith University
          </span>
          <SocialLinks />
        </div>
        <div className="order-1 sm:order-none flex-1 max-w-full ">
          <BannerImg />
        </div>
      </div>
    </FadeIn>
  );
};

export default Homepage;
