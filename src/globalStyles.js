import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

  html,
  body,
  div#root {
    background: white;
    font-family:"Roboto Condensed", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    overflow-x: hidden;
    margin: 0;
  }
  `;

export default GlobalStyle;
