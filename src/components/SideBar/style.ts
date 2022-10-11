import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  flex: 1;
  color: white;
  border-radius: 0;
  background: black;
  @media (min-width: 678px) {
    border-radius: 1em;
  }

  ul,
  li{
    width: 100%;
    flex-direction: column;
    @media (min-width: 778px) {
      flex-direction: row;
    }
    
  }

  ul{
    padding: 0.5em 0;
    display: flex;
    flex-direction: row;
    height: 100%;
  
  
    li{
      display: flex;
      align-items: center;
      justify-content: center;

     
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        color: white;
        gap:0.2em;

        .iconSidebar{
          width: 1.5em;
          height: 1.5em;
        }

        p{
          font-size: 0.8em;
        }

        @media (min-width: 678px) {

          .iconSidebar{
            width: 2em;
            height: 2em;
          }

          p{
            display: none;
          }

          &:hover{
            .iconSidebar{
              display: initial;
            }

            p{
              position: absolute;
              top: 3em;
              display: initial;
            }
          } 
        }
      }

     
    }



    @media (min-width: 678px) {
      flex-direction: column;
      justify-content: space-around;
      padding: 1em 0;
      border-radius: 1em;
    }

  }

  
`