import { ThemeName } from "@Aplication/styles/theme";
import { useEffect, useState } from "react";

function setStoredTheme(themeName: ThemeName) {
  window.localStorage.setItem("theme", themeName);
}

function getStoredTheme(): ThemeName | null {
  const storedTheme = window.localStorage.getItem("theme");
  return storedTheme as ThemeName | null;
}

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("light");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      setCurrentTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      setStoredTheme(newTheme);
      return newTheme;
    });
  };

  return {
    currentTheme,
    toggleTheme,
  };
}
