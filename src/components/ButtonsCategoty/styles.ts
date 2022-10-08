import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 1em;
  justify-content: center;
  
  

  ul{
    display: flex;
    gap: 0.5em 1em;    
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    button{
      width: 8em;
      padding: .5em 1em;
      background: black;
      color: white;
      
    }
  }
`