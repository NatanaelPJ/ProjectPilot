import styled from "styled-components"

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`

export const Navigation = styled.aside`
  @media (min-width: 480px) {
    padding: 1em 0.5em;
    flex:0 0 6em; 
    height: 100%;
  }
`

export const Content = styled.section`
  flex: 1;
  display: flex;
`