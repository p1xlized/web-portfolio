import { createFileRoute } from "@tanstack/react-router";
import { type CarouselApi } from "@/components/ui/carousel";
import { DownloadIcon, University } from "lucide-react";
import { motion } from "framer-motion";

import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import StudyCard from "@/components/StudyCard";
import ButtonColorful from "@/components/ui/button-colorful";
import TextRewind from "@/components/ui/text-rewind";
import TechCard from "@/components/TechCard";
import { GitHub, Reddit, LinkedIn, Discord } from "../components/icons";
import { techItems, toolsItems } from "@/lib/data/tech";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs";
import {
  BrandScroller,
  BrandScrollerReverse,
} from "@/components/ui/brand-scoller";
import {
  CodeBlock,
  CodeBlockCode,
  CodeBlockGroup,
} from "@/components/ui/code-block";
import { TextScramble } from "@/components/ui/text-scramble";
import GitHubStats from "@/components/GitHubStats";
import { TextParticle } from "@/components/ui/text-particle";
// rote
export const Route = createFileRoute("/")({
  component: App,
});
// component

function App() {
  const navigate = useNavigate();

  const [isTrigger, setIsTrigger] = useState(false);
  const transitionProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const codeLanguages = `function returnSkills() {
  const result = async fetch("/mySkills")
  return {
  "languages": ["TypeScript","Rust", "Dart","JavaSctipt","GDScript","Python"],
  "frameworks": ["ReactJS", "SolidJS","Flutter","ElysiaJS","Tauri","Tokio","Express"],
  "ORM": ["Drizzle","TypeORM", "Prisma", "Diesel"],
  "Databases": ["PostgresSQL", "MongoDB"],
  "GameEngines": ["Godot","Bevy"]
  "tools":  ["docker","nix", "linux", "blender"]
  }
}`;

  return (
    <div>
      <div id="profile" className="relative w-full h-screen overflow-hidden">
        <div className="flex items-start justify-center min-h-screen mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full p-4">
            {/* Row 1 - Big Left, Small Right */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-chart-2 rounded-lg p-6 lg:col-span-2 aspect-square lg:aspect-auto shadow-sm hover:shadow-md flex flex-col"
            >
              <h3 className="text-3xl font-semibold text-black">
                HI! My name is Alexandru Paduret
              </h3>
              <p className="text-black font-lg mt-2">
                I'm a Full Stack Developer driven by a passion for building
                seamless, intuitive user experiences. Curious by nature and
                always learning, I work across Web, Desktop, Mobile and Game
                Development, crafting solutions that are as functional as they
                are enjoyable to use.
              </p>

              {/* This spacer pushes the buttons to the bottom */}
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
              className="bg-primary rounded-lg p-6 aspect-square shadow-sm hover:shadow-md"
            >
              <img
                src="/avatars/avatar1.png"
                alt="Card Image"
                className="w-full h-full object-cover rounded-4xl"
              />
            </motion.div>

            {/* Row 2 - Small Left, Big Right */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 aspect-square">
              {/* Top Left */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-lg p-6 shadow-sm hover:shadow-md bg-cover bg-center group"
                style={{
                  backgroundImage: "url('/images/mechanicus.jpg')",
                }}
              >
                {/* Blur overlay — fades out on hover */}
                <div className="absolute inset-0 rounded-lg backdrop-blur-sm bg-black/10 transition-all duration-300 hover:backdrop-blur-0 hover:bg-transparent" />

                {/* Text content */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <TextScramble
                    className="text-2xl font-semibold"
                    as="span"
                    speed={0.01}
                    trigger={isTrigger}
                    onHoverStart={() => setIsTrigger(true)}
                    onScrambleComplete={() => setIsTrigger(false)}
                  >
                    Forge World
                  </TextScramble>
                </div>
              </motion.div>

              {/* Top Right */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-lg p-6 shadow-sm hover:shadow-md bg-cover bg-center group"
                style={{
                  backgroundImage: "url('/images/music-background.jpg')",
                }}
              >
                <div className="absolute inset-0 rounded-lg transition-all duration-300" />
                <div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  onClick={() => {
                    navigate({ to: "/music" });
                  }}
                >
                  <TextRewind text="My Hobbies" />
                </div>
              </motion.div>

              {/* Bottom full-width */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-lg p-0 shadow-sm hover:shadow-md bg-cover bg-center group col-span-2"
              >
          <div className="h-full w-full border border-gray-200 rounded-lg overflow-hidden">
            <TextParticle
              text="@svdxx"
              fontSize={60}
              particleColor="#f5e0dc"
              particleSize={1}
              particleDensity={2}
              backgroundColor="#b4befe"
            />
          </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-muted  rounded-lg p-6 lg:col-span-2 aspect-square lg:aspect-auto shadow-sm hover:shadow-md"
            >
              <Tabs>
                <TabList aria-label="History of Ancient Rome">
                  <Tab id="FoR">Languages & frameworks</Tab>
                  <Tab id="MaR">Developer Tools</Tab>
                  <Tab id="Emp">Other Skills</Tab>
                </TabList>

                <TabPanel id="FoR">
                  <motion.div {...transitionProps}>
                    <CodeBlock>
                      <CodeBlockCode
                        code={codeLanguages}
                        language="javascript"
                        theme="github-dark"
                      />
                    </CodeBlock>
                  </motion.div>
                </TabPanel>

                <TabPanel id="MaR">
                  <motion.div {...transitionProps}>
                    <div className="space-y-4 text-white text-sm">
                      {toolsItems.map((tool, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4"
                        >
                          <Badge className="text-base px-3 py-1.5 flex items-center space-x-2">
                            {tool.Icon && <tool.Icon className="w-6 h-6" />}
                            <span>{tool.name}</span>
                          </Badge>
                          <span className="text-white/80">test</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </TabPanel>

                <TabPanel id="Emp">
                  <motion.div {...transitionProps}>
                    <CodeBlock>
                      <CodeBlockCode
                        code={codeLanguages}
                        language="javascript"
                        theme="github-dark"
                      />
                    </CodeBlock>
                  </motion.div>
                </TabPanel>
              </Tabs>
            </motion.div>
          </div>
        </div>
        {/* <span className="text-white absolute bottom-26 left-1/2 transform -translate-x-1/2">
          <TextRewind text="Check me out" />
        </span> */}
      </div>
      <div
        id="tech_stack"
        className="relative w-full h-screen overflow-hidden flex flex-col"
      >
        <div className="flex flex-col items-center justify-center flex-grow space-y-6">
          {/* Subtitle */}
          <h3 className="text-white text-lg">My Tech Stack</h3>

          {/* Tech Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 gap-4 w-auto p-4">
            {techItems.map((tech, index) => (
              <TechCard
                key={index}
                name={tech.name}
                gradient={tech.gradient}
                pointer={tech.Icon}
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 bg-muted p-4 rounded-xl">
            <div>
              <p className="font-semibold text-2xl">Tools that I use</p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-white justify-center">
              {toolsItems.map((tool, index) => (
                <>
                  <Badge key={index} className="text-base px-3 py-1.5">
                    {tool.Icon && <tool.Icon className="w-10 h-10 mr-1" />}
                    {tool.name}
                  </Badge>
                </>
              ))}
            </div>
          </div>
        </div>
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
                  imageSrc={project.image}
                  type={project.type as "Web" | "Mobile" | "Game" | "API"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
