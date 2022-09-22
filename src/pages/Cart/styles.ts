import styled from "styled-components";

export const ContentBox = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 1em;
  



  .divider{
    margin: 1em 0;
    height: 1px;
    width: 100%;
    background: black;
  }
`

export const ProductTable = styled.table`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  overflow-y: auto;
  background: #F1D5BB;
  padding: 1em 1em;

  &::-webkit-scrollbar{
    display: none;
  }

  tbody{
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  tr{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 1em 0;

    
    @media (min-width: 480px) {
      justify-content: space-between; 
    }
    
    td img{
      width: 5.62em;
      height: 5.62em;
    }

    .wrapper{
      
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      gap: 0 2em;
      
      

      @media (min-width: 480px) {
     
      }

      .text-box{
        display: flex;
        flex-direction: column;
        line-height: 150%;
      }

      .wrapperPriceTable{
        display: flex;
        align-items: center;
       


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
      }
    }
  }
`

export const PriceTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F1D5BB;
  padding: 0 1em;

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