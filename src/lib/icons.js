import { BookOpen, Code2, Palette, Brain, Server } from "lucide-react";

const ICON_MAP = {
  Code2,
  Palette,
  Brain,
  Server,
  BookOpen,
};

export function resolveLucideIcon(iconName) {
  const pascalCase = iconName
    .trim()
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");

  return ICON_MAP[pascalCase] ?? BookOpen;
}
