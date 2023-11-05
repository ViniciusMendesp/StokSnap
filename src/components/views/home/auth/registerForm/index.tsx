import { useState } from "react";
import * as S from "./styles";

import { emailRegex, textRegex } from "@Aplication/regex/index";
import axios from "axios";

import { Input } from "@Aplication/components/shared/Input";
import { Button } from "@Aplication/components/shared/button";

import { toast } from "react-toastify";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleUsernameChange(value: string) {
    setUsername(value);
    if (!textRegex.test(value)) {
      setUsernameError("Nome de usuário inválido");
    } else {
      setUsernameError("");
    }
  }

  function handleFirstNameChange(value: string) {
    setFirstName(value);
    if (!textRegex.test(value)) {
      setFirstNameError("Nome inválido");
    } else {
      setFirstNameError("");
    }
  }

  function handleLastNameChange(value: string) {
    setLastName(value);
    if (!textRegex.test(value)) {
      setLastNameError("Sobrenome inválido");
    } else {
      setLastNameError("");
    }
  }

  function handleEmailChange(value: string) {
    setEmail(value);
    if (!emailRegex.test(value)) {
      setEmailError("Email inválido");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  }

  function handleConfirmPasswordChange(value: string) {
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("As senhas não coincidem");
    } else {
      setConfirmPasswordError("");
    }
  }

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const data = {
      username,
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:4000/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        toast.success("Usuário criado com sucesso!");
        setUsername("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        throw new Error("Erro na resposta do servidor");
      }
    } catch (error) {
      toast.error("Erro ao criar usuário.");
    }
  }

  const allFieldsValid =
    !usernameError &&
    !firstNameError &&
    !lastNameError &&
    !emailError &&
    !passwordError &&
    !confirmPasswordError &&
    username &&
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword;

  return (
    <S.Container>
      <S.Form onSubmit={handleFormSubmit}>
        <S.Sections>
          <Input
            name="firstName"
            placeholder="Informe seu nome"
            value={firstName}
            error={firstNameError}
            success={!firstNameError && firstName ? "Nome válido" : ""}
            onChange={(e) => handleFirstNameChange(e.target.value)}
          />
          <Input
            name="lastName"
            placeholder="Informe seu sobrenome"
            value={lastName}
            error={lastNameError}
            success={!lastNameError && lastName ? "Sobrenome válido" : ""}
            onChange={(e) => handleLastNameChange(e.target.value)}
          />
        </S.Sections>
        <S.Sections>
          <Input
            name="username"
            placeholder="Informe seu username"
            value={username}
            error={usernameError}
            success={!usernameError && username ? "Usuário válido" : ""}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
          <Input
            name="email"
            placeholder="Informe um email"
            type="email"
            value={email}
            error={emailError}
            success={!emailError && email ? "Email válido" : ""}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
        </S.Sections>
        <S.Sections>
          <Input
            name="password"
            placeholder="Informe uma senha"
            type="password"
            value={password}
            error={passwordError}
            success={!passwordError && password ? "Senha válida" : ""}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <Input
            name="confirmPassword"
            placeholder="Repita sua senha"
            type="password"
            value={confirmPassword}
            error={confirmPasswordError}
            success={
              !confirmPasswordError && confirmPassword ? "Senha confirmada" : ""
            }
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          />
        </S.Sections>

        <Button type="submit" disabled={!allFieldsValid || isSubmitting}>
          Cadastrar-se
        </Button>
      </S.Form>
    </S.Container>
  );
}
