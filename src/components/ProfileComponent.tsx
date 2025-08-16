import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import ButtonColorful from "./ui/button-colorful";

import { Briefcase, DownloadIcon, GraduationCap } from "lucide-react";
import { ExperienceBadge } from "./ExperienceComponent";
import { Badge } from "./ui/badge";
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
} from "./icons";
import EducationCard from "./EducationCard";
import TextRewind from "./ui/text-rewind";
import { useNavigate } from "@tanstack/react-router";
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from "./ui/text-stagger-hover";

export default function ProfileComponent() {
  const navigate = useNavigate();
  const socials = [
    {
      icon: <GitHub />,
      label: "Github",
      href: "https://github.com/yourusername",
    },
    {
      icon: <Reddit />,
      label: "Reddit",
      href: "https://reddit.com/u/yourusername",
    },
    {
      icon: <Discord />,
      label: "Discord",
      href: "https://discord.gg/yourinvite",
    },
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <DownloadIcon />,
      label: "Download my Resume",
      href: "/resume.pdf", // link to your resume file
      download: true,
    },
  ];
  const skills = [
    { icon: React, label: "React" },
    { icon: Solidjs, label: "SolidJS" },
    { icon: ElysiaJS, label: "ElysiaJS" },
    { icon: Flutter, label: "Flutter" },
    { icon: DrizzleORM, label: "Drizzle" },
    { icon: NestJS, label: "NestJS" },
    { icon: GodotEngine, label: "Godot" },
    { icon: TypeScript, label: "TypeScript" },
    { icon: Python, label: "Python" },
    { icon: Rust, label: "Rust" },
    { icon: PostgreSQL, label: "Postgres" },
    { icon: Linux, label: "Linux" },
  ];
  return (
    <>
      <div className="flex items-start justify-center min-h-screen mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-[1fr_2fr] gap-6 max-w-6xl w-full p-4">
          {/* Row 1 - Big Left, Small Right */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-chart-2 rounded-lg p-6 lg:col-span-2 shadow-sm hover:shadow-md flex flex-col"
          >
            {/* Name with animation */}
            <TextStaggerHover
              as="h3"
              className="text-5xl font-bold uppercase text-primary-foreground"
            >
              <TextStaggerHoverActive
                animation={"top"}
                className="opacity-80"
                staggerDirection="middle"
              >
                Alexandru Paduret
              </TextStaggerHoverActive>
              <TextStaggerHoverHidden
                className="origin-bottom"
                animation="bottom"
                staggerDirection="middle"
              >
                Alexandru Paduret
              </TextStaggerHoverHidden>
            </TextStaggerHover>

            {/* Subtitle */}
            <div className="flex items-center gap-2 mt-2 text-lg text-black">
              <TextStaggerHover
                as="h2"
                className="text-2xl font-bold uppercase text-primary-foreground"
              >
                <TextStaggerHoverActive
                  animation={"top"}
                  className="opacity-80"
                  staggerDirection="middle"
                >
                  Full Stack Developer
                </TextStaggerHoverActive>
                <TextStaggerHoverHidden
                  className="origin-bottom"
                  animation="bottom"
                  staggerDirection="middle"
                >
                  Full Stack Developer
                </TextStaggerHoverHidden>
              </TextStaggerHover>
            </div>

            {/* Quote */}

            <div className="flex justify-start gap-4 mt-4 text-3xl">
              <span role="img" aria-label="Canadian Flag">
                🇨🇦
              </span>
              <span role="img" aria-label="Finnish Flag">
                🇫🇮
              </span>
            </div>

            <div className="flex-grow" />

            {/* Flags */}

            {/* Social Buttons */}
            <div className="flex justify-between flex-wrap gap-2 mt-4">
              {socials.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={item.download || undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ButtonColorful
                    gradient={["#89b4fa", "#74c7ec", "#cba6f7"]}
                    className="text-black"
                  >
                    {item.icon}
                    {item.label}
                  </ButtonColorful>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-primary rounded-lg p-6 shadow-sm hover:shadow-md relative"
          >
            <img
              src="/avatars/avatar1.png"
              alt="Card Image"
              className="w-full h-full object-cover rounded-4xl"
            />
            <div className="absolute top-22 -right-18 transform rotate-40 origin-top-right">
              <ExperienceBadge variant="sticker" title="Open to Work" />
            </div>
          </motion.div>
          {/* Row 2 - Small Left, Big Right */}
          {/* Row 2 - Small Left, Big Right */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-lg bg-chart-3/50 shadow-sm flex flex-col gap-6 p-4"
          >
            <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
              <GraduationCap size={20} />
              Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.label}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Badge
                    variant="muted"
                    className="flex items-center gap-2 w-full p-2 transition-all rounded-lg cursor-pointer"
                  >
                    <skill.icon />
                    <span className="font-bold">{skill.label}</span>
                  </Badge>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-auto relative rounded-lg shadow-sm group cursor-pointer h-full overflow-hidden"
              onClick={() => navigate({ to: "/music" })}
            >
              {/* Blurry background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-[filter] duration-500 filter"
                style={{
                  backgroundImage: "url('/images/music-background.jpg')",
                }}
              />

              {/* Optional overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

              {/* Unblurred text */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <TextRewind text="My Hobbies" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-muted/40 rounded-lg p-6 pb-8 lg:col-span-2 shadow-sm hover:shadow-md"
          >
            <div className="space-y-6">
              <div>
                <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground mb-4">
                  <GraduationCap size={20} />
                  Education
                </h2>
                <EducationCard
                  university="University of Eastern Finland"
                  degree="BSc in Computer Science"
                  years="2025 - 2028"
                  icon="/icons/uef.jpg"
                  details="Studied software engineering, algorithms, and AI. Graduated with honors."
                />
                <div className="p-1" />
                <EducationCard
                  university="College de Maisonneuve"
                  degree="DEC in Software Development"
                  years="2020 - 2025"
                  icon="/icons/m9.png"
                  details="Studied web development, mobile development, and basic programming concepts."
                />
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground mb-4">
                  <Briefcase size={20} />
                  Work Experience
                </h2>
                <EducationCard
                  university="PhonIA"
                  degree="Full Stack Developper"
                  years="02/2024 - 08/2025"
                  icon="/icons/phonia.ico"
                  details="Developper the web platform that help Ortophonist examine and store patient data"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
