import React, { useState } from "react";
import ExperienceModal from "../experience/ExperienceModal";
import { projectsData } from "../details";

interface Tag {
  lang: string;
  color: string;
}

interface CardProps {
  id: string;
  title: string;
  category: string;
  link: string;
  tags: Tag[];
  img: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ img, title, link, tags }) => (
  <div
    onClick={() => (window.location.href = link)}
    className="cursor-pointer h-full rounded-xl card-gradient md:p-4 w-full md:w-1/3 m-2"
  >
    <div className="flex flex-col aspect-wider w-full rounded-lg bg-black p-4 md:p-8 aspect-widest h-full">
      <img
        className="object-contain w-full h-64 rounded-lg"
        src={img}
        alt={title}
      />
      <div className="mt-2 text-center">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <div className="flex flex-wrap justify-center mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-opacity-75 text-black mx-2 mb-2"
              style={{ backgroundColor: tag.color }}
            >
              {tag.lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CardGrid: React.FC<{ selectedCategory: string }> = ({
  selectedCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {projectsData
        .filter(
          (card) => !selectedCategory || card.category === selectedCategory
        )
        .map((card, index) => (
          <Card key={index} {...card} />
        ))}
    </div>
  );
};

export default CardGrid;
