import React from "react";
import EducationImg from "./EducationImg";
import FadeIn from "../components/FadeIn";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Marquee from "../components/Marquee";
import Head from "next/head";


const Experience = () => {
  return (
    <div>
      <Head>
      <title>Experience</title>
      </Head>
      <div className="w-full sm:mb-20">
        <div className="mx-5">
          <FadeIn>
            <div className="flex flex-wrap justify-center items-center lg:justify-between lg:ml-60 lg:mr-60 md:mr-40 md:ml-40">
              <div className="w-full lg:w-1/2 px-4">
                <EducationImg />
              </div>
              <div className="w-full lg:w-1/2 px-4 text-center ">
                <h1 className="text-6xl font-semibold text-pink-600 mt-16 lg:mt-0 ">
                  Experience &#38; Education
                </h1>
                <div className="mt-10">
                  <Marquee />
                </div>
              </div>
            </div>
            <Education />
            <WorkExperience />
          </FadeIn>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
