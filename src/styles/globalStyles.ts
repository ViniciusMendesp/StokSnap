import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    height: 100%;
    background-color: var(--bg);
  }

`;
