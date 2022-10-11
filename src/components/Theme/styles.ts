import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 678px) {
    flex-direction: initial;
  }
`

export const Navigation = styled.div`
  @media (min-width: 678px) {
    padding: 1em 0.5em;
    flex:0 0 6em; 
    height: 100%;
  }
`

export const Content = styled.main`
  flex: 1;
  display: flex;
`