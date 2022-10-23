import styled from "styled-components";

interface Props{
  active: boolean
}

export const ContainerMenuHamburguer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  .hamburguerMenuIcon{
    position: relative;
    display: ${({active}) => active? 'none' : 'initial' };
    height: 3em;
    width: 3em;
    cursor: pointer;

    @media (min-width: 678px) {
      display: none;
    }
  }
`