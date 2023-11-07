import { borderRadius, font, spacing } from "@Aplication/styles/dsConfig";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.components.small};

  width: ${spacing.sections.large};
  height: ${spacing.sections.larger};

  background-color: ${(props) => props.theme.colors.detail};
  border-radius: ${borderRadius.medium};
  border: 1px solid ${(props) => props.theme.colors.detail};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 70px;
`;

export const Text = styled.span`
  font-size: ${font.sizes.small};
  color: ${(props) => props.theme.colors.text};
`;
