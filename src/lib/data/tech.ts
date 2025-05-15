// Just an example, you'll import more icons for other technologies

// Assuming you have different icons for each technology
import {
  Flutter,
  ElysiaJS,
  GodotEngine,
  NestJS,
  Solidjs,
  Rust,
  Linux,
  Figma,
  PostgreSQL,
  DrizzleORM,
  TypeScript,
  Python,
  React,
  Tauri,
  Obsidian,
  Zed,
  ZenBrowser,
  Bruno,
  Suse,
  Ghostty,
} from "../../components/icons";

interface TechItem {
  name: string;
  gradient: string[]; // Example gradient colors for each technology
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
interface ToolsItem {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

export const techItems: TechItem[] = [
  {
    name: "React",
    gradient: ["#b4befe", "#a6e3a1"], // Example gradient for React
    Icon: React, // Replace with actual React icon
  },
  {
    name: "Flutter",
    gradient: ["#89dceb", "#cba6f7"], // Example gradient for Flutter
    Icon: Flutter,
  },
  {
    name: "ElysiaJS",
    gradient: ["#f2cdcd", "#f5c2e7"], // Example gradient for ElysiaJS
    Icon: ElysiaJS,
  },
  {
    name: "NestJS",
    gradient: ["#eba0ac", "#fab387"], // Example gradient for NestJS
    Icon: NestJS,
  },
  {
    name: "GodotEngine",
    gradient: ["#cba6f7", "#f5e0dc"], // Example gradient for Godot
    Icon: GodotEngine,
  },
  {
    name: "Solidjs",
    gradient: ["#89dceb", "#f5c2e7"], // Example gradient for Solidjs
    Icon: Solidjs,
  },
  {
    name: "Rust",
    gradient: ["#fab387", "#eba0ac"], // Example gradient for Rust
    Icon: Rust,
  },
  {
    name: "Linux",
    gradient: ["#f5e0dc", "#a6e3a1"], // Example gradient for Linux
    Icon: Linux,
  },
  {
    name: "Figma",
    gradient: ["#89b4fa", "#f5c2e7"], // Example gradient for Figma
    Icon: Figma,
  },
  {
    name: "PostgreSQL",
    gradient: ["#94e2d5", "#89b4fa"], // Example gradient for PostgreSQL
    Icon: PostgreSQL,
  },
  {
    name: "DrizzleORM",
    gradient: ["#b4befe", "#1e1e2e"], // Example gradient for DrizzleORM
    Icon: DrizzleORM,
  },
  {
    name: "TypeScript",
    gradient: ["#b4befe", "#cba6f7"], // Example gradient for TypeScript
    Icon: TypeScript,
  },
  {
    name: "Python",
    gradient: ["#a6e3a1", "#fab387"], // Example gradient for Python
    Icon: Python,
  },
  {
    name: "Tauri",
    gradient: ["#f5c2e7", "#b4befe"], // Example gradient for Tauri
    Icon: Tauri,
  },
];
export const toolsItems: ToolsItem[] = [
  {
    name: "Ghostty",
    Icon: Ghostty,
    text: "Minimal, fast terminal emulator.",
  },
  {
    name: "Zed",
    Icon: Zed,
    text: "Modern, collaborative code editor.",
  },
  {
    name: "ZenBrowser",
    Icon: ZenBrowser,
    text: "Privacy-focused, distraction-free browser.",
  },
  {
    name: "Bruno",
    Icon: Bruno,
    text: "API testing made simple.",
  },
  {
    name: "Obsidian",
    Icon: Obsidian,
    text: "Markdown knowledge base with graph view.",
  },
  {
    name: "Suse",
    Icon: Suse,
    text: "Reliable enterprise Linux distro.",
  },
];
