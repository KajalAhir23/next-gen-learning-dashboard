import { BookOpen } from "lucide-react";
import * as LucideIcons from "lucide-react";

export function resolveLucideIcon(iconName) {
  const pascalCase = iconName
    .trim()
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");

  return LucideIcons[pascalCase] ?? BookOpen;
}
