import React, { useState } from "react";
import { CardData } from "./CardGrid";

type ModalProps = {
  showModal: boolean;
  cardDetails: CardData | null;
  onClose: () => void;
};

const ExperienceModal: React.FC<ModalProps> = ({
  showModal,
  cardDetails,
  onClose,
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  if (!showModal || !cardDetails) {
    return null;
  }
  const {
    imgSrc,
    title,
    subtitle,
    description,
    company,
    position,
    tools,
    technologies,
    date,
    links,
  } = cardDetails;

  const handleClickOutside = (event: React.MouseEvent) => {
    if ((event.target as Element).classList.contains("modal")) {
      onClose();
    }
  };

  const handleCarouselClick = () => {
    setCarouselIndex((carouselIndex + 1) % links.length);
  };

  return (
    <div
      onClick={handleClickOutside}
      className={`modal fixed z-50 left-0 top-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 ${
        showModal ? "modalIn" : "modalOut"
      }`}
    >
      <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-3/4 h-3/4 md:max-w-6xl m-4 md:m-0">
        <div className="grid grid-cols-3 h-full">
          <div className="col-span-1 p-6 space-y-8">
            <div className="mb-4">
              <img
                className="w-full h-full object-contain row-span-1"
                src={imgSrc}
                alt={title}
              />
            </div>

            <h4 className="text-lg font-semibold"> {company}</h4>

            <div className="mb-4">
              <h4 className="text-lg font-semibold">Time Of Employment</h4>
              <h3>{date}</h3>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold">Tools</h4>
              <ul className="flex flex-wrap">
                {tools.map((tool, index) => (
                  <li
                    key={index}
                    className="m-1 px-2 py-1 text-sm bg-gray-700 rounded-full hover:bg-gray-600"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Technologies</h4>
              <ul className="flex flex-wrap">
                {technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="m-1 px-2 py-1 text-sm bg-gray-700 rounded-full hover:bg-gray-600"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <button
                onClick={onClose}
                className="text-white bg-gray-700 p-2 mt-4 rounded-lg text-center btn-primary"
              >
                Close Modal
              </button>
            </div>
          </div>
          <div className="col-span-2 grid grid-rows-3 md:grid-rows-2 p-6">
            {links && links.length > 0 && (
              <div className="relative w-full h-full mb-6 rounded-md overflow-auto grid-row-2 md:grid-row-1">
                <img
                  className="w-full h-full object-contain cursor-pointer"
                  src={links[carouselIndex]}
                  alt={`carousel image ${carouselIndex}`}
                  onClick={handleCarouselClick}
                />

                {/* Left and right navigation arrows */}
                <div
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer text-xl text-white"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the image click handler from being triggered
                    setCarouselIndex(
                      (carouselIndex - 1 + links.length) % links.length
                    );
                  }}
                >
                  &#8592;
                </div>
                <div
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-xl text-white"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the image click handler from being triggered
                    setCarouselIndex((carouselIndex + 1) % links.length);
                  }}
                >
                  &#8594;
                </div>

                {/* Dots indicating the current image */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-2 flex items-center">
                  {links.map((link, index) => (
                    <div
                      className={`w-2 h-2 rounded-full ${
                        carouselIndex === index ? "bg-white" : "bg-gray-500"
                      }`}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="row-span-2 md:row-span-1">
              <h1 className="text-3xl font-bold mb-2">
                {title}{" "}
                <span className="text-2xl font-semibold"> {subtitle}</span>{" "}
              </h1>
              <div>
                <ul>
                  {description.map((desc, index) => (
                    <li key={index} className="text-sm">
                      - {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
