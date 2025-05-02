import {
  User,
  Presentation,
  SquareUserRound,
  BookHeart,
  Link,
  Brain,
  ChevronLeft,
} from "lucide-react";
import { ExpandableTabs } from "./ui/expandable-tabs";
import { useLocation, useNavigate } from "@tanstack/react-router";

export function Navbar() {
  const navigate = useNavigate();
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  console.log(pathname);

  async function ScrolltoView(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  async function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const homeTabs = [
    {
      title: "Profile",
      icon: User,
      expandable: true,
      onClick: () => scrollToTop(),
    },
    {
      title: "Skills",
      icon: Brain,
      expandable: true,
      onClick: () => ScrolltoView("tech_stack"),
    },
    {
      title: "Projects",
      icon: Presentation,
      expandable: true,
      onClick: () => ScrolltoView("projects"),
    },
    { type: "separator" as const },
    { title: "links", icon: Link, expandable: true },
    { title: "Blog", icon: BookHeart, expandable: false },
    { type: "separator" as const },
  ];

  const musicTabs = [
    {
      title: "Music",
      icon: ChevronLeft,
      expandable: true,
      onClick: () => navigate({ to: "/" }),
    },
    { type: "separator" as const },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs
        tabs={pathname === "/" ? homeTabs : musicTabs}
        activeColor="text-primary-500"
        className="border-primary border-2 dark:border-primary"
      />
    </div>
  );
}
