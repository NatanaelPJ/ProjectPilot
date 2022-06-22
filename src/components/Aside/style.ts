import styled from "styled-components";

export const Container = styled.aside`
  min-width: 5.8em;
  width: 100%;
  height: 100%;
  flex: 1;
  background: black;
  color: white;
  border-radius: 1em;

  @media (max-width: 480px) {
    position: absolute;
    height: 4em;
    border-radius: 0;
    
    bottom: 0;
  }
  
  ul,
  li{
    width: 100%;

    @media (max-width: 480px) {
      flex-direction: column;
    }
    
  }

  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1em 0;
    border-radius: 1em;
    height: 100%;
  
    @media (max-width: 480px) {
      flex-direction: row;
    }
  }

  li{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`