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
  margin-top: 1em;
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  background: #F1D5BB;
  padding: 1em 1em;

  &::-webkit-scrollbar{
    display: none;
  }

  thead{
   
    position: static;

    tr{
      width:100%;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;

      @media (max-width: 468px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }


  tbody{
    margin-top: 1.2em;
    width: 100%;
    gap: 1em;

    tr{
      width:100%;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr 1fr 1fr;
      }


      .productDescription{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1em;

        img{
          margin: auto;
          width: 5.62em;
          height: 5.62em;
        }

        strong{
          margin: auto 0;
          margin-right: auto;
        }

        @media (max-width: 560px) {
          grid-template-columns: 1fr;
         

          strong{
            margin-right: unset;
            text-align: center;
          }
        }
      }
  
      .productAmount{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 2em;
        
        .counterPrice{
          display: flex;
          gap: 0.5em;

          button{
            background: transparent;
            border: none;
          }
  
          input{
            max-width: 3.5em;
            flex-shrink: 0;
            width: 100%;
            text-align: center;
          }
        }
      }

      .subTotal{
        display: flex;
        align-items: center;
        justify-content: center;
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