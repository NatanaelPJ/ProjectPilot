import styled from "styled-components";

export const ContentSectionMenu = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em 1em 0;

  header{
    display: flex;
    justify-content: space-between;
    gap: 0.5em;
    position: relative;

    
    h1{
      text-align: left;
    }


    @media (min-width: 678px) {
      flex-direction: column;  
    }
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