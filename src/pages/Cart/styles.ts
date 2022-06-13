import styled from "styled-components";

export const Container = styled.main`
  padding:1em;
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 2em;
`

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;


  h1{
    text-align: left;
    font-size: 3.12em;
  }

  div{
    margin-top: 3em;
    display: flex;
    flex: 1;
    gap: 2em;
  }

`



export const ProductTable = styled.table`
  max-height: 38em;
  flex: 1;
  background: gray;
  display: flex;
  
`

export const PriceTable = styled.table`
  max-height: 38em;
  flex: 1;
  background: red;
`