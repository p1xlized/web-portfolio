import React, { useState } from "react";
import { ProgressiveBlur } from "./ui/progressive-blur";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  type: "Web" | "Mobile" | "Game" | "API";
}

const typeColorMap: Record<ProjectCardProps["type"], string> = {
  Web: "bg-blue-600",
  Mobile: "bg-green-600",
  Game: "bg-purple-600",
  API: "bg-yellow-500",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  type,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative my-4 aspect-square h-[300px] overflow-hidden rounded-[4px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Type Badge */}
      <span
        className={`absolute right-2 top-2 rounded-full px-3 py-1 text-xs font-semibold text-white ${typeColorMap[type]}`}
      >
        {type}
      </span>

      {/* Progressive Blur Overlay */}
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[75%] w-full"
        blurIntensity={0.5}
        animate={isHover ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Description Text */}
      <motion.div
        className="absolute bottom-0 left-0"
        animate={isHover ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start gap-0 px-5 py-4">
          <p className="text-base font-medium text-white">{title}</p>
          <span className="text-base text-zinc-300">{description}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
