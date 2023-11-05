import { Button } from "@Aplication/components/shared/button";
import { useThemeContext } from "@Aplication/contexts/ThemeContext";
import { useState } from "react";
import {
  Container,
  Content,
  Forms,
  Link,
  Presentation,
  Text,
  Title,
} from "./styles";

import { MoonIcon, PackageOpen, Sun } from "lucide-react";
import { LoginForm } from "./auth/loginForm";
import { RegisterForm } from "./auth/registerForm";

interface HomeViewProps {}

export function HomeView({}: HomeViewProps) {
  const { theme, toggleTheme } = useThemeContext();

  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Container>
      <Content>
        <Forms>
          <Text>
            {showLogin ? "Faça seu login aqui!" : "Registre-se para começar!"}
          </Text>

          {showLogin ? <LoginForm /> : <RegisterForm />}

          {showLogin ? (
            <>
              <Text>Não tem conta?</Text>
              <Link href="#" onClick={toggleForm}>
                Registrar-se
              </Link>
            </>
          ) : (
            <>
              <Text>Já tem uma conta?</Text>
              <Link href="#" onClick={toggleForm}>
                Faça login
              </Link>
            </>
          )}

          <Button onClick={toggleTheme} onlyIcon={true}>
            {theme === "dark" ? <MoonIcon size={16} /> : <Sun size={16} />}
          </Button>
        </Forms>
        <Presentation>
          <Title>StokSnap App</Title>
          <Text>Seja Bem-vindo</Text>
          <Text>
            <PackageOpen size={50} />
          </Text>
        </Presentation>
      </Content>
    </Container>
  );
}
