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
              <icon.MdHome size={32}/>
            </Link>
          </li>
          <li>
            <Link to='/menu'> 
              <icon.MdLocalDining size={32}/>
            </Link>
          </li>
          <li>
            <Link to='/cart'> 
              <icon.MdLocalGroceryStore size={32}/>
            </Link>
          </li>
          <li>
            <Link to='/'> 
              <icon.MdLocationPin size={32}/>
            </Link>
          </li>
          <li>
            <Link to='/'> 
              <icon.MdExitToApp size={32} />
            </Link>
          </li>
        </ul>
      </Container>
    </>
  )
}