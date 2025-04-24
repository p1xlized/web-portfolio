import { createFileRoute } from "@tanstack/react-router";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import Technologies from "../lib/data/tech.json";
import { EvervaultCard } from "@/components/ui/evervault-card";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "../lib/data/projects.ts";
import { FocusCards } from "@/components/ui/focus-cards.tsx";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <div id="profile" className="relative w-full h-screen overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-16 text-center">
          <div className="flex items-center justify-center w-full gap-8">
            <div>
              {/* <Avatar className="w-40 h-40">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}
              <EvervaultCard
                img_url="https://github.com/shadcn.png"
                className="w-64 h-64"
              />
            </div>

            <div className="text-2xl font-semibold text-primary">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.025}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                }}
              >
                {`Hello! My name is Alexandru`}
              </VerticalCutReveal>

              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.025}
                staggerFrom="last"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                  delay: 0.5,
                }}
              >
                {`I'm a Software Developer from Montreal 🇨🇦`}
              </VerticalCutReveal>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div id="projects" className="relative w-full h-screen overflow-hidden">
        {/* Gradient Background */}
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-1">
            {projectsData.map(
              (
                project: { name: string; description: string; img_url: string },
                index: number,
              ) => (
                <ProjectCard
                  key={index}
                  title={project.name}
                  description={project.description}
                  img_src={project.image}
                />
              ),
            )}
            {/* <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard /> */}
          </div>
        </div>
      </div>
      <div id="contact" className="h-screen py-10 w-full">
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
const cards = [
  {
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Valley of life",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sala behta hi jayega",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camping is for pros",
    src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The road not taken",
    src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
];
