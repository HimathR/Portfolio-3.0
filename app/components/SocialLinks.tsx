"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    id: 1,
    icon: faGithub,
    url: "https://github.com/HimathR",
    name: "Github",
    colour: "text-gray-500",
  },
  {
    id: 2,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/himath",
    name: "LinkedIn",
    colour: "text-blue-500",
  },
  {
    id: 3,
    icon: faEnvelope,
    url: "mailto:himath4510@gmail.com",
    name: "Email",
    colour: "text-red-500",
  },
];

const driveLinks = [
  {
    id: 1,
    name: "📝 Resume",
    url: "https://drive.google.com/file/d/1PGZhjYH3B4jU7YMqWZOhQ2W197YYRgIQ/view?usp=share_link",
  },
  {
    id: 2,
    name: "📜 Transcript",
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
            className={`relative group btn-secondary ${link.colour}`}
          >
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-0 group-hover:translate-y-full transition-transform duration-200 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1">
              {link.name}
            </span>
            <FontAwesomeIcon icon={link.icon} size="2x" />
          </a>
        ))}
      </ul>
      <div className="flex flex-row gap-4">
        {driveLinks.map((link) => (
          <a
            href={link.url}
            target="__blank"
            key={link.id}
            className="btn-glow"
          >
            <b className="text-m sm:text-s md:text-s">{link.name}</b>
          </a>
        ))}
      </div>
    </div>
  );
};
