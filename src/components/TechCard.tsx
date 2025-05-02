import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import Pointer from "./ui/pointer";
import { motion } from "framer-motion";

interface Props {
  name: string; // Name of the tech (e.g., "React")
  gradient: string[]; // Gradient array (e.g., ["#ff7e5f", "#feb47b"])
  pointer: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Dynamic icon component prop
}

const TechCard: React.FC<Props> = ({ name, gradient, pointer: Icon }) => {
  return (
    <Card
      className="col-span-1 row-span-1 overflow-hidden border-none shadow-lg transition-all hover:shadow-xl dark:from-slate-900 dark:to-slate-800 w-32 h-32"
      style={{
        background: `linear-gradient(to right, ${gradient.join(", ")})`,
      }}
    >
      <CardContent className="relative flex h-40 items-center justify-center p-6">
        <span className="pointer-events-none text-center text-xl font-medium text-slate-800 dark:text-slate-200">
          {name}
        </span>
      </CardContent>
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Dynamically render the icon passed as a prop */}
          <Icon
            width="40"
            height="40"
            className="text-pink-600" // You can adjust the color here or pass as a prop
          />
        </motion.div>
      </Pointer>
    </Card>
  );
};

export default TechCard;
