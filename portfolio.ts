import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  // FeedbackType,
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
    "A skilled Communication Engineer and Cybersecurity specialist with a solid background in computer networking and database management. As a passionate Full Stack web developer, I have hands-on experience building web applications using Python, React.js, and Cloud technologies. I specialize in designing, developing, and securing web apps, with expertise in secure coding practices, threat analysis, and vulnerability management. My focus extends to both front-end and back-end security, including encryption, authentication protocols, and API security.",
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
    progressPercentage: "85",
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "90",
  },
  {
    Stack: "Application Security",
    progressPercentage: "90",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "SRH Berlin University of Applied Sciences",
    subHeader: "Master of Computer Science in Cybersecurity",
    duration: "",
    desc: "",
    descBullets: [],
  },
  {
    schoolName: "German Jordanian University (GJU)",
    subHeader: "Bachelor of Science in Communication Engineering",
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
    date: "2022 - 2024",
    desc: "Developed dynamic and responsive UIs with React.js, implemented interactive features with JavaScript, and built web pages using HTML and CSS. Integrated RESTful APIs for front-end and back-end communication and managed databases with MongoDB. Ensured code quality with Jest testing and collaborated using Git, GitHub, and Azure DevOps for version control and seamless integration.",
  },
  {
    role: "Data Coordinator/Low Current Engineer",
    company: "Al Fayhaa Construction and Contracting",
    companyLogo: "/img/icons/common/af.png",
    date: "2021 - 2022",
    desc: "Developed expertise in MS Dynamics 365 ERP, supporting business processes through integrated applications. Managed and modified data in Excel for item listings, pricing, and quotation validation. Regularly updated records and prepared detailed reports to ensure the accuracy and success of project implementations.",
  },
  {
    role: "Application Developer",
    company: "Création Gross GmbH & Co. KG",
    companyLogo: "/img/icons/common/creation-gross.webp",
    date: "2017 - 2018",
    desc: "Crafting diverse web applications. Developed expertise in SQL Server and client-server projects using C#, focused on monitoring and optimizing the performance of ERP systems, particularly Microsoft Dynamics AX..",
  },
  
];

export const projects: ProjectType[] = [
  {
    name: "Portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/HamzaJ94/Portfolio",
    link: "https://portfolio-git-main-hamzaj94s-projects.vercel.app/",
  },
  {
    name: "Secured-App",
    desc: "A secure web app built with React.js and Express.js to enhance the security of React-based applications. This project integrates key security features and best practices, addressing vulnerabilities like XSS and CSRF, providing developers with a practical tool to build more secure React apps.",
    github: "https://github.com/HamzaJ94/Secured-App",
    link: "https://secured-app-lake.vercel.app/login",
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "test",
//     role: "..",
//     feedback:
//       "Feedback section currently empty.",
//   },
// ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hamza Jaber",
  description: greetings.description,
  author: "Hamza Jaber",
  url: "https://portfolio-git-main-hamzaj94s-projects.vercel.app/",
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
