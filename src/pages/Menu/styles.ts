import styled from "styled-components";

export const ContentSectionMenu = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1em 0;


  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    position: relative;
    h1{
      font-size: 2em;
      margin: 0 auto;
    }


    @media (min-width: 678px) {
      flex-direction: column;  
    }
  }

  .contentListFoods{
    margin: 2em 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  .LoadMore {
    margin: 2em auto;
    max-width: 11em;
    width: 100%;
    padding: 1em;
    background: black;
    color: white;
  }

  footer{
    margin-top: 2em;
    display: flex;

    @media (max-width: 680px) {
      margin: 0 auto;
    }
  }


  
`