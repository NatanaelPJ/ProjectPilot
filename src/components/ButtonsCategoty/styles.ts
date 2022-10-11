import styled from "styled-components";

interface Props{
  active: boolean;
}


export const Container = styled.aside<Props>`
  position: relative;
  max-width: 25%;
  display: ${ ({active}) => active? 'flex' : 'none' };
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  
  .iconClose{
    height: 2em;
    width: 3em;
    position: absolute;
    right: 0;
  }

  @media (min-width: 678px) {
    max-width: 100%;
    display: flex;
    position: initial;  

    .iconClose{
      display: none;
    }
  }
`


export const ItemsButtons = styled.ul`
  display: flex;
  gap: 0.3em;    
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  transform: translate(-50%, 32%);

  @media (min-width: 678px) {
    position: initial;
    transform: none;

  }

  button{
    width: 6em;
    padding: 0.5em 0;
    background: black;
    color: white;
    border-radius: 2em;
  }
`