import React, { useState } from "react";

type CardProps = {
  imgSrc: string;
  title: string;
  handleClick: () => void;
};

const Card: React.FC<CardProps> = ({ imgSrc, title, handleClick }) => (
  <div
    className={`h-full rounded-xl card-gradient p-2 md:p-4 w-full md:w-1/4 m-2`}
  >
    <div className="flex flex-col aspect-wider w-full rounded-lg bg-white p-4 md:p-8 aspect-widest h-full">
      <img
        className="object-cover w-full h-64 rounded-lg"
        src={imgSrc}
        alt={title}
      />
      <div className="flex-grow">
        <h2 className="font-sohne text-36pt font-bold leading-[0.9] tracking-tighter text-black mt-4">
          {title}
        </h2>
      </div>
      <button
        onClick={handleClick}
        className="p-2 mt-4 bg-pink-500 text-white rounded-lg text-center"
      >
        Open Modal
      </button>
    </div>
  </div>
);

const CardGrid: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const cardData = [
    {
      imgSrc: "https://assets.stickpng.com/images/62c6eb5f7a58a4aa1fb7709c.png",
      title: "Card 1",
    },
    {
      imgSrc: "https://source.unsplash.com/random/2",
      title: "Card 2",
    },
    {
      imgSrc: "https://source.unsplash.com/random/3",
      title: "Card 3",
    },
    {
      imgSrc: "https://source.unsplash.com/random/4",
      title: "Card 4",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imgSrc={card.imgSrc}
          title={card.title}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default CardGrid;
