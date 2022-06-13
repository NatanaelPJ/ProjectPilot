import styled from "styled-components";

export const Container = styled.main`
  padding:1em;
  width: 100%;
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

  .box{
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding:0 1em;


    .divider{
      padding:0 1em;
      height: 1px;
      width: 100%;
      background: black;
    }
  }

`

export const ProductTable = styled.table`
  flex: 2;
  background: #F1D5BB;
  display: flex;
  

  tbody{
    height: 27.5em;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow-y: auto;
    padding: 1em;
  }

  tr{
    background: red;
    display: flex;
    
    width: 100%;
    align-items: center;
    justify-content: space-around;
    gap: 1em;
  }

  td img{
    width: 5.62em;
    height: 5.62em;
  }

  .text-box{
    display: flex;
    flex-direction: column;
  }
  
  td .counterPrice{
    display: flex;
    gap: 0.5em;

    button{
      background: transparent;
      border: none;
    }


    input{
      max-width: 3em;
      min-width: 2.5em;
      width: 100%;
    }
  }
`

export const PriceTable = styled.table`
  flex: 1;
  display: flex;
  background: #F1D5BB;
`