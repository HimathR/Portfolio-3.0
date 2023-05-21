"use client";

const EducationData = [
  {
    title: "Bachelor of Computer Science",
    subtitle: "Griffith University, Gold Coast, Australia | 2020 - 2022",
    content: [
      "Major: Data Science and Artificial Intelligence",
      "Awarded with Distinction",
      "GPA: 6.9/7.0",
    ],
  },
  {
    title: "Diploma of Languages [Japanese]",
    subtitle: "Griffith University, Gold Coast, Australia | 2020 - 2022",
    content: ["GPA: 7.0/7.0"],
  },
  {
    title: "High School Certificate",
    subtitle: "A.B. Paterson College",
    content: [
      "Overall Position (OP) Score: 2/25 (97.3+ ATAR Equivalent)",
      "Queensland Core Skills (QCS) Test Score: A",
      "1st In Subject: Japanese, English, Biology",
    ],
  },
];

const Resume = () => {
  return (
    <ol className="items-center sm:flex ml-6 mr-6">
      {EducationData.map((education, idx) => (
        <li className="relative mb-6 sm:mb-0 h-48" key={idx}>
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {education.title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
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
  );
};

export default Resume;
