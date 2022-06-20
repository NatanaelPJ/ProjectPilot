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

  .content-products{
    width: 100%;
    margin-top: 2em;
    flex: 1;
    background: red;
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
    overflow-y: auto;

    &::-webkit-scrollbar{
    display: none;
  }
    

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    div{
      
      margin: auto;
      display: flex;
      flex-direction: column;
      
      span{
        margin-top: 0.5em;
        text-align: center;
      }

      img{
        max-height: 15em;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  button{
    margin: 0 auto;
    width: 100%;
    padding: 1em;
  }
`