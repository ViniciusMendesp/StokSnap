import { borderRadius, spacing } from "@Aplication/styles/dsConfig";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  border-radius: ${borderRadius.large};

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing.components.medium};
  padding: ${spacing.sections.medium};
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing.components.medium};
  border-radius: ${borderRadius.large};

  text-align: center;
  background-color: ${(props) => props.theme.colors.detail};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.title};
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.text};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.detail};
  text-decoration: none;
`;
