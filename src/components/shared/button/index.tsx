import * as S from "./styles";

import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onlyIcon?: boolean;
  disabled?: boolean;
  type?: "submit" | "reset";
  className?: string;
}

export function Button({ children, onlyIcon, ...props }: ButtonProps) {
  return (
    <S.Container onlyIcon={onlyIcon} {...props}>
      {children}
    </S.Container>
  );
}
