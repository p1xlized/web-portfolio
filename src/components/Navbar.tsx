import {
  User,
  Presentation,
  SquareUserRound,
  BookHeart,
  Link,
} from "lucide-react";
import { ExpandableTabs } from "./ui/expandable-tabs";

export function Navbar() {
  async function ScrolltoView(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  async function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs
        tabs={[
          {
            title: "Profile",
            icon: User,
            expandable: true,
            onClick: () => scrollToTop(),
          },
          {
            title: "Projects",
            icon: Presentation,
            expandable: true,
            onClick: () => ScrolltoView("projects"),
          },
          {
            title: "Contact",
            icon: SquareUserRound,
            expandable: true,
            onClick: () => ScrolltoView("contact"),
          },
          { type: "separator" },
          { title: "links", icon: Link, expandable: true },
          { title: "Blog", icon: BookHeart, expandable: true },
          { type: "separator" },
        ]}
        activeColor="text-primary-500"
        className="border-primary border-2 dark:border-primary"
      />
    </div>
  );
}
