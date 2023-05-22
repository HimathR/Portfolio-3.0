"use client";

import React from "react";
import ProjectsImg from "./ProjectsImg";
import FadeIn from "../components/FadeIn";

const Experience = () => {
  return (
    <div>
      <div className="w-full sm:mb-20">
        <div className="mx-5">
          <FadeIn>
            <div className="flex flex-wrap justify-center items-center lg:justify-between lg:ml-60 lg:mr-60 md:mr-40 md:ml-40">
              <div className="w-full lg:w-1/2 px-4">
                <ProjectsImg />
              </div>
              <div className="w-full lg:w-1/2 px-4 text-center ">
                <h1 className="text-6xl font-semibold text-pink-600 mt-16 lg:mt-0 ">
                  Projects
                </h1>
                <div className="xl:mt-22 mt-10 flex gap-4 justify-center">
                  <button className="btn-glow">Python</button>
                  <button className="btn-glow">Web Dev</button>
                  <button className="btn-glow">C/C++</button>
                  <button className="btn-glow">Show All</button>
                </div>
              </div>
            </div>
          </FadeIn>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
