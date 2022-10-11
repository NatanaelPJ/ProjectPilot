import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
  gap: 3em;
 
  flex: 1 0 0;

  overflow-y: scroll;

  &::-webkit-scrollbar{
    display: none;
  }

  div{
    background: whitesmoke;
    max-width: 12em;
    width: 100%;
    height: 18em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 0.5em;
    border-radius: 0.8em;
    padding:0.5em;
    
   
    .infoFood{
      width: 100%;
      height: 11em;
      border:none;
      border-radius: 50%;
      display: flex;
      justify-content: center;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      p{
        display: none;
        text-align: center;
        font-size: 1.25em;
      }

      span{
        display: none;
      }
    }

    button{
      background: black;
      margin: 0;
      max-width: 11em;
      width: 100%;
      padding: 1em;
      background: black;
      color: white;
      border-radius: 2em;
    }

    &:hover{
   
     
      img{   
        display:none;
      }

      p{
      
        display: flex;
        
      }

      span{
        display: flex;
      }
    }


    
  }
`