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
    margin-top: 2em;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #F1D5BB;
    padding: 0 1em;

    .divider{
      margin: 1em 0;
      height: 1px;
      width: 100%;
      background: black;
    }
  }
`

export const ProductTable = styled.table`
  flex: 1;
  display: flex;
  overflow-y: auto;

  &::-webkit-scrollbar{
    display: none;
  }

  tbody{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  tr{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 1em 0;
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

export const PriceTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F1D5BB;

  .wrapper-text{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 1.5em;
    }

    span{
      font-size: 1.2em;
    }
  }

  button{
    margin: 1em 0;
    padding: 0.5em 1em;
  }
`