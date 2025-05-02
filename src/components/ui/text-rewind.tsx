"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text?: string;
  className?: string;
  shadowColors?: {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
    glow?: string;
  };
}

export function TextRewind({
  text = "LINE",
  className = "",
  shadowColors = {
    first: "#cba6f7",
    second: "#89b4fa",
    third: "#74c7ec",
    fourth: "#89dceb",
    glow: "#89dceb",
  },
}: AnimatedTextProps) {
  const textShadowStyle = {
    textShadow: `10px 10px 0px ${shadowColors.first},
                     15px 15px 0px ${shadowColors.second},
                     20px 20px 0px ${shadowColors.third},
                     25px 25px 0px ${shadowColors.fourth},
                     45px 45px 10px ${shadowColors.glow}`,
  };

  const noShadowStyle = {
    textShadow: "none",
  };

  return (
    <div className="w-full text-center">
      <motion.div
        className={cn(
          "w-full text-center cursor-pointer text-3xl font-bold",
          "transition-all duration-200 ease-in-out tracking-widest",
          "text-black dark:text-white italic",
          "stroke-[#d6f4f4]",
          className,
        )}
        style={textShadowStyle}
        whileHover={noShadowStyle}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default TextRewind;
