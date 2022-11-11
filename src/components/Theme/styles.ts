import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 678px) {
    flex-direction: initial;
  }
`


export const Content = styled.main`
  flex: 85%;
  display: flex;
  overflow: hidden;
`

export const Navigation = styled.div`
  @media (min-width: 678px) {
    padding: 1em 0.5em;
    flex:15%; 
    height: 100%;
  }
`
