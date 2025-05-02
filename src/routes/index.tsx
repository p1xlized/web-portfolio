import { createFileRoute } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Calendar,
  ChevronDown,
  Clock,
  Code,
  FileText,
  University,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { useNavigate } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import StudyCard from "@/components/StudyCard";
export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  console.log("current :", current);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div>
      <div id="profile" className="relative w-full h-screen overflow-hidden">
        <div className="flex items-center justify-center min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full p-4">
            {/* Row 1 - Big Left, Small Right */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-chart-2 rounded-lg p-6 lg:col-span-2 aspect-square lg:aspect-auto shadow-sm hover:shadow-md"
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
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-lg p-6 aspect-square shadow-sm hover:shadow-md bg-cover bg-center group"
              style={{ backgroundImage: "url('/images/music-background.jpg')" }}
            >
              {/* Blurred overlay with transition on hover */}
              <div className="absolute inset-0 rounded-lg transition-all duration-300" />

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Button
                  variant="secondary"
                  onClick={() => {
                    navigate({ to: "/music" });
                  }}
                >
                  Explore my Music
                </Button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-muted  rounded-lg p-6 lg:col-span-2 aspect-square lg:aspect-auto shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold flex items-center">
                <University className="mr-2" /> Education
              </h3>

              <p className="text-black mt-4">
                <StudyCard />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div id="tech_stack" className="h-screen py-10 w-full">
        <div className="flex justify-center">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
      <div id="projects" className="relative w-full h-screen overflow-hidden">
        <div className="flex items-center justify-center min-h-screen">
          <Carousel
            setApi={setApi}
            className="w-full max-w-xs"
            opts={{ loop: true }}
          >
            <CarouselContent className="py-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="">
                  <Card
                    className={cn("transition-transform duration-500", {
                      "scale-[0.6]": index !== current - 1,
                    })}
                  >
                    <CardContent className="relative aspect-square p-4 overflow-hidden">
                      {/* Background image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center w-128 h-72"
                        style={{
                          backgroundImage: `url(https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=1764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                        }}
                      />

                      {/* Overlay + Text */}
                      <div className="relative z-10 flex h-full w-full items-center justify-center bg-black/40">
                        <span className="text-4xl font-semibold text-white">
                          {index + 1}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom arrows container at bottom center */}
            <div className="mt-2 flex justify-center space-x-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "Jan 2024",
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Mar 2024",
    content: "Core features implementation and testing.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: "Apr 2024",
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Release",
    date: "May 2024",
    content: "Final deployment and release.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];
