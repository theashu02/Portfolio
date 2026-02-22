import React from "react";
import { useTheme } from "next-themes";
import { useThemeColor } from "./ThemeColorProvider";
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { themeColor, setThemeColor } = useThemeColor();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 border border-muted rounded flex items-center justify-center"></div>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
          <FiSettings size={20} className="hover:rotate-90 transition-transform duration-300" />
          <span className="sr-only">Toggle theme and color</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Mode</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setThemeColor("default")} className={themeColor === "default" ? "bg-accent" : ""}>
          Default (Blue)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("yellow")} className={themeColor === "yellow" ? "bg-accent" : ""}>
          Yellow
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("green")} className={themeColor === "green" ? "bg-accent" : ""}>
          Green
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("rose")} className={themeColor === "rose" ? "bg-accent" : ""}>
          Rose
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("orange")} className={themeColor === "orange" ? "bg-accent" : ""}>
          Orange
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
