// src/lib/data/projects.ts

import Beerbolter from "/images/beerbolter.png";
import Kira from "/images/kira.png";
import GymBud from "/images/GymBud.png";
import Biblio from "/images/biblio.png";
import City from "/images/city.png";
import SmartPiano from "/images/piano.jpg";
import Blueprints from "/images/blueprints.png";
import WebPortfolio from "/images/blueprints.png";

interface Project {
  name: string;
  description: string;
  image: string; // changed from image_url
  stack: string[];
  gh_link: string;
}

export const projectsData: Project[] = [
  {
    name: "Beer & Bolter",
    description:
      "A web app that empowers Warhammer 40,000 enthusiasts to design and share their own custom Space Marine chapters...",
    image: Beerbolter,
    stack: ["React", "TanStack Router", "Tailwind CSS", "Supabase"],
    gh_link: "https://github.com/p1xlized/40k-homebrewer",
  },
  {
    name: "Kira",
    description:
      "A 2D platformer game about a young girl lost in the forest...",
    image: Kira,
    stack: ["Godot"],
    gh_link: "https://github.com/KittyVerse/kira-from-light-to-darkness",
  },
  {
    name: "GymBud",
    description:
      "An AI-driven wellbeing mobile app that helps users in a playful, friendly way...",
    image: GymBud,
    stack: ["Flutter", "Supabase", "Elysia", "OpenAI"],
    gh_link: "https://github.com/orgs/Hackathon2024v2/repositories",
  },
  {
    name: "Biblio API",
    description:
      "An API designed to manage books in a smart library system without the need for on-site personnel...",
    image: Biblio,
    stack: ["Bun.js", "Elysia", "PostgreSQL"],
    gh_link: "https://github.com/p1xlized/biblio-api",
  },
  {
    name: "CityLife",
    description:
      "A mobile app that helps people engage with their region or city...",
    image: City,
    stack: ["React Native", "Expo", "Supabase", "Ui Kitten"],
    gh_link: "https://github.com/p1xlized/Hackathon2024App",
  },
  {
    name: "SmartPiano",
    description:
      "An innovative piano using Arduino technology where AI plays a central role...",
    image: SmartPiano,
    stack: ["Arduino", "IoT", "OpenAI", "MediaPipe"],
    gh_link: "https://gitlab.com/AndyyTo/piano-iot",
  },
  {
    name: "Blueprints.js",
    description:
      "An experimental UI framework aiming to build interactive frontends without relying on traditional HTML tags...",
    image: Blueprints,
    stack: ["JavaScript", "Vite"],
    gh_link: "https://github.com/p1xlized/blueprint-js",
  },
  {
    name: "Web Portfolio",
    description:
      "A personal portfolio rebuilt with React, TypeScript, Tailwind CSS, and Shadcn/ui components...",
    image: WebPortfolio,
    stack: ["React", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    gh_link: "https://github.com/yourusername/ecommerce-backend",
  },
];
