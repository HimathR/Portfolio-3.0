"use client";

import React from "react";
import EducationImg from "./EducationImg";
import FadeIn from "../components/FadeIn";
import workexp from "../../public/images/workexp.gif";
import Image from "next/image";
import Resume from "./Resume";

const Education = () => {
  return (
    <div>
      <div className="w-full">
        <div className="mx-5">
          <FadeIn>
            <div className="flex flex-wrap justify-center items-center lg:justify-between">
              <div className="w-full lg:w-1/2 px-4">
                <EducationImg />
              </div>
              <div className="w-full lg:w-1/2 px-4 text-center">
                <h1 className="text-4xl font-semibold text-pink-600 mt-16 lg:mt-0">
                  Experience &#38; Education
                </h1>
                <div className="mt-10">
                  <Image
                    src={workexp}
                    alt="Companies I've worked at"
                    layout="responsive"
                    width={500}
                    height={300}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
          <div></div>
        </div>
      </div>
      <Resume />
    </div>
  );
};

export default Education;
