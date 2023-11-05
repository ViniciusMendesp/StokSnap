import { ChangeEvent, useState } from "react";
import * as S from "./styles";

import { AlertCircle, CheckCircle2, Eye, EyeOff } from "lucide-react";
interface InputProps {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  placeholder?: string;
  type?: "text" | "password" | "email";
  value?: string;
  disabled?: boolean;
  name?: string;
  error?: boolean | string;
  success?: boolean | string;
}

export function Input({
  prefixIcon,
  suffixIcon,
  fullWidth,
  placeholder,
  type,
  value,
  error,
  success,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const errorMessage = typeof error === "string" ? error : "";
  const successMessage = typeof success === "string" ? success : "";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderSuffixIcon = () => {
    if (type === "password") {
      return (
        <S.IconContainer onClick={togglePasswordVisibility}>
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </S.IconContainer>
      );
    }
    return suffixIcon && <S.IconContainer>{suffixIcon}</S.IconContainer>;
  };

  return (
    <S.Container>
      <S.Content
        fullWidth={fullWidth}
        error={error}
        success={success}
        {...props}
      >
        {prefixIcon && <S.IconContainer>{prefixIcon}</S.IconContainer>}
        <S.Input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
        />
        {renderSuffixIcon()}
      </S.Content>

      {errorMessage && (
        <S.ContainerText>
          <AlertCircle size={15} color="#f44336" />
          <S.Text type="error">{errorMessage}</S.Text>
        </S.ContainerText>
      )}
      {successMessage && (
        <S.ContainerText>
          <CheckCircle2 size={15} color="#63a968" />
          <S.Text type="success">{successMessage}</S.Text>
        </S.ContainerText>
      )}
    </S.Container>
  );
}
