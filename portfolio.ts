import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Hamza Jaber",
  title: "Hi all, I'm Hamza",
  description:
    "A Communication Engineer/Cyebersecurity specialist with a background in computer networking and database management. Also a passionate Full Stack web developer with experience developing Full Stack web applications with Python, React.js, and Cloud Technologies. I am interested in learning new technologies and implementing them in projects.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "HamzaJ94",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: "https://www.linkedin.com/in/hamza-jaber-4ba560156/",
  github: "https://github.com/HamzaJ94",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js & Node.js"),
        emoji("⚡ Building RESTful APIs in React & Swagger Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "CSS",
          iconifyTag: "skill-icons:css",
        },
        {
          skillName: "HTML",
          iconifyTag: "skill-icons:html",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm-icon",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "logos:nextjs-icon",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs-icon-alt",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", 
    progressPercentage: "80",
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "85",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "SRH Berlin University of Applied Sciences",
    subHeader: "Master of Science in Computer Science | Focus on Cyber Security",
    duration: "",
    desc: "",
    descBullets: [],
  },
  {
    schoolName: "Technical University of Applied Sciences Würzburg-Schweinfurt (THWS)",
    subHeader: "Bachelor's studies in Electrical, Electronics and Communications Engineering",
    duration: "",
    desc: "",
    descBullets: [],
  },
  {
    schoolName: "Technical University of Applied Sciences Würzburg-Schweinfurt (THWS)",
    subHeader: "Bachelor's studies in Electrical, Electronics and Communications Engineering",
    duration: "",
    desc: "",
    descBullets: [], 
  },
  {
    schoolName: "German Jordanian University (GJU)",
    subHeader: "Bachelor of Sciences in Communication Engineering",
    duration: "",
    desc: "",
    descBullets: [], 
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer",
    company: "50Hertz Transmission GmbH",
    companyLogo: "/img/icons/common/Referenz_50Hertz_neu.webp",
    date: "2022 - Present",
    desc: "I crafted backends for diverse web apps, APIs. Implemented PyTest for automated unit and integration testing, of manual testing each sprint.",
  },
  {
    role: "Data Coordinator - Low Current Engineer",
    company: "Al Fayhaa Construction and Contracting",
    companyLogo: "/img/icons/common/af.png",
    date: "Feb 2021 - Feb 2022",
    desc: "Collaborated across teams to surpass client expectations.",
  },
  {
    role: "Applications Developer",
    company: "Carl Gross",
    companyLogo: "/img/icons/common/creation-gross.webp",
    date: "Dec 2017 - May 2018",
    desc: "Crafting diverse web applications . Proficiently set up and optimized applications on Linux , guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Data Entry Assistant",
    company: "Jordan Radio and Television Corporation",
    companyLogo: "/img/icons/common/1631317050604.jpeg",
    date: "Dec 2016 - Jan 2017",
    desc: "...",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Test",
    desc: "....",
    link: "https://",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "test",
    role: "..",
    feedback:
      "...",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hamza Jaber",
  description: greetings.description,
  author: "Hamza Jaber",
  url: "https://portfolio-git-portfolio-hamzaj94s-projects.vercel.app",
  keywords: [
    "Hamza",
    "Hamza Jaber",
    "@HamzaJ94",
    "HamzaJ94",
    "Portfolio",
    "Hamza Portfolio ",
    "Hamza Jaber Portfolio",
  ],
};
