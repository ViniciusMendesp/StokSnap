import { spacing } from "@Aplication/styles/dsConfig";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: ${spacing.sections.larger};
`;
