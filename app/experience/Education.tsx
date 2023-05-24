"use client";

import { educationData } from "../details";

const Education = () => {
  const getEmoji = (idx: number) => {
    switch (idx) {
      case 1:
        return "📚";
      case 2:
        return "🌸";
      case 3:
        return "🗾";
      case 4:
        return "🖥️";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-pink-600 mt-16 lg:mt-0 ">
          🏫 Education
        </h1>
      </div>
      <ol className="items-center sm:flex m-6 justify-center ">
        {educationData.map((education, idx) => (
          <li className="relative mb-6 sm:mb-0 md:mb-6 h-48" key={idx}>
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-12 h-10 bg-pink-100 rounded-full ring-0 ring-white dark:bg-pink-500 sm:ring-8 dark:ring-gray-900 shrink-0">
                <div className="text-2xl">{getEmoji(idx + 1)}</div>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8 ">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {education.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ">
                {education.subtitle}
              </time>
              {education.content.map((line, lineIdx) => (
                <p
                  className="text-base font-normal text-gray-500 dark:text-gray-400"
                  key={lineIdx}
                >
                  {line}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
