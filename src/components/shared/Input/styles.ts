import {
  borderRadius,
  font,
  spacing,
  transition,
} from "@Aplication/styles/dsConfig";
import styled from "styled-components";

interface ContentProps {
  fullWidth?: boolean;
  error?: boolean | string;
  success?: boolean | string;
}

export const Container = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.components.smaller};
  font-family: "Poppins", sans-serif;
`;

export const ContainerText = styled.div<TextProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.components.small};

  color: ${(props) =>
    props.type === "error"
      ? props.theme.colors.main.error.normal
      : props.type === "success"
      ? props.theme.colors.main.success.normal
      : "inherit"};
`;

interface TextProps {
  type?: "error" | "success";
}

export const Text = styled.span<TextProps>`
  color: ${(props) =>
    props.type === "error"
      ? props.theme.colors.main.error.normal
      : props.type === "success"
      ? props.theme.colors.main.success.normal
      : "inherit"};

  font-size: ${font.sizes.average};
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  width: ${(props) => (props.fullWidth ? "100%" : "300px")};
  border: 1px solid
    ${(props) =>
      props.error
        ? props.theme.colors.main.error.normal
        : props.success
        ? props.theme.colors.main.success.normal
        : props.theme.colors.detail};
  padding: ${spacing.components.small} ${spacing.components.medium};

  border-radius: ${borderRadius.small};
  color: ${(props) => props.theme.colors.text};

  transition: ${transition.default};
  &:not(:disabled):focus-within {
    border-color: ${(props) =>
      props.error
        ? props.theme.colors.main.error.dark
        : props.success
        ? props.theme.colors.main.success.dark
        : props.theme.colors.main.primary.normal};
  }

  &:disabled-within {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  font-size: ${font.sizes.default};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
`;
