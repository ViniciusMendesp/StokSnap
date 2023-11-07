import { font, spacing } from "@Aplication/styles/dsConfig";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${spacing.sections.large};
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  padding: ${spacing.components.medium} ${spacing.sections.large};
  font-family: "Poppins", sans-serif;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.title};
  font-size: ${font.sizes.larger};
`;

export const ContainerDropDown = styled.div``;
