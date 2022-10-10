import * as icon from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Container } from './style'

export default function Nav() {
  return(
    <>
      <Container>
        <ul>
          <li>
            <Link to='/'>
              <icon.MdHome className='iconSidebar' size={24}/>
              <p> Home </p>
            </Link>
          </li>
          <li>
            <Link to='/menu'> 
              <icon.MdLocalDining className='iconSidebar' size={24}/>
              <p> Menu </p>
            </Link>
          </li>
          <li>
            <Link to='/cart'> 
              <icon.MdLocalGroceryStore className='iconSidebar' size={24}/>
              <p> Cart </p>
            </Link>
          </li>
          <li>
            <Link to='/'> 
              <icon.MdLocationPin className='iconSidebar' size={24}/>
              <p> Location </p>
            </Link>
          </li>
          <li>
            <Link to='/'> 
              <icon.MdExitToApp className='iconSidebar' size={24} />
              <p> Exit </p>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  )
}