import React, { useState } from "react";
import ExperienceModal from "./ExperienceModal";

export interface CardData {
  imgSrc: string;
  title: string;
  description: string;
  company: string;
  position: string;
  tools: string[];
  technologies: string[];
}

interface CardProps extends CardData {
  handleClick: (card: CardData) => void;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, handleClick, ...rest }) => (
  <div
    className={`h-full rounded-xl card-gradient md:p-4 w-full md:w-1/4 lg:w-1/3 m-2`}
  >
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

  const cardData = [
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Atlassian-logo.svg/1200px-Atlassian-logo.svg.png",
      title: "Card 1",
      description: "Card 1 Description",
      company: "Company 1",
      position: "Position 1",
      tools: ["Tool 1", "Tool 2"],
      technologies: ["Tech 1", "Tech 2"],
    },
    {
      imgSrc:
        "https://assets-global.website-files.com/636e894daa9e99940a604aef/6385b3d7140115fbf69f92db_SwyftX%20Logo.svg",
      title: "Card 2",
      description: "Card 1 Description",
      company: "Company 1",
      position: "Position 1",
      tools: ["Tool 1", "Tool 2"],
      technologies: ["Tech 1", "Tech 2"],
    },
    {
      imgSrc: "https://i.gyazo.com/4a917009cacfced912e985e4c446095a.png",
      title: "Card 3",
      description: "Card 1 Description",
      company: "Company 1",
      position: "Position 1",
      tools: ["Tool 1", "Tool 2"],
      technologies: ["Tech 1", "Tech 2"],
    },
    {
      imgSrc:
        "https://www.mellimited.com/wp-content/uploads/2019/02/mel_logo.png",
      title: "Card 4",
      description: "Card 1 Description",
      company: "Company 1",
      position: "Position 1",
      tools: ["Tool 1", "Tool 2"],
      technologies: ["Tech 1", "Tech 2"],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
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
