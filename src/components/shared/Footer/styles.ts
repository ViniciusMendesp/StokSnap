import { font, spacing } from "@Aplication/styles/dsConfig";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: ${spacing.sections.medium};
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  padding: ${spacing.components.medium} ${spacing.sections.large};
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: ${font.sizes.small};
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: ${spacing.components.large};
`;
