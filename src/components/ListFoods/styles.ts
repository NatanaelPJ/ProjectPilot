import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;


  div{
    width: 100%;
    display: flex;
   

    .column1{
      display: flex;
      flex-direction: column;
      text-align: center;

      img{
        margin: 0 auto;
        object-fit: cover;
        width: 8em;
        height: 8em;
        border-radius: 50%;
      }

      p{
        margin: 0.5em 0;
      }

      span{
        color: #F24F04;
      }
    }

    .column2{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1em;


      button{
        background: black;
        max-width: 8em;
        width: 100%;
        height: 3em;
        padding: 0.5em;
        background: black;
        color: white;
        border-radius: 2em;
      }
    }
  }



  
`