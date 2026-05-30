import {
  BookOpen,
  Home,
  LayoutDashboard,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Courses", href: "#courses", icon: BookOpen },
  { label: "Settings", href: "#settings", icon: Settings },
];
