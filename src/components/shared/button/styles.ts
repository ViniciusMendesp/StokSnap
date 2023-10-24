import { borderRadius, spacing, transition } from "@Aplication/styles/dsConfig";
import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.theme.colors.main.primary.normal};
  color: ${(props) => props.theme.colors.main.white.normal};

  display: flex;
  gap: ${spacing.components.small};
  align-items: center;

  padding: ${spacing.components.small} ${spacing.components.xlarger};
  border-radius: ${borderRadius.large};
  border: none;

  transition: ${transition.fast};

  &:hover {
    background: ${(props) => props.theme.colors.main.primary.dark};
  }
`;
