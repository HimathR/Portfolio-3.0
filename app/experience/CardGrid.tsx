import React, { useState } from "react";
import ExperienceModal from "./ExperienceModal";
import { experienceData } from "../details";

export interface CardData {
  imgSrc: string;
  title: string;
  subtitle: string;
  links: string[];
  company: string;
  position: string;
  tools: string[];
  technologies: string[];
  skills: string[];
  date: string;
  description: string[];
}

interface CardProps extends CardData {
  handleClick: (card: CardData) => void;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, handleClick, ...rest }) => (
  <div className={`h-full rounded-xl card-gradient md:p-4 w-full md:w-1/3 m-2`}>
    <div className="flex flex-col aspect-wider w-full rounded-lg bg-black p-4 md:p-8 aspect-widest h-full">
      <button
        onClick={() => handleClick({ imgSrc, title, ...rest })}
        className="p-2 mt-4"
      >
        <img
          className="object-contain w-full h-64 rounded-lg"
          src={imgSrc}
          alt={title}
        />
      </button>
    </div>
  </div>
);

const CardGrid: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState<CardData | null>(null);

  const handleClick = (card: CardData) => {
    setCurrentCard(card);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {experienceData.map((card, index) => (
        <Card key={index} {...card} handleClick={handleClick} />
      ))}
      {isOpen && currentCard && (
        <ExperienceModal
          showModal={isOpen}
          cardDetails={currentCard}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default CardGrid;
