import { createFileRoute } from "@tanstack/react-router";
import { projectsData } from "@/lib/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { BackgroundCircles } from "@/components/ui/background-circle";
import ProfileComponent from "@/components/ProfileComponent";
import { Discord, GitHub, LinkedIn, Reddit } from "@/components/icons";

// rote
export const Route = createFileRoute("/")({
  component: App,
});

function App() {
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
