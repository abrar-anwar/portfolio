'use strict';

/**
 * All personal/profile copy for the site lives here. Nothing in the
 * templates or build script should hard-code prose — if the copy changes,
 * this is the only file that needs to change.
 */
module.exports = {
  name: "Abrar Anwar",
  role: "Freelance Developer",
  terminalPrompt: "root@abrar:~$ whoami",
  heroHeading: "Hi, I'm Abrar, a Freelance Developer.",
  contactEmail: "abraranwar050@gmail.com",
  contactSubject: "Mail from Portfolio",

  servicesNote:
    "As an experienced Shopify developer, I specialize in theme development and customization, along with backend" +
    "solutions tailored to each merchant's needs. With expertise in Liquid, Cart Transform Functions, and GraphQL-driven" +
    "app development, I deliver exceptional storefronts built to perform across every layer of the store.",

  about: {
    heading: "ABOUT_ME",
    paragraphs: [
      "Currently, I work as a freelance Shopify developer, handling both theme development/customization and backend" +
        "work for merchants looking to build faster, more tailored stores. My work spans building custom storefronts with" +
        "Liquid, developing Cart Transform Functions, and building app-level functionality using Shopify's GraphQL APIs.",
      "My focus has been on theme development — building custom sections, Theme Customizer schema blocks, and Liquid",
      "templating — while progressively moving into the more technical layers of the Shopify ecosystem: Functions," +
        "checkout customization, and app development using TypeScript and the Shopify CLI.",
      "I'm continuing to deepen my expertise in Shopify's backend capabilities, particularly around Cart Transform" +
        "Functions, checkout extensibility, and GraphQL-driven app development, as I move toward building more complete," +
        "end-to-end solutions for merchants rather than just storefront-level work.",
    ],
  },

  skills: {
    heading: "SKILLS",
    intro:
      "Full-stack developer with primary focus on Shopify and JavaScript ecosystem.",
    groups: [
      [
        "Shopify + Liquid (Ruby)",
        "HTML/HTML5",
        "CSS/CSS3/SASS/SCSS",
        "Shopify Cart Transform Functions",
        "Shopify GraphQL Admin API",
        "Shopify CLI",
        "Shopify App Development (custom apps)",
        "Theme Customizer (Schema, Sections, Blocks)",
      ],
      [
        "Javascript",
        "React",
        "NextJS/Gatsby",
        "Node + Express (MERN Stack)",
        "MongoDB",
        "JSON, API",
      ],
    ],
  },

  projectsIntro: {
    heading: "PROJECTS",
    subheading:
      "I have worked on dozens of projects so I have picked only the latest for you.",
  },

  seo: {
    title: "Shopify Developer | Custom Theme Development",
    description:
      "Abrar Anwar - Full Stack Shopify Developer | NodeJS | ReactJS ",
    siteUrl: "https://abrar-anwar.github.io/portfolio/",
  },
};
