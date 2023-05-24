"use client";

export const educationData = [
  {
    title: "High School Certificate",
    subtitle: "A.B. Paterson College",
    content: [
      "Overall Position (OP) Score: 2/25 (97.3+ ATAR Equivalent)",
      "Queensland Core Skills (QCS) Test Score: A",
      "1st In Subject: Japanese, English, Biology",
    ],
  },
  {
    title: "Diploma of Languages [Japanese]",
    subtitle: "Griffith University | 2020 - 2022",
    content: [
      "Conversational Japanese Skill",
      "Completed Kansai Kokusai Center Intensive Program",
      "GPA: 7.0/7.0",
    ],
  },
  {
    title: "Japanese Language Exchange",
    subtitle: "J.F. Oberlin University | Winter 2023",
    content: [
      "Winter Exchange In-Person In Tokyo",
      "Studied High-Intermediate Japanese Courses",
    ],
  },
  {
    title: "Bachelor of Computer Science [Honours]",
    subtitle: "Griffith University | 2020 - 2023",
    content: [
      "Major: Data Science & Artificial Intelligence",
      "Awarded with Distinction",
      "GPA: 6.9/7.0",
    ],
  },
];

export const experienceData = [
  {
    imgSrc: "images/atlassianlogo.png",
    title: "Atlassian",
    subtitle: "Software Engineering Intern",
    date: "November 2022 - February 2023",
    links: ["images/atlassian1.png", "images/atlassian2.gif"],
    company:
      "Atlassian is a leading provider of collaboration, development, and issue tracking software for teams",
    position: "Software Engineering Intern",
    tools: [
      "Jira",
      "Jira Service Management",
      "Confluence",
      "BitBucket",
      "Splunk/SignalFx",
      "Git",
      "LaunchDarkly",
    ],
    technologies: ["React", "TypeScript", "Java", "Atlassian Design System"],
    skills: ["Full Stack Development", "Agile Development", "Product Demos"],
    description: [
      "For my intern project, I feature led a new UI for a highly suggested JSM feature that adds filtering for linked Jira tickets to various assets objects",
      "Project is in production and is being used by thousands of JSM customers worldwide (approx. 20000 customers at time of project completion)",
      "Completed project ahead of schedule and joined the team in contributing to sprint work",
    ],
  },
  {
    imgSrc: "images/swyftxlogo.svg",
    title: "Swyftx",
    subtitle: "Software Engineering Intern",
    date: "June 2022 - July 2022",
    links: ["images/swyftx1.jpg"],
    company: "Swyftx is Australia's 2nd largest cryptocurrency exchange",
    position: "Software Engineering Intern",
    tools: [
      "Github Issues",
      "Git",
      "REST APIs",
      "Database Design",
      "Slack Webhooks",
    ],
    technologies: ["Python", "Flask", "SQLAlchemy", "React", "TypeScript"],
    skills: [
      "Backend Development",
      "Teamwork",
      "Stakeholder Management",
      "Product Demos",
    ],
    description: [
      "Worked with 4 other interns to create SwyftSocial: an all-in-one event booking and management system app that could be used as an internal tool within the company",
      "Liased with a number of key stakeholders within the company including employees from the People and Culture, Security, Design/UI, and R&D teams.",
      "Designed a database schema and REST API backend using Flask and SQLAlchemy to interact with the React Typescript frontend",
      "Integrated extended features to the app, including .ics Calendar invites, .csv file exports for events, and integration with a Slackbot to notify Swyftx employees when events have been created or cancelled",
    ],
  },
  {
    imgSrc: "images/cineflylogo.png",
    title: "Cinefly",
    subtitle: "Software Engineering Intern",
    date: "July 2022 - October 2022",
    links: [
      "images/cinefly1.png",
      "images/cinefly2.png",
      "images/cinefly3.gif",
      "videos/cineflyvideo.mp4",
    ],
    company:
      "Cinefly is a company focused on creating user generated content seamlessly",
    position: "Software Engineering Intern",
    tools: ["GitHub", "Jira", "AWS"],
    technologies: ["React", "Redux", "TypeScript", "Saga Middleware"],
    skills: ["Frontend Development", "Teamwork", "Product Demos", "UI Design"],
    description: [
      "Implemented rendering functionality with React and Redux for the company's video editing platform",
      "Assisted with creation of new modals, styling, UI design and debugging",
      "Featured on 7News and 9News as an up and coming startup in the Gold Coast",
    ],
  },
  {
    imgSrc: "images/MELLogo.png",
    title: "ME Learning",
    subtitle: "Software Development Intern",
    date: "November 2021 - January 2022",
    links: ["images/MEL1.jpg"],
    company:
      "Online internship with an online education company based in Osaka, Japan",
    position: "Software Engineering Intern",
    tools: ["Google TTS API", "NLP/T5 Transformers", "Google Colab"],
    technologies: ["Python", "numpy", "pandas", "sklearn", "nltk"],
    skills: ["Data Science", "Natural Language Processing"],
    description: [
      "Utilised Google's TTS API to create programs to automate generation of over 12000 audio files for English/Japanese words from various dictionaries",
      "Applied NLP/T5 Transformers knowledge to generate MCQ, Fill in The Blank, Anagram, and Unscramble questions when given the script for a story book",
      "Proliferated question generation program within the company to eliminate the need for manual comprehension question creation for the company's E-Book Library. 2000+ tailor-made questions for 500+ books can be processed in 30 minutes with the Python program.",
    ],
  },
];

export const projectsData = [
  {
    id: "1",
    title: "Portfolio",
    category: "Web Dev",
    link: "https://himathsprojects.xyz/",
    tags: [
      {
        lang: "TypeScript",
        color: "orange",
      },
      {
        lang: "React",
        color: "aquamarine",
      },
      {
        lang: "Next.js",
        color: "gray",
      },
      {
        lang: "TailwindCSS",
        color: "cyan",
      },
    ],
    img: "images/portfoliosite.png",
    desc: "This website! A portfolio website made with React and TypeScript.",
  },
  {
    id: "2",
    title: "NoteJS",
    category: "Web Dev",
    link: "https://notejs.himathsprojects.xyz/",
    tags: [
      {
        lang: "TypeScript",
        color: "orange",
      },
      {
        lang: "React",
        color: "aquamarine",
      },
    ],
    img: "images/notejs.jpg",
    desc: "A JavaScript and Markdown editor inspired by Jupyter Notebook, that can compile and preview JS code.",
  },
  {
    id: "3",
    title: "AirBNB Clone",
    category: "Web Dev",
    link: "https://himathbnb.vercel.app/",
    tags: [
      {
        lang: "TypeScript",
        color: "orange",
      },
      {
        lang: "React",
        color: "aquamarine",
      },
      {
        lang: "Next.js",
        color: "gray",
      },
      {
        lang: "TailwindCSS",
        color: "cyan",
      },
    ],
    img: "images/hrbnb.png",
    desc: "A mock AirBnB website made with Next.js and TypeScript.",
  },
  {
    id: "4",
    title: "Lane Detection with OpenCV",
    category: "Python",
    link: "https://himathr.github.io/lanedetection.html",
    tags: [
      {
        lang: "Python",
        color: "red",
      },
      {
        lang: "OpenCV",
        color: "#ff4b4b",
      },
      {
        lang: "numpy",
        color: "#ff9f5b",
      },
    ],
    img: "images/lanedetection.png",
    desc: "Report on impact of environmental conditions on Lane Detection efficacy, with a focus on the role of image pre-processing techniques like Gaussian and Bilateral Filtering",
  },
  {
    id: "5",
    title: "Fashion MNIST Neural Network",
    category: "Python",
    link: "https://himathr.github.io/mnist.html",
    tags: [
      {
        lang: "Python",
        color: "red",
      },
      {
        lang: "numpy",
        color: "#ff9f5b",
      },
      {
        lang: "pandas",
        color: "#ffBf5b",
      },
    ],
    img: "images/neuralnet.png",
    desc: "A manually coded Neural Network capable of classifying over 60,000 images within the Fashion MNIST data set ",
  },
  {
    id: "6",
    title: "Chrome DinoGame Recreation",
    category: "Web Dev",
    link: "https://himathr.github.io/dinogame.html",
    tags: [
      {
        lang: "JavaScript",
        color: "orange",
      },
      {
        lang: "HTML/CSS",
        color: "coral",
      },
    ],
    img: "images/dinogame.png",
    desc: "Reimagined Dino game with smoother transitions, adaptive screen dimension scaling, and three custom themes",
  },
  {
    id: "7",
    title: "Robot Navigation with ROS",
    category: "C/C++",
    link: "https://github.com/HimathR",
    tags: [
      {
        lang: "C++",
        color: "lightblue",
      },
      {
        lang: "ROS",
        color: "gray",
      },
    ],
    img: "images/ros.png",
    desc: "Implemented PID algorithm to navigate a robot through terrain to a target using ROS and the help of 3 sonar outputs. Kalman filtering was also used for filtering potential noise out of the sonar output",
  },
  {
    id: "8",
    title: "Solving Rush Hour With Search Algorithms",
    category: "Python",
    link: "https://himathr.github.io/rushhour.html",
    tags: [
      {
        lang: "Python",
        color: "red",
      },
      {
        lang: "Search Algorithms",
        color: "green",
      },
    ],
    img: "images/rushhour.png",
    desc: "Using Breadth First, Depth First, and A* Search Methods to solve the game rush hour in the shortest amount of turns",
  },
  {
    id: "9",
    title: "SEEK Job Market Analysis",
    category: "Python",
    link: "https://himathr.github.io/BigDataWebsite/",
    tags: [
      {
        lang: "Python",
        color: "red",
      },
      {
        lang: "numpy",
        color: "#ff9f5b",
      },
      {
        lang: "pandas",
        color: "#ffBf5b",
      },
      {
        lang: "sklearn",
        color: "#ff4b4b",
      },
    ],
    img: "images/seek.png",
    desc: "Analysis of Australian job market trends via data scraped from SEEK, identifying key skills, roles, and industries.",
  },
  {
    id: "10",
    title: "Number Factorisation Using Shared Memory",
    category: "C/C++",
    link: "https://himathr.github.io/sharedmem.html",
    tags: [
      {
        lang: "C",
        color: "lightblue",
      },
      {
        lang: "Concurrency",
        color: "pink",
      },
    ],
    img: "images/clientserver.png",
    desc: "A client server system that communicates through shared memory to find prime factors of numbers, coded in C",
  },
  {
    id: "11",
    title: "Client/Server Remote Execution System",
    category: "C/C++",
    link: "https://himathr.github.io/clientserver.html",
    tags: [
      {
        lang: "C",
        color: "lightblue",
      },
      {
        lang: "Concurrency",
        color: "pink",
      },
    ],
    img: "images/clientserver2.png",
    desc: "A client server system that communicates through a network to simulate a multiplayer game known as 'Numbers'",
  },
  {
    id: "12",
    title: "Cascade Game Recreation",
    category: "C/C++",
    link: "https://himathr.github.io/cascade.html",
    tags: [
      {
        lang: "C",
        color: "lightblue",
      },
    ],
    img: "images/cascade.png",
    desc: "My first ever coding project! An implementation of the game 'Cascade' - a turn-based game similar to the popular mobile game Candy Crush",
  },
  {
    id: "13",
    title: "Spotify Data Visualisation",
    category: "Other",
    link: "https://public.tableau.com/app/profile/himath.ratnayake/viz/Spotify_16457073163740/SpotifyStory",
    tags: [
      {
        lang: "Tableau",
        color: "lightgreen",
      },
      {
        lang: "Python",
        color: "red",
      },
    ],
    img: "images/spotify.png",
    desc: "Tableau data visualization project using data scraped from Spotify's Global 200 charts (2017-2018), aiding in learning data procurement, cleaning, and storytelling through visuals",
  },
];
