"use client";

import React from "react";
import { SocialLinks } from "../components/SocialLinks";
import ContactImg from "./ContactImg";
import FadeIn from "../components/FadeIn";

const Contact = () => {
  const ContactData = {
    title: "Contact Me",
    description:
      "Please feel free to contact me if you have any queries or if you want to know more about any of my work! I'm always available on LinkedIn or through my email.",
  };

  return (
    <FadeIn>
      <div className="flex-1">
        <div className="flex items-start space-x-8">
          <div className="w-1/3">
            <ContactImg />
          </div>
          <div>
            <h1 className="text-4xl sm:text-6xl mt-0 mb-2 sm:mb-4 text-red-500">
              {ContactData["title"]}
            </h1>
            <p className="text-base sm:text-lg mt-2 mb-2 sm:mt-4 mr-10 text-white">
              {ContactData["description"]}
            </p>
            <SocialLinks />
            <div className="mt-4">
              <a href="mailto:himath4510@gmail.com">Mail Me</a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Contact;
