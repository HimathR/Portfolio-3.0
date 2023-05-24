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
    skills,
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
      <div className="bg-gray-800 text-white rounded-lg  overflow-y-auto shadow-lg w-full h-5/6 lg:h-max sm:h-max md:w-3/4  md:h-3/4 md:max-w-6xl m-4 md:m-0">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-none md:auto-rows-min h-full">
          <div className="p-6 space-y-8 md:col-span-1">
            <div className="mb-4">
              <img
                className="w-full h-full object-contain row-span-1"
                src={imgSrc}
                alt={title}
              />
            </div>
            <h4 className="text-xl font-bold"> {company}</h4>
            <div className="mb-4">
              <h4 className="text-xl font-bold">Time Of Employment</h4>
              <h3 className="text-lg">{date}</h3>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-bold">Technologies</h4>
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
              <h4 className="text-xl font-bold">Tools</h4>
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
              <h4 className="text-xl font-bold">Skills</h4>
              <ul className="flex flex-wrap">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="m-1 px-2 py-1 text-sm bg-gray-700 rounded-full hover:bg-gray-600"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-rows-1 p-6 ">
            {links && links.length > 0 && (
              <div className="relative w-full h-full mb-6 rounded-md overflow-auto grid-row-2 md:grid-row-1 ">
                {links[carouselIndex].includes("video") ? (
                  <video
                    className="w-full h-full object-contain cursor-pointer "
                    src="cineflyvideo.mp4"
                    onClick={handleCarouselClick}
                    autoPlay
                  />
                ) : (
                  <img
                    className="w-full h-full object-contain cursor-pointer "
                    src={links[carouselIndex]}
                    alt={`carousel image ${carouselIndex}`}
                    onClick={handleCarouselClick}
                  />
                )}

                {/* Left and right navigation arrows should only show if links.length > 1*/}
                {links.length > 1 && (
                  <>
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
                  </>
                )}
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {title}{" "}
                <span className="text-2xl font-semibold"> {subtitle}</span>{" "}
              </h1>
              <div>
                <ul>
                  {description.map((desc, index) => (
                    <li key={index} className="text-xl">
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
