import { useThemeContext } from "@Aplication/contexts/ThemeContext";
import { MoonIcon, Sun } from "lucide-react";
import { Button } from "../button";
import * as S from "./styles";

interface FooterProps {}

export function Footer() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <S.Container>
      <S.Span>VM Technology</S.Span>
      <S.ButtonContainer>
        <Button onClick={toggleTheme} onlyIcon={true}>
          {theme === "dark" ? <MoonIcon size={16} /> : <Sun size={16} />}
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
