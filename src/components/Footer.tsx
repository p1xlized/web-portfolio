import { Link } from "@tanstack/react-router";
import {
  Globe,
  Share2,
  MessageCircle,
  Link as LinkIcon,
  Send,
  Feather,
} from "lucide-react";
import { React } from "./icons";

const links = [
  { title: "Features", to: "/features" },
  { title: "Solution", to: "/solution" },
  { title: "Customers", to: "/customers" },
  { title: "Pricing", to: "/pricing" },
  { title: "Help", to: "/help" },
  { title: "About", to: "/about" },
];

export default function Footer() {
  return (
    <footer className="py-8 mb-12 flex flex-col justify-between min-h-[200px]">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-4">
        <Link
          to="/"
          aria-label="go home"
          className="mx-auto block size-fit"
        ></Link>

        {/* Centered "Made with ❤️ by @svdxx" */}
        <p className="text-center text-muted-foreground text-xl mb-4">
          Made with ❤️ by @svdxx
        </p>
        <p className="text-center text-muted-foreground text-sm">
          All of this was possible thanks to these wonderful tools:
        </p>
        <div className="mb-4 flex flex-wrap justify-center gap-8 text-sm">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link 1"
            className="text-muted-foreground hover:text-primary block"
          ></a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link 2"
            className="text-muted-foreground hover:text-primary block"
          >
            <MessageCircle className="size-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link 3"
            className="text-muted-foreground hover:text-primary block"
          >
            <LinkIcon className="size-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link 4"
            className="text-muted-foreground hover:text-primary block"
          >
            <Globe className="size-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link 5"
            className="text-muted-foreground hover:text-primary block"
          >
            <Send className="size-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link 6"
            className="text-muted-foreground hover:text-primary block"
          >
            <Feather className="size-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
