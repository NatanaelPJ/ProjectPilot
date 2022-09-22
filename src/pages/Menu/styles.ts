import styled from "styled-components";

export const ContentMenu = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em 1em 0;

  .content-products{
    margin-top: 1em;
    flex: 1 0 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3em 2em;
    overflow-y: scroll;
    place-content: center;
    
    &::-webkit-scrollbar{
      display: none;
    }

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      
      img{
        max-width: 12.6em;
        max-height: 12em;
        object-fit: cover;
      }
      
      p{
        margin-top: 0.5em;
        text-align: center;
        font-size: 1.25em;
        overflow: hidden;
      }

    }
  }

  button{
    margin: 2em auto;
    max-width: 11em;
    width: 100%;
    padding: 1em;
    background: black;
    color: white;
  }
  
`