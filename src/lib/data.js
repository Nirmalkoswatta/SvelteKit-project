// src/lib/data.js
// Centralized data for easy updates

export const hero = {
  name: "Nirmal Koswatta",
  tagline: "Building immersive digital experiences.",
  intro: "Hi, I'm Nirmal — a passionate developer focused on crafting modern, performant web apps.",
  branding: {
    logo: "/logo.svg", // Replace with your logo path
    themeColor: "#5f6fff"
  }
};

export const about = {
  text: `I'm a full-stack developer with a love for clean code, beautiful UI, and seamless UX. I specialize in React, Svelte, and modern web technologies. Always learning, always building.`,
  skills: [
    "JavaScript", "TypeScript", "React", "Redux", "Svelte", "Node.js", "SCSS", "Figma", "Firebase"
  ]
};

export const featuredProjects = [
  {
    title: "Record Management System",
    tech: ["React", "Redux"],
    url: "https://record-management-c97e4.web.app/",
    description: "A robust system for managing records efficiently with a modern UI and real-time updates."
  },
  {
    title: "Fruit App",
    tech: ["React", "Tailwind"],
    url: "https://getfruitapp-kosa.web.app/login",
    description: "A fresh, user-friendly app for fruit ordering and management."
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Nirmalkoswatta",
    icon: "tabler:brand-github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nirmal-koswatta",
    icon: "tabler:brand-linkedin"
  }
];
