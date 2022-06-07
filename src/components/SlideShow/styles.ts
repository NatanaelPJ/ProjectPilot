import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 100vh;
`

export const Presentation = styled.header`
  max-width: 51.87em;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  gap: 3.06em;

  h1{
    font-size: 4em;
  }

  p{
    font-size: 1.5em;
  }
`

export const Navigation = styled.div`
  max-width: 30.87em;
  width: 100%;
  margin-top: 4.6em;
  display: flex;
  justify-content: space-between;

  a{
    background: white;
    padding: 1em 4em;
    text-transform: uppercase;
    font-size: 1.2em;
    color: black;

  }

`
