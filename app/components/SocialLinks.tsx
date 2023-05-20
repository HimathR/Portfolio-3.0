import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/HimathR",
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/himath",
  },
];
export const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-4 sm:gap-2">
        {socialLinks.map((link) => (
          <a
            href={link.url}
            target="__blank"
            key={link.id}
            className="btn-primary"
          >
            <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
          </a>
        ))}
      </ul>
      <div className="flex flex-row gap-4">
        <button className="primary-btn"> Contact </button>
        <button className="primary-btn"> View My Resume </button>
        <button className="primary-btn"> Academic Transcript </button>
      </div>
    </div>
  );
};
