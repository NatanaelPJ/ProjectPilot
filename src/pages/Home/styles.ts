import styled from "styled-components";

// export const Container = styled.main`
//   height: 100vh;
//   overflow: none;
//   position: relative;
// `

// export const NavigationLinks = styled.nav`
//   margin: 0;
//   position: absolute;
//   top: 80%;
//   left: 50%;
//   transform: translate(-50%, -50%);

//   z-index: 1000;
//   max-width: 30.87em;
//   width: 80%;
//   display: flex;
//   align-items: center;
//   gap: 2em;

//   a{
//     width: 100%;
//     background: white;
//     padding: 0.8em 0;
//     text-align: center;
//     text-transform: uppercase;
//     font-size: 1.2em;
//     color: black;
//     transition:  1s;

//     &:hover{
//       filter: brightness(0.8); 
//     }
//   }
// `

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  padding: 0 1em 2em;

  img{
    object-fit: cover;
    overflow: hidden;
    max-width: 28em;
    width: 100%;
    height: 28em;
  }

  .presentacion {
    padding: 0.5em;

    p{
      font-size: 1.8em;
      font-weight: bold;
      text-align: center;
     
      & + p{
        margin-top: 0.2em;
      } 
    }

   
  }

  a{
    background: orange;
    margin-top: 1em;
    max-width: 15em;
    width: 100%;
    padding: 1em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
    border-radius: 1em;
    font-weight: bold;
    color: white;

    .arrowForward{
      background-color: white;
      border-radius: 50%;
      width: 1.5em;
      height: 1.5em;
      color: orange;
    }
  }
`
