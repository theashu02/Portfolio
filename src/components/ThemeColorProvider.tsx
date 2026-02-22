import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeColor = "default" | "yellow" | "green" | "rose" | "orange";

interface ThemeColorContextType {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

export function ThemeColorProvider({ children }: { children: React.ReactNode }) {
  const [themeColor, setThemeColorState] = useState<ThemeColor>("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-color") as ThemeColor;
    if (savedTheme) {
      setThemeColorState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const setThemeColor = (color: ThemeColor) => {
    setThemeColorState(color);
    localStorage.setItem("theme-color", color);

    if (color === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", color);
    }
  };

  return <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>{children}</ThemeColorContext.Provider>;
}

export function useThemeColor() {
  const context = useContext(ThemeColorContext);
  if (context === undefined) {
    throw new Error("useThemeColor must be used within a ThemeColorProvider");
  }
  return context;
}
