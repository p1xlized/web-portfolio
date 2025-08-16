// src/lib/data/projects.ts

import Beerbolter from "/images/beerbolter.png";
import Kira from "/images/kira.png";
import GymBud from "/images/GymBud.png";
import Biblio from "/images/biblio.png";
import City from "/images/city.png";
import SmartPiano from "/images/piano.jpg";
import Blueprints from "/images/blueprints.png";
import WebPortfolio from "/images/blueprints.png";
import type { AwardBadgeType } from "@/components/ui/award-badge";

interface Project {
  name: string;
  description: string;
  image: string;
  stack: string[];
  gh_link: string;
  type: "Web" | "Mobile" | "Game" | "API" | "IoT";
  awards?: {
    name: string;
    type: AwardBadgeType;
    place: 1 | 2 | 3 | 4;
    competition: string;
  }[];
  details?: {
    functionalities: string[];
    technologies: string[];
  };
}

export const projectsData: Project[] = [
  {
    name: "Beer & Bolter",
    description:
      "A web app that empowers Warhammer 40,000 enthusiasts to design and share their own custom Space Marine chapters...",
    image: Beerbolter,
    stack: ["React", "TanStack Router", "Tailwind CSS", "Supabase"],
    gh_link: "https://github.com/p1xlized/40k-homebrewer",
    type: "Web",
    details: {
      functionalities: [
        "Creation tool for custom Space Marine chapters lore and badges",
        "3D editor for custom color schemes and textures",
        "Community forum to share creations",
        "Personalization of user profile",
      ],
      technologies: ["React", "TanStack Router", "Tailwind CSS", "Supabase"],
    },
  },
  {
    name: "Kira",
    description:
      "A 2D platformer game about a young girl lost in the forest...",
    image: Kira,
    stack: ["Godot"],
    gh_link: "https://github.com/KittyVerse/kira-from-light-to-darkness",
    type: "Game",
    details: {
      functionalities: [
        "2 biomes to explore with its set of ennemies and particularities",
        "Multi-Level Map suited well for in depth exploration.",
        "Interactive environment",
        "Player progression that evolves with the player's actions",
      ],
      technologies: ["Godot", "GDScript"],
    },
  },
  {
    name: "GymBud",
    description:
      "An AI-driven wellbeing mobile app that helps users in a playful, friendly way...",
    image: GymBud,
    stack: ["Flutter", "Supabase", "Elysia", "OpenAI"],
    gh_link: "https://github.com/orgs/Hackathon2024v2/repositories",
    type: "Mobile",
    details: {
      functionalities: [
        "AI-driven workout recommendations",
        "Personal pet that evolves with you",
        "Nutrition adapts to your needs",
        "Exercise Catalog",
        "Exercise Timer and Tracker",
      ],
      technologies: ["Flutter", "Supabase", "Elysia", "OpenAI"],
    },
    awards: [
      {
        name: "Third Place",
        type: "bronze",
        competition: "AMC 2024 Mobile Hackathon",
        place: 3,
      },
      {
        name: "Best Design",
        type: "design",
        competition: "AMC 2024 Mobile Hackathon",
        place: 2,
      },
    ],
  },
  {
    name: "Biblio API",
    description:
      "An API designed to manage books in a smart library system without the need for on-site personnel...",
    image: Biblio,
    stack: ["Bun.js", "Elysia", "PostgreSQL"],
    gh_link: "https://github.com/p1xlized/biblio-api",
    type: "API",
    details: {
      functionalities: [
        "Secure connection and data storage",
        "Flexible and easy adaptable to different usages",
        "Manages loan books and also send reminders",
      ],
      technologies: ["Bun.js", "Elysia", "PostgreSQL", "DrizzleORM"],
    },
  },
  {
    name: "CityLife",
    description:
      "A mobile app that helps people engage with their region or city...",
    image: City,
    stack: ["React Native", "Expo", "Supabase", "Ui Kitten"],
    gh_link: "https://github.com/p1xlized/Hackathon2024App",
    type: "Mobile",
    details: {
      functionalities: [
        "Secure connection and data storage",
        "Flexible and easy adaptable to different usages",
        "Manages loan books and also send reminders",
      ],
      technologies: ["Expo", "React Native", "UI Kittens", "Supabase"],
    },
  },
  {
    name: "SmartPiano",
    description:
      "An innovative piano using Arduino technology where AI plays a central role...",
    image: SmartPiano,
    stack: ["Arduino", "IoT", "OpenAI", "MediaPipe"],
    gh_link: "https://gitlab.com/AndyyTo/piano-iot",
    type: "IoT",
    details: {
      functionalities: [
        "Remote control via AliveCode",
        "Gesture recognition for playing notes",
        "Chords and melodies generation",
        "Physical buttons to play",
      ],
      technologies: ["Arduino", "MediaPipe", "AliveCode", "OpenAI"],
    },
  },
  {
    name: "Blueprints.js",
    description:
      "An experimental UI framework aiming to build interactive frontends without relying on traditional HTML tags...",
    image: Blueprints,
    stack: ["JavaScript", "Vite"],
    gh_link: "https://github.com/p1xlized/blueprint-js",
    type: "Web",
  },
  {
    name: "Web Portfolio",
    description:
      "A personal portfolio rebuilt with React, TypeScript, Tailwind CSS, and Shadcn/ui components...",
    image: WebPortfolio,
    stack: ["React", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    gh_link: "https://github.com/yourusername/ecommerce-backend",
    type: "Web",
  },
];
