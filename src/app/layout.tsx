"use client";

import { ThemeContext } from "@Aplication/contexts/ThemeContext";
import { useTheme as useThemeHook } from "@Aplication/hooks/useTheme";
import StyledComponentsRegistry from "@Aplication/lib/registry";
import { GlobalStyles } from "@Aplication/styles/globalStyles";
import themes from "@Aplication/styles/theme";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { UserProvider } from "@Aplication/contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
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
          <Head>
            <title>StokSnap</title>
            <link rel="icon" href="./favicon.ico" />
          </Head>
          <GlobalStyles />
          <UserProvider>
            <body className={poppins.className}>
              <ToastContainer />
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
          </UserProvider>
        </html>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
