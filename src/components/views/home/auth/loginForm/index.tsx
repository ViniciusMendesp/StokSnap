import { Input } from "@Aplication/components/shared/Input";
import { Button } from "@Aplication/components/shared/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      toast.success("Login realizado com sucesso");
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao fazer login");
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleLogin}>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={!email || !password}>
          Entrar
        </Button>
      </S.Form>
    </S.Container>
  );
}
