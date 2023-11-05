import { spacing } from "@Aplication/styles/dsConfig";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sections.large};
`;

export const Sections = styled.div`
  display: flex;
  gap: ${spacing.components.medium};
`;
