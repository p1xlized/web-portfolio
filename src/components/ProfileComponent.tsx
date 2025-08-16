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

export default function ProfileComponent() {
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
            <h3 className="text-3xl font-semibold text-black">
              HI! My name is Alexandru Paduret
            </h3>
            <p className="text-black font-lg mt-2">
              I'm a Full Stack Developer driven by a passion for building
              seamless, intuitive user experiences. Curious by nature and always
              learning, I work across Web, Desktop, Mobile and Game Development,
              crafting solutions that are as functional as they are enjoyable to
              use.
            </p>
            <div className="flex-grow" />
            <Separator />
            <div className="flex justify-between flex-wrap gap-2 mt-4">
              <ButtonColorful
                gradient={["#89b4fa", "#74c7ec", "#cba6f7"]}
                className="text-black"
              >
                <GitHub />
                Github
              </ButtonColorful>
              <ButtonColorful
                gradient={["#89b4fa", "#74c7ec", "#cba6f7"]}
                className="text-black"
              >
                <Reddit />
                Reddit
              </ButtonColorful>
              <ButtonColorful
                gradient={["#89b4fa", "#74c7ec", "#cba6f7"]}
                className="text-black"
              >
                <Discord />
                Discord
              </ButtonColorful>
              <ButtonColorful
                gradient={["#89b4fa", "#74c7ec", "#cba6f7"]}
                className="text-black"
              >
                <LinkedIn />
                LinkedIn
              </ButtonColorful>
              <ButtonColorful
                gradient={["#89b4fa", "#74c7ec", "#cba6f7"]}
                className="text-black"
              >
                <DownloadIcon />
                Download my Resume
              </ButtonColorful>
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
            className="rounded-lg lg:col-span-1 bg-chart-3/80 shadow-sm hover:shadow-m flex flex-col gap-6"
          >
            <div className="grid grid-cols-3 gap-2 p-2">
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <React />
                  <span className="font-bold text-lg">React</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <Solidjs />
                  <span className="font-bold text-base">SolidJS</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <ElysiaJS />
                  <span className="font-bold text-base">ElysiaJS</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <Flutter />
                  <span className="font-bold text-lg">Flutter</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <DrizzleORM />
                  <span className="font-bold text-lg">Drizzle</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <NestJS />
                  <span className="font-bold text-lg">NestJS</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <GodotEngine />
                  <span className="font-bold text-lg">Godot</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <TypeScript />
                  <span className="font-bold text-xs">Type Script</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <Python />
                  <span className="font-bold text-lg">Python</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <Rust />
                  <span className="font-bold text-lg">Rust</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <PostgreSQL />
                  <span className="font-bold text-base">Potgres</span>
                </div>
              </Badge>
              <Badge
                variant="muted"
                className="flex justify-start items-center gap-2 w-full my-2"
              >
                <div className="ml-1 flex items-center gap-2">
                  <Linux />
                  <span className="font-bold text-base">Linux</span>
                </div>
              </Badge>
            </div>
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
