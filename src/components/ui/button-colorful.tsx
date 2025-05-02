import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonColorfulProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gradient?: [string, string, string]; // Custom hex or CSS color strings
  children: React.ReactNode;
}

export function ButtonColorful({
  className,
  children,
  gradient = ["#b4befe", "#cba6f7", "#f38ba8"], // default Catppuccin-inspired gradient
  ...props
}: ButtonColorfulProps) {
  const gradientStyle = {
    background: `linear-gradient(to right, ${gradient[0]}, ${gradient[1]}, ${gradient[2]})`,
  };

  return (
    <Button
      className={cn(
        "relative h-10 px-4 overflow-hidden bg-base text-white dark:text-black transition-all duration-200 group",
        className,
      )}
      style={{ background: "transparent" }} // Set the background to transparent for gradient effect
      {...props}
    >
      {/* Brighter gradient layer */}
      <div
        className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-300 rounded-md"
        style={gradientStyle}
      />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2 z-10">
        {children}
      </div>
    </Button>
  );
}

export default ButtonColorful;
