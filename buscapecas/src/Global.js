// styles/global.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #337ab7;
  }

  a:hover {
    color: #23527c;
  }
`;