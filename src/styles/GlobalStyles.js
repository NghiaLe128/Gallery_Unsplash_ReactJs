import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f9f9f9;
    line-height: 1.7;
    color: #333;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    font-weight: 700;
    color: #222;
  }

  p {
    color: #666;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
