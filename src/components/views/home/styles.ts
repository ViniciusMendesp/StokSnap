import { spacing } from "@Aplication/styles/dsConfig";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};

  width: 100%;
  height: 100vh;

  gap: ${spacing.components.larger};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.title};
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.text};
`;
