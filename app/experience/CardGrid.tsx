import React, { useState } from "react";
import ExperienceModal from "./ExperienceModal";

export interface CardData {
  imgSrc: string;
  title: string;
  subtitle: string;
  links: string[];
  company: string;
  position: string;
  tools: string[];
  technologies: string[];
  date: string;
  description: string[];
}

const cardData: CardData[] = [
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Atlassian-logo.svg/1200px-Atlassian-logo.svg.png",
    title: "Atlassian",
    subtitle: "Software Engineering Intern",
    date: "November 2022 - February 2023",
    links: [
      "https://i.gyazo.com/89204fbb187bffa331bd75117521565c.png",
      "https://i.gyazo.com/eee8c9246b1a12bfa787fa264fcbf72d.png",
    ],
    company:
      "Atlassian is a leading provider of collaboration, development, and issue tracking software for teams",
    position: "Software Engineering Intern",
    tools: ["Jira Service Management"],
    technologies: ["UI development", "Filtering for linked Jira tickets"],
    description: [
      "For my intern project, I feature led a new UI for a highly suggested JSM feature that adds filtering for linked Jira tickets to various assets objects",
      "Project is in production and is being used by thousands of JSM customers worldwide (approx. 20000 customers at time of project completion)",
      "Completed project ahead of schedule and joined the team in contributing to sprint work",
    ],
  },
  {
    imgSrc:
      "https://assets-global.website-files.com/636e894daa9e99940a604aef/6385b3d7140115fbf69f92db_SwyftX%20Logo.svg",
    title: "Swyftx",
    subtitle: "Software Engineering Intern",
    date: "June 2022 - July 2022",
    links: [
      "https://i.gyazo.com/89204fbb187bffa331bd75117521565c.png",
      "https://i.gyazo.com/eee8c9246b1a12bfa787fa264fcbf72d.png",
    ],
    company: "Swyftx is Australia's 2nd largest cryptocurrency exchange",
    position: "Software Engineering Intern",
    tools: ["Flask", "SQLAlchemy", "React", "TypeScript"],
    technologies: [
      "Database schema design",
      "REST API",
      "Event booking system",
      "Slackbot integration",
    ],
    description: [
      "Worked with 4 other interns to create SwyftSocial: an all-in-one event booking and management system app that could be used as an internal tool within the company",
      "Liased with a number of key stakeholders within the company including employees from the People and Culture, Security, Design/UI, and R&D teams.",
      "Designed a database schema and REST API backend using Flask and SQLAlchemy to interact with the React Typescript frontend",
      "Integrated extended features to the app, including .ics Calendar invites, .csv file exports for events, and integration with a Slackbot to notify Swyftx employees when events have been created or cancelled",
    ],
  },
  {
    imgSrc: "https://i.gyazo.com/4a917009cacfced912e985e4c446095a.png",
    title: "Cinefly",
    subtitle: "Software Engineering Intern",
    date: "July 2022 - October 2022",
    links: [
      "https://i.gyazo.com/89204fbb187bffa331bd75117521565c.png",
      "https://i.gyazo.com/eee8c9246b1a12bfa787fa264fcbf72d.png",
    ],
    company:
      "Cinefly is a company focused on creating user generated content seamlessly",
    position: "Software Engineering Intern",
    tools: ["React", "Redux"],
    technologies: ["Rendering", "UI design", "Modals", "Styling"],
    description: [
      "Implemented rendering functionality with React and Redux for the company's video editing platform",
      "Assisted with creation of new modals, styling, UI design and debugging",
    ],
  },
  {
    imgSrc:
      "https://www.mellimited.com/wp-content/uploads/2019/02/mel_logo.png",
    title: "ME Learning",
    subtitle: "Software Development Intern",
    date: "November 2021 - January 2022",
    links: [
      "https://i.gyazo.com/89204fbb187bffa331bd75117521565c.png",
      "https://i.gyazo.com/eee8c9246b1a12bfa787fa264fcbf72d.png",
    ],
    company:
      "Online internship with an online education company based in Osaka, Japan",
    position: "Software Development Intern",
    tools: ["Google TTS API", "NLP/T5 Transformers"],
    technologies: ["Audio file generation", "Question generation"],
    description: [
      "Utilised Google's TTS API to create programs to automate generation of over 12000 audio files for English/Japanese words from various dictionaries",
      "Applied NLP/T5 Transformers knowledge to generate MCQ, Fill in The Blank, Anagram, and Unscramble questions when given the script for a story book",
      "Proliferated question generation program within the company to eliminate the need for manual comprehension question creation for the company's E-Book Library. 2000+ tailor-made questions for 500+ books can be processed in 30 minutes with the Python program.",
    ],
  },
];

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
