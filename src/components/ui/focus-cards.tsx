import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Card component
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    size,
  }: {
    card: { title: string; src: string };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    size: string; // Now the size is a string to support "rem" values
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative rounded-lg bg-gray-100 dark:bg-neutral-900 overflow-hidden transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      )}
      style={{ width: size, height: size }}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover"
        style={{ width: size, height: size }}
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-center justify-center px-2 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="text-sm font-medium text-white text-center">
          {card.title}
        </div>
      </div>
    </div>
  ),
);

Card.displayName = "Card";

// Card type
type Card = {
  title: string;
  src: string;
};

// FocusCards component with customizable size
export function FocusCards({
  cards,
  size = "16rem", // Default size is 16rem (equivalent to 64 in Tailwind spacing scale)
}: {
  cards: Card[];
  size?: string; // size is now a string to allow "rem" or other units
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto p-4">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          size={size}
        />
      ))}
    </div>
  );
}
