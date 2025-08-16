import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import {
  Database,
  Gamepad2,
  Globe,
  SatelliteDish,
  TabletSmartphone,
} from "lucide-react";
import { AwardBadge } from "./award-badge";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  type: "Web" | "Mobile" | "Game" | "API" | "IoT";
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  awards:
    | {
        name: string;
        place: string;
      }[]
    | null;
  [key: string]: any;
}
const demoLink =
  "https://www.producthunt.com/golden-kitty-awards/hall-of-fame?year=2024#bootstrapped-small-teams-2";

const icons: Record<ExpandableCardProps["type"], React.ReactNode> = {
  Web: (
    <Badge variant="lavender" className="flex items-center gap-2">
      <Globe />
      <span className="text-sm">Web</span>
    </Badge>
  ),
  Mobile: (
    <Badge variant="blue" className="flex items-center gap-2">
      <TabletSmartphone />
      <span className="text-sm">Mobile</span>
    </Badge>
  ),
  Game: (
    <Badge variant="pink" className="flex items-center gap-2">
      <Gamepad2 />
      <span className="text-sm">Game</span>
    </Badge>
  ),
  API: (
    <Badge variant="green" className="flex items-center gap-2">
      <Database />
      <span className="text-sm">API</span>
    </Badge>
  ),
  IoT: (
    <Badge variant="maroon" className="flex items-center gap-2">
      <SatelliteDish />
      <span className="text-sm">IoT</span>
    </Badge>
  ),
};
function TypeIcon({ type }: { type: ExpandableCardProps["type"] }) {
  return <>{icons[type]}</>;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  type,
  awards,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);
  console.log(awards);
  return (
    <>
      <AnimatePresence>
        {active && (
          <>
            {/* Blurred Background Image */}
            {/*<motion.div
              key="blurred-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90]"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(20px) brightness(0.5)",
              }}
            />*/}

            {/* Semi-transparent Overlay for readability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-[95]"
            />

            {/* Expanded Card */}
            <div className="fixed inset-0 grid place-items-center z-[100] sm:mt-16 before:pointer-events-none">
              <motion.div
                layoutId={`card-${title}-${id}`}
                ref={cardRef}
                className={cn(
                  "w-full max-w-[850px] h-[90vh] flex flex-col overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] sm:rounded-t-3xl bg-zinc-50 shadow-sm dark:shadow-none dark:bg-zinc-950 relative",
                  classNameExpanded,
                )}
                {...props}
              >
                <div className="absolute top-4 left-4 z-50">
                  {/*{awards && (
                    <AwardBadge
                      type="bronze"
                      name=awa
                      place={3}
                      link={demoLink}
                      competition="AMC 2024 Mobile Hackathon"
                    />
                  )}*/}
                  {awards?.map((award, index) => (
                    <div className="m-2">
                      <AwardBadge
                        key={index}
                        type={award.type}
                        name={award.name}
                        place={award.place}
                        link={demoLink}
                        competition={award.competition}
                      />
                    </div>
                  ))}
                </div>
                {/* Close Button top-left */}
                <motion.button
                  aria-label="Close card"
                  layoutId={`button-${title}-${id}`}
                  onClick={() => setActive(false)}
                  className="absolute top-4 right-4 z-50 h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-destructive hover:text-gray-900 transition-colors duration-300 focus:outline-none"
                >
                  <motion.div
                    animate={{ rotate: active ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </motion.div>
                </motion.button>

                <motion.div layoutId={`image-${title}-${id}`}>
                  <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:h-[70px] before:z-50 before:bg-gradient-to-t dark:before:from-zinc-950 before:from-zinc-50">
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-80 object-cover object-center"
                    />
                  </div>
                </motion.div>

                <div className="relative h-full before:fixed before:inset-x-0 before:bottom-0 before:h-[70px] before:z-50 before:bg-gradient-to-t dark:before:from-zinc-950 before:from-zinc-50">
                  <div className="flex justify-between items-start p-8 h-auto">
                    <div>
                      <motion.h3
                        layoutId={`title-${title}-${id}`}
                        className="font-semibold text-black dark:text-white text-4xl sm:text-4xl mt-0.5 mb-2"
                      >
                        {title}
                        <TypeIcon type={type} />
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${description}-${id}`}
                        className="text-zinc-500 dark:text-zinc-400 text-lg"
                      >
                        {description}
                      </motion.p>
                    </div>
                    {/* Removed original close button here */}
                  </div>
                  <div className="relative px-6 sm:px-8">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-zinc-500 dark:text-zinc-400 text-base pb-10 flex flex-col items-start gap-4 overflow-auto "
                    >
                      {children}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Collapsed Card */}
      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "relative cursor-pointer bg-muted w-64 h-64 rounded-3xl overflow-hidden shadow-sm dark:shadow-none border-primary border-2",
          className,
        )}
      >
        {/* Image fills entire card */}
        <motion.div
          layoutId={`image-${title}-${id}`}
          className="absolute inset-0 p-2"
        >
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover rounded-2xl brightness-75"
          />
          {/* Gradient overlay REMOVED */}
          {/* <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-b-2xl" /> */}
        </motion.div>

        {/* Text over image */}
        <div className="absolute bottom-0 left-0 p-4 w-full flex justify-between items-end">
          <div className="flex flex-col">
            <motion.h3
              layoutId={`title-${title}-${id}`}
              className="text-white font-semibold"
            >
              {title}
            </motion.h3>
            <motion.p
              layoutId={`description-${description}-${id}`}
              className="text-white font-bold text-sm"
            >
              {description}
            </motion.p>
          </div>
          <motion.button
            aria-label="Open card"
            layoutId={`button-${title}-${id}`}
            className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-primary text-black hover:bg-chart-4 border border-white/30 transition-colors duration-300 focus:outline-none"
          >
            <motion.div
              animate={{ rotate: active ? 45 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
