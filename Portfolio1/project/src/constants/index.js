import project1 from "../assets/projects/proj-1.jpg";
import project2 from "../assets/projects/proj-2.jpg";

export const HERO_CONTENT = `Goal-oriented Software Developer with expertise and passion in HTML5, CSS3, JavaScript, and Java, coupled with advanced MS Excel skills honed through a data management internship. seeking to leverage this skill set to contribute effectively in dynamic environments and actively pursue DSA in JAVA for enhanced proficiency in Oops. Eager to collaborate with a forward-thinking team, utilising creativity, communication, and leadership skills to drive impactful solutions and organisational success.`;

export const EXPERIENCES = [
  {
    year: "Dec' 2022 - Mar' 2023",
    role: "DATA MANAGEMENT INTERN",
    company: "Sister Nivedita University.",
    description: `Worked as a Data Management intern for two months at Sister Nivedita University's administration wing.This internship helped to gain advanced-level skills in MS Excel like - Charts, pivot tables, Logical functions, Lookup functions, and Formulas.`,
    technologies: ["MS Excel"],
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Weather checking WebApp",
    image: project1,
    description:
      "A dynamic weather-checking web application, storing real-time data for 200 + cities. Features include temperature, humidity, and wind speed updates. Utilised APIs for accurate information retrieval and designed an intuitive user interface for seamless interaction.",
    technologies: ["HTML", "CSS", "JavaScript"],
    alink: "https://weathercheck-sagar.netlify.app/",
  },
  {
    title: "Flavor Fusion - Recipe WebApp",
    image: project2,
    description:
      "A dynamic recipe web app featuring over 500 recipes! Crafted using HTML, CSS, and JavaScript, this project showcases my proficiency in API integration for fetching and displaying recipes. The App explores a responsive interface designed for seamless culinary inspiration.",
    technologies: ["HTML", "CSS", "JavaScript"],
    alink: "https://recipee-sagar.netlify.app/",
  },
];
