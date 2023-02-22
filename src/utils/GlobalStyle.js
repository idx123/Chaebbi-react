import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html{
    font-size: 10px;
    background-color: #f3f5f7;
  }
`;

export default GlobalStyle;