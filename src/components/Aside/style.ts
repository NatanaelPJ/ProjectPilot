import styled from "styled-components";

export const Container = styled.aside`
  min-width: 5.8em;
  max-width: 6em;
  height: 100%;
  flex: 1;
  background: black;
  color: white;
  border-radius: 1em;
  
  ul,
  li{
    width: 100%;
    
  }

  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1em 0;
    border-radius: 1em;
    height: 100%;
  
  }

  li{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`