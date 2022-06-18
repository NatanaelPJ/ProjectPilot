import React,{ useState } from "react";
import SlideShow from "../../components/SlideShow";

import restaurant from "../../assets/restaurant.png"
import hotel from "../../assets/hotel.png"

export default function Home( ) {
  const [autoPlay] = useState(true)
  const [duration] = useState(3000)

  const slideImages = [
    restaurant, 
    hotel
  ]

  return(
    <>
      <SlideShow autoPlay={autoPlay} duration={duration} slideImages={slideImages} />
    </>
  )
}
