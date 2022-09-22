import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  overflow: none;
  position: relative;
`

export const NavigationLinks = styled.nav`
  margin: 0;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1000;
  max-width: 30.87em;
  width: 80%;
  display: flex;
  align-items: center;
  gap: 2em;

  a{
    width: 100%;
    background: white;
    padding: 0.8em 0;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2em;
    color: black;
    transition:  1s;

    &:hover{
      filter: brightness(0.8); 
    }
  }
`
