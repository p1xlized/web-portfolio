import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  DownloadIcon,
  Figma,
  Github,
  GraduationCap,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import ButtonColorful from "@/components/ui/button-colorful";
import {
  GitHub,
  Reddit,
  LinkedIn,
  Discord,
  React,
  Solidjs,
  TypeScript,
  Flutter,
  ElysiaJS,
  DrizzleORM,
  NestJS,
  GodotEngine,
  Rust,
  PostgreSQL,
  Python,
  Linux,
} from "../components/icons";
import { Separator } from "@/components/ui/separator";
import { projectsData } from "@/lib/data/projects";
import ProjectCard from "@/components/ProjectCard";

import Footer from "@/components/Footer";
import type { Experience } from "@/components/ProfileComponent";

import { ExperienceBadge } from "@/components/ExperienceComponent";
import EducationCard from "@/components/EducationCard";

import { BackgroundCircles } from "@/components/ui/background-circle";
import { Badge } from "@/components/ui/badge";
import ProfileComponent from "@/components/ProfileComponent";

// rote
export const Route = createFileRoute("/")({
  component: App,
});

// component
const getRandomSize = () =>
  Math.random() > 0.7 ? "col-span-2 row-span-2" : "";
function App() {
  const navigate = useNavigate();
  const [isTrigger, setIsTrigger] = useState(false);
  const myExperiences: Experience[] = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      description:
        "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
      technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
    },
    {
      title: "Frontend Developer",
      company: "WebTech Studios",
      period: "2018 - 2021",
      description:
        "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
    },
  ];
  const links = [
    { title: "GitHub", icon: <GitHub />, href: "#" },
    { title: "Reddit", icon: <Reddit />, href: "#" },
    { title: "LinkedIn", icon: <LinkedIn />, href: "#" },
    { title: "discord", icon: <Discord />, href: "#" },
    //   { title: "YouTube", icon: <Youtube />, href: "#" },
    //   { title: "Instagram", icon: <Instagram />, href: "#" },
  ];
  const doubledIndexes = new Set<number>();
  links.forEach((_, i) => {
    if (Math.random() > 0.7) doubledIndexes.add(i);
  });

  return (
    <div>
      <div id="profile" className="relative w-full h-screen overflow-hidden">
        <ProfileComponent />
      </div>
      <div id="projects" className="relative w-full h-screen overflow-hidden">
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center justify-center flex-grow space-y-6">
            {/* Subtitle */}
            <h3 className="text-white text-lg">My Tech Stack</h3>

            {/* Tech Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-auto p-4">
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.name}
                  description={project.description}
                  img_src={project.image}
                  type={project.type as "Web" | "Mobile" | "Game" | "API"}
                  awards={project.awards || null}
                  details={project.details || null}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="relative w-full h-screen overflow-hidden flex flex-col"
      >
        <BackgroundCircles />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
