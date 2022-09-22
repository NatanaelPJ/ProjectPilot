import * as icon from 'react-icons/md'
import { Container } from './style'

export default function Nav() {
  return(
    <>
      <Container>
        <ul>
          <li>
            <a href='/'>
              <icon.MdHome size={32}/>
            </a>
          </li>
          <li>
            <a> 
              <icon.MdLocalDining size={32}/>
            </a>
          </li>
          <li>
            <a href='/cart'> 
              <icon.MdLocalGroceryStore size={32}/>
            </a>
          </li>
          <li>
            <a> 
              <icon.MdLocationPin size={32}/>
            </a>
          </li>
          <li>
            <a href='/'> 
              <icon.MdExitToApp size={32} />
            </a>
          </li>
        </ul>
      </Container>
    </>
  )
}