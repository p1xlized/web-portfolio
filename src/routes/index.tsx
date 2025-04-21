import { createFileRoute } from "@tanstack/react-router";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { useTheme } from "@/components/theme/theme-provider";
import { GradientText } from "@/components/ui/gradient-text";
import Technologies from "../lib/data/tech.json";
export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  console.log(Technologies);
  const { theme } = useTheme();
  return (
    <div>
      <div id="profile" className="relative w-full h-screen overflow-hidden">
        {/* Gradient Background */}
        <AnimatedGradientBackground
          gradientColors={[
            theme === "dark" ? "#000700" : "#FFFFFF",
            theme === "dark" ? "#94e2d5" : "#F5F5F5",
            theme === "dark" ? "#89dceb" : "#F5F5F5",
            theme === "dark" ? "#74c7ec" : "#F5F5F5",
            theme === "dark" ? "#89b4fa" : "#F5F5F5",
            theme === "dark" ? "#b4befe" : "#F5F5F5",
            theme === "dark" ? "#b4befe" : "#F5F5F5",
          ]}
          gradientStops={[45, 50, 69, 65, 75, 80, 100]}
        />

        <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
          <div className="flex items-center justify-center w-full gap-8">
            <div>
              <Avatar className="w-40 h-40">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
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

              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.025}
                staggerFrom="center"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                  delay: 1.1,
                }}
              >
                {`IT'S NICE TO MEET 😊 YOU.`}
              </VerticalCutReveal>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="space-y-8">
                <GradientText
                  colors={["#b4befe", "#eba0ac", "#cba6f7"]}
                  animationSpeed={3}
                  className="text-2xl font-semibold"
                >
                  I'm a young aspiring developer, with a goal to make this world
                  better
                </GradientText>
              </div>
              <p className="mt-4 text-2xl text-center ">My Tech Stack:</p>
              {Object.values(Technologies)
                .flat()
                .map((tech: { name: string; icon: string }, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                    <p className="text-lg font-semibold">{tech.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="h-screen mt-4 py-10 w-full">
        <LayoutGrid cards={cards} />
      </div>
      <div id="contact" className="h-screen py-10 w-full">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
