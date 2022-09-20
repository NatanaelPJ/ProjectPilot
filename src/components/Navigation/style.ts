import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  flex: 1;
  color: white;
  border-radius: 0;
  background: black;

  @media (min-width: 480px) {
    border-radius: 1em;
  }
  
  ul,
  li{
    width: 100%;
    flex-direction: column;
    @media (min-width: 480px) {
      flex-direction: row;
    }
    
  }

  ul{
    display: flex;
    flex-direction: row;
    height: 100%;
  
  
    @media (min-width: 480px) {
      flex-direction: column;
      justify-content: space-around;
      padding: 1em 0;
      border-radius: 1em;
    }
  }

  li{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`