// themeContext.tsx
import { ThemeName } from "@Aplication/styles/theme";
import { createContext, useContext } from "react";

interface ThemeContextType {
  theme: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
