import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { Container, Navigation, Presentation } from './styles';
import { Link } from 'react-router-dom';


interface HomeProps{
  autoPlay: boolean
  duration: number
  slideImages: string[]
}


export default function SlideShow( props: HomeProps){

  return(
    <>
      <Slide autoplay={props.autoPlay} duration={props.duration} easing="ease">
        {props.slideImages.map((item)=> (  
          <Container style={{'backgroundImage': `url(${item})`}}>
            <Presentation>
              <h1>Welcome to Sushi Restaurant</h1>
              <p>People eat with their eyes and Sushi creates an easy way for customers to order when they can see beautiful photos of your food</p>
            </Presentation>
            <Navigation>
              <Link to={'/about'}> About </Link>
              <Link to={'/menu'}> Menu </Link>
            </Navigation>
          </Container>
        ))}
      </Slide>
     
    </>
  )
}