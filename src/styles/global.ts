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
    font-size: 100%;

    @media (max-width: 768px) {
      font-size: 86.5%;
    }
  }

  

  a{
    text-decoration: none;
  }
  
  ul,
  li{
    list-style: none;
  }
`