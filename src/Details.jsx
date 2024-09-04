import logo from "./assets/MK.png";
import profile from "./assets/profile.jpg";
import html from "./assets/technologies/html.png";
import css from "./assets/technologies/css.png";
import sass from "./assets/technologies/sass.png";
import js from "./assets/technologies/js.png";
import react from "./assets/technologies/react.png";
import tailwind from "./assets/technologies/tailwind.png";
import bootstrap from "./assets/technologies/bootstrap.png";
import vscode from "./assets/technologies/vscode.png";
import github from "./assets/technologies/github.png";
import git from "./assets/technologies/git.png";
import npm from "./assets/technologies/npm.png";
import figma from "./assets/technologies/figma.png";
import mousui from "./assets/projects/mous-ui.PNG";
import login from "./assets/projects/login-animeted.PNG";
import portfolio from "./assets/projects/portfolio.PNG";

export const logos = {
  logo: logo,
};

export const personalDetails = {
  name: "Moussaab Kralil",
  tagline: "I Frontend Web Developer",
  img: profile,
  about: `I am a Frontend web developer with about four years of coding experince.My journey began with C programming, and i later transitioned to web technologies such as HTML,CSS and JavaScript.Ihold a bachelor's degree in computer Sience and am currently pursuig my master's degree while continuing to develop my skills in the feild`,
};

export const gitHubUrl = {
  github: "https://github.com/Kralil-Moussaab",
};

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

export const projectDetails = [
  {
    title: "Mous Ui",
    image: mousui,
    description: `This project is about design HTML elements and getting their own code,It only works on a computer screen because it is not compatible with a phone`,
    technologie: "React/CSS",
    previewLink: "https://mous-ui.netlify.app",
    githubLink: "https://github.com/Kralil-Moussaab/Mous-UI-React",
  },
  {
    title: "Login Animated",
    image: login,
    description: `This is a project to login follow the web  site Mous Ui`,
    technologie: "React/CSS",
    previewLink: "https://login-mous-ui.netlify.app",
    githubLink: "https://github.com/Kralil-Moussaab/React-Login-animated",
  },
  {
    title: "My Portfolio",
    image: portfolio,
    description: `This project is introduce myself in terms of experience and thechnology that l use `,
    technologie: "React/Tailwind",
    previewLink: " https://kralil-moussaab.netlify.app",
    githubLink: "https://github.com/Kralil-Moussaab/My-Portfolio-React",
  },
];

export const contactDetails = {
  email: "moussaabkralil@gmail.com",
  phone: "+213 663522516",
};
