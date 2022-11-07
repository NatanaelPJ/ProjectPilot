import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-size: 1em;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 768px) {
      font-size: 99.2%;
    }

    @media (max-width: 468px) {
      font-size: 85.5%;
    }
  }

  #root{
    position: relative;
  }

  a{
    text-decoration: none;
    color: black;
  }
  
  ul,
  li{
    list-style: none;
  }

  h1{
    font-size: 3em;
  }

  p{
    font-size: 1.2em;
  }

  button, a{
    cursor: pointer;
  }
`