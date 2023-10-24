"use client";

import { ThemeContext } from "@Aplication/contexts/ThemeContext";
import { useTheme as useThemeHook } from "@Aplication/hooks/useTheme";
import StyledComponentsRegistry from "@Aplication/lib/registry";
import { GlobalStyles } from "@Aplication/styles/globalStyles";
import themes from "@Aplication/styles/theme";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "styled-components";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentTheme, toggleTheme } = useThemeHook();

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ThemeProvider theme={themes[currentTheme]}>
        <html>
          <body className={roboto.className}>
            <GlobalStyles />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </html>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
