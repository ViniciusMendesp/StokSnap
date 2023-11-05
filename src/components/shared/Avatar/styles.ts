import { font } from "@Aplication/styles/dsConfig";

import { readableColor } from "polished";
import styled, { css } from "styled-components";

export const Image = styled.img`
  width: 100%;
`;

const generateColorFromString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
};

export const Wrapper = styled.div<{
  $size: number;
  $name: string;
  $image?: string;
}>`
  width: ${(props) => (props.$size ? `${props.$size}px` : "60px")};
  height: ${(props) => (props.$size ? `${props.$size}px` : "60px")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  font-size: ${(props) => (props.$size ? `${props.$size * 0.35}px` : "16px")};
  font-weight: ${font.weight.semibold};

  ${({ $name }) => {
    const baseColor = generateColorFromString($name);

    return css`
      background-color: ${baseColor};
      color: ${readableColor(baseColor, "black", "white")};
    `;
  }}
`;
