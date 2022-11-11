import { useState } from "react";
import SlideShow from "../../components/BannerSlider";
import { Link } from 'react-router-dom';
import restaurant from "../../assets/restaurant.png"
import hotel from "../../assets/hotel.png"
import { Container } from "./styles";
import banner from '../../assets/homeBanner.png'
import {MdArrowForward } from 'react-icons/md'

// export default function Home( ) {
//   const [autoPlay] = useState(true)
//   const [duration] = useState(3000)

//   const slideImages = [
//     restaurant, 
//     hotel
//   ]

//   return(
//     <>
//       <Container>
//         <NavigationLinks>
//           <Link to='/about'> About </Link>
//           <Link to='/menu'> Menu </Link>
//         </NavigationLinks> 
//         <SlideShow autoPlay={autoPlay} duration={duration} slideImages={slideImages} />
//       </Container>
//     </>
//   )
// }


export default function Home() {
  return(
    <>
      <Container>
        <img src={banner} alt="Image of hamburgues" />
        <div className="presentacion">
          <p>Delicious And Easy </p>
          <p>Food To Make For You</p>
        </div>
        <Link to='menu'>
          <MdArrowForward className="arrowForward" width={24} height={24}/>
          Get Started
        </Link>
      </Container>
    </>
  )
}