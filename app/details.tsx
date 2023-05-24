import { CardData } from "./experience/CardGrid";

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
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Atlassian-logo.svg/1200px-Atlassian-logo.svg.png",
    title: "Atlassian",
    subtitle: "Software Engineering Intern",
    date: "November 2022 - February 2023",
    links: [
      "https://i.gyazo.com/603f3aacdb1f8795c5f1e6d18f9fcd48.png",
      "https://i.gyazo.com/97a9c89cd01e1c091681b2158665c196.gif",
    ],
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
    imgSrc:
      "https://assets-global.website-files.com/636e894daa9e99940a604aef/6385b3d7140115fbf69f92db_SwyftX%20Logo.svg",
    title: "Swyftx",
    subtitle: "Software Engineering Intern",
    date: "June 2022 - July 2022",
    links: ["https://i.gyazo.com/a240cc8679472d8f1299406599b55ff3.jpg"],
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
    imgSrc: "https://i.gyazo.com/4a917009cacfced912e985e4c446095a.png",
    title: "Cinefly",
    subtitle: "Software Engineering Intern",
    date: "July 2022 - October 2022",
    links: [
      "https://i.gyazo.com/566130db1f18063037fa016cd1116e79.png",
      "https://i.gyazo.com/5ce8814ce674cbe5ab9ca15d02e679e2.png",
      "https://i.gyazo.com/9f39e1aab9f5380b36e838cfb16f31a1.gif",
      "/himath-portfolio/public/cineflyvideo.mp4",
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
    imgSrc:
      "https://www.mellimited.com/wp-content/uploads/2019/02/mel_logo.png",
    title: "ME Learning",
    subtitle: "Software Development Intern",
    date: "November 2021 - January 2022",
    links: ["https://i.gyazo.com/5b009908b1bf37e0b968f91f0d947c6a.jpg"],
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
    img: "https://miro.medium.com/max/1400/1*nX0QqMYYWA4pT3yppzFzgw.jpeg",
    desc: " A report investigating how Lane Detection efficacy changes under different environmental conditions. The effects of image pre-processing techniques such as Gaussian and Bilateral Filtering were also explored",
  },
  {
    id: "2",
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
    img: "https://machinelearningmastery.com/wp-content/uploads/2019/02/Plot-of-a-Subset-of-Images-from-the-Fashion-MNIST-Dataset-1024x768.png",
    desc: "A manually coded Neural Network capable of classifying over 60,000 images within the Fashion MNIST data set ",
  },
  {
    id: "3",
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
        color: "blue",
      },
    ],
    img: "https://i.gyazo.com/f72a499e771b40ed04afb44f6da2a43e.png",
    desc: "This project has recreated/extended upon the original Dino game in various ways, such as a different layout with smoother transitions between start screen and the game ending, as well as scaling of the game to the screen dimensions such that the game adapts to the window you play on. Three custom themes have also been added.",
  },
  {
    id: "4",
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
        color: "navy",
      },
    ],
    img: "https://www.designnews.com/sites/designnews.com/files/styles/article_featured_standard/public/Design%20News/gazebo_simulator.png?itok=SfZdoAnA",
    desc: "Implemented PID algorithm to navigate a robot through terrain to a target using ROS and the help of 3 sonar outputs. Kalman filtering was also used for filtering potential noise out of the sonar output",
  },
  {
    id: "5",
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
    img: "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/MBTN5000_.jpg",
    desc: "Using Breadth First, Depth First, and A* Search Methods to solve the game rush hour in the shortest amount of turns",
  },
  {
    id: "6",
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
    img: "https://iwfstaff.com.au/wp-content/uploads/2017/12/seek-logo.jpg",
    desc: "An analysis of the current Australian job market using data scraped from SEEK. The data was used to gain insights on the most relevant and in-demand skills, roles and industries today.",
  },
  {
    id: "7",
    title: "SwyftSocial",
    category: "Web Dev",
    link: "https://github.com/HimathR",
    tags: [
      {
        lang: "TypeScript",
        color: "royalblue",
      },
      {
        lang: "React",
        color: "aqua",
      },
      {
        lang: "Flask",
        color: "gray",
      },
      {
        lang: "SQLAlchemy",
        color: "crimson",
      },
    ],
    img: "https://swyftx.com/wp-content/uploads/2021/03/Swyftx-Feature-Image.jpg",
    desc: "SwyftSocial is an all-in-one events management and booking tool created as an internal tool to be used by the company Swyftx. Features include a user-friendly interface with abilities for both event creation and management by admin users, and event booking by users.",
  },
  {
    id: "8",
    title: "Number Factorisation With Client-Server System Using Shared Memory",
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
    img: "https://i.gyazo.com/3e11a530dc6b6e0756e6d58d2856414f.png",
    desc: "A client server system that communicates through shared memory to find prime factors of numbers, coded in C",
  },
  {
    id: "9",
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
    img: "https://madooei.github.io/cs421_sp20_homepage/assets/client-server-1.png",
    desc: "A client server system that communicates through a network to simulate a multiplayer game known as 'Numbers'",
  },
  {
    id: "10",
    title: "Cascade Game Recreation",
    category: "C/C++",
    link: "https://himathr.github.io/cascade.html",
    tags: [
      {
        lang: "C",
        color: "lightblue",
      },
    ],
    img: "https://i.gyazo.com/d8a61133a40d6f6eea3937acbbfab6f4.png",
    desc: "My first ever coding project! An implementation of the game 'Cascade' - a turn-based game similar to the popular mobile game Candy Crush",
  },
  {
    id: "11",
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
    img: "https://i.gyazo.com/247f6c53db868197e33e0be3c31c0af7.png",
    desc: "Data visualisation project with Tableau. I scraped this data from https://spotifycharts.com/ through a python program to get global 200 charts data for all countries from 2017-2018. This was my first Tableau project, and it aided me a lot in understanding how to procure, clean and then visualise data in a way that tells a coherent story.",
  },
];
