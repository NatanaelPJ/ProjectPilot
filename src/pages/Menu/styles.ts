import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;


  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`

export const Navigation = styled.aside`
  padding: 1em 0.5em;
  flex:0 0 6em;


  @media (max-width: 480px) {
    height: 4em;
   
    bottom: 0;
    padding: 0;
  }
`


export const Content = styled.section`
  flex: 1;
  height: 100vh;
  display: flex;
  
  .bla {
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
          width: 15.6;
          height: 15em;
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
            max-width: 15.6em;
            width: 100%;
            max-height: 15em;
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
  }
`