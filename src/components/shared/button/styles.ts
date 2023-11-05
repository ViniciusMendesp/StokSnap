import {
  borderRadius,
  font,
  spacing,
  transition,
} from "@Aplication/styles/dsConfig";
import styled from "styled-components";

interface ContainerProps {
  onlyIcon?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: ${(props) => props.theme.colors.main.primary.normal};
  color: ${(props) => props.theme.colors.main.white.normal};
  font-size: ${font.sizes.default};
  font-weight: ${font.weight.regular};
  display: flex;
  gap: ${spacing.components.small};
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;

  padding: ${(props) =>
    props.onlyIcon
      ? `${spacing.components.small}`
      : `${spacing.components.small} ${spacing.components.xlarger}`};
  border-radius: ${(props) =>
    props.onlyIcon ? borderRadius.circle : borderRadius.small};
  border: none;

  transition: ${transition.fast};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.main.primary.dark};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
