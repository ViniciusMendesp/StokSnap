import { Button } from "@Aplication/components/shared/button";
import { useThemeContext } from "@Aplication/contexts/ThemeContext";
import { Container, Text, Title } from "./styles";

import { MdDarkMode, MdLightMode } from "react-icons/md";

interface HomeViewProps {}

export function HomeView({}: HomeViewProps) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Container>
      <Title>Boilerplate VM Technology</Title>
      <Text>Bem-vindo</Text>

      <Button onClick={toggleTheme}>
        {theme === "dark" ? (
          <MdDarkMode size={16} />
        ) : (
          <MdLightMode size={16} />
        )}
        {theme}
      </Button>
    </Container>
  );
}
