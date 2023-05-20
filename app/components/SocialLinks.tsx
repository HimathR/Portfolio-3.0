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

const driveLinks = [
  {
    id: 1,
    name: "Resume",
    url: "https://drive.google.com/file/d/1PGZhjYH3B4jU7YMqWZOhQ2W197YYRgIQ/view?usp=share_link",
  },
  {
    id: 2,
    name: "GPA Transcript",
    url: "https://drive.google.com/file/d/1NDNSNUMxoFT8XGqdB-xPpVr09XqfQ4PS/view?usp=share_link",
  },
];

export const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-4 sm:gap-8 mt-4">
        {socialLinks.map((link) => (
          <a
            href={link.url}
            target="__blank"
            key={link.id}
            className="btn-secondary"
          >
            <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
          </a>
        ))}
      </ul>
      <div className="flex flex-row gap-4">
        {driveLinks.map((link) => (
          <a
            href={link.url}
            target="__blank"
            key={link.id}
            className="btn-primary"
          >
            <b className="text-m sm:text-s md:text-s">{link.name}</b>
          </a>
        ))}
      </div>
    </div>
  );
};
