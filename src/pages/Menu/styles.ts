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
    justify-content: center;
    flex-wrap: wrap;
    gap: 4em;
    overflow-y: scroll;

    &::-webkit-scrollbar{
      display: none;
    }

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 11em;
      width: 100%;
      height: 20em;
      gap: 0.5em;
      
      img{   
        width: 100%;
        height: 11em;
        object-fit: cover;
      }

      p{
        text-align: center;
        font-size: 1.25em;
        
      }

      span{
        flex: 1;
      }

      button{
        background: black;
        margin: 0;
      }
    }
  }

  button {
    margin: 2em auto;
    max-width: 11em;
    width: 100%;
    padding: 1em;
    background: black;
    color: white;
  }
  
`