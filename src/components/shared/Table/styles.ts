import { borderRadius, spacing, transition } from "@Aplication/styles/dsConfig";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.detail};
  padding: ${spacing.components.medium};
  border-radius: ${borderRadius.medium};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.colors.main.white.normal};

  width: 60%;

  text-align: center;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;

  border-radius: ${borderRadius.medium};
  border-collapse: separate;
`;

export const THead = styled.thead`
  padding: ${spacing.components.small};
`;

export const Tr = styled.tr`
  display: flex;
  gap: ${spacing.sections.larger};
`;

export const Th = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  &:nth-child(1) {
    width: 20%;
  }
  &:nth-child(2) {
    width: 20%;
  }
  &:nth-child(3) {
    width: 20%;
  }
  &:nth-child(4) {
    width: 20%;
  }
  &:nth-child(5) {
    width: 30%;
  }
`;

export const TBody = styled.tbody`
  padding: ${spacing.components.small};
`;

export const Td = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  &:nth-child(1) {
    width: 20%;
  }
  &:nth-child(2) {
    width: 20%;
  }
  &:nth-child(3) {
    width: 20%;
  }
  &:nth-child(4) {
    width: 20%;
  }
  &:nth-child(5) {
    width: 30%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.components.smaller};

  .Red {
    transition: ${transition.default};
    background-color: ${(props) => props.theme.colors.main.error.normal};

    &:hover {
      background-color: ${(props) => props.theme.colors.main.error.dark};
    }
  }

  .Green {
    transition: ${transition.default};
    background-color: ${(props) => props.theme.colors.main.success.normal};

    &:hover {
      background-color: ${(props) => props.theme.colors.main.success.dark};
    }
  }
`;
