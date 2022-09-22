import styled from "styled-components";

export const ContentMenu = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em 1em 0;

  .content-products{
    margin-top: 1em;
    flex: 1 0 0;
    /* display: grid;
    grid-template-columns: repeat(3, 1fr); */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 3em 2em;
    overflow-y: scroll;

    &::-webkit-scrollbar{
      display: none;
    }

    div{
      margin: 0 auto;
      flex-shrink: 0;
      flex-grow: 0;
      
      p{
    
        margin-top: 0.5em;
        text-align: center;
        font-size: 1.25em;
      }

      img{
        width: 100%;
        max-width: 12.6em;
        width: 100%;
        max-height: 12em;
        height:100%;
        object-fit: cover;
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