import * as React from "react";
import { ExpandableCard } from "./ui/expandable-card";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from "./ui/carousel";

interface ProjectCardProps {
  title: string;
  img_src: string;
  description: string;
  type: "Web" | "Mobile" | "Game" | "API" | "IoT";
  awards:
    | {
        name: string;
        place: string;
      }[]
    | null;
  details?: {
    functionalities: string[];
    technologies: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  img_src,
  description,
  type,
  awards,
  details,
}: ProjectCardProps) => {
  return (
    <div>
      <ExpandableCard
        title={title}
        src={img_src}
        description={description}
        classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
        type={type}
        awards={awards}
      >
        <div className="w-full">
          <h4>Functionalities</h4>
          {details?.functionalities?.map((func, index) => (
            <p key={index}>{func}</p>
          ))}
          <h4>Technologies</h4>
          {details?.technologies?.map((tech, index) => (
            <Badge variant="blue" key={index}>
              {tech}
            </Badge>
          ))}

          {/* Center container */}
          <div className="flex justify-center mt-4 w- full">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="p-4">
                  <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                    1
                  </div>
                </CarouselItem>
                <CarouselItem className="p-4">
                  <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                    2
                  </div>
                </CarouselItem>
                <CarouselItem className="p-4">
                  <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                    3
                  </div>
                </CarouselItem>
                <CarouselItem className="p-4">
                  <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                    4
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselNavigation alwaysShow />
              <CarouselIndicator />
            </Carousel>
          </div>
        </div>
      </ExpandableCard>
    </div>
  );
};

export default ProjectCard;
