import { BookOpen, Home, LayoutDashboard, Settings } from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", href: "/", icon: Home },
  { id: "dashboard", label: "Dashboard", href: "/", icon: LayoutDashboard },
  { id: "courses", label: "Courses", href: "/#courses", icon: BookOpen },
  { id: "settings", label: "Settings", href: "/#settings", icon: Settings },
];
