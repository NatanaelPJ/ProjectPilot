import React,{ useState } from "react";
import SlideShow from "../../components/BannerSlider";
import { Link } from 'react-router-dom';
import restaurant from "../../assets/restaurant.png"
import hotel from "../../assets/hotel.png"
import { Container, NavigationLinks } from "./styles";

export default function Home( ) {
  const [autoPlay] = useState(true)
  const [duration] = useState(3000)

  const slideImages = [
    restaurant, 
    hotel
  ]

  return(
    <>
      <Container>
        <NavigationLinks>
          <Link to='/about'> About </Link>
          <Link to='/menu'> Menu </Link>
        </NavigationLinks> 
        <SlideShow autoPlay={autoPlay} duration={duration} slideImages={slideImages} />
      </Container>
    </>
  )
}
