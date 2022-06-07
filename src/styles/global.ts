import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    height: 100vh;
    overflow: hidden;
  }

  a{
    text-decoration: none;
  }
  
  ul,
  li{
    list-style: none;
  }
`