import * as icon from 'react-icons/md'
import { Container } from './style'

export function Aside() {
  return(
    <>
      <Container>
        <ul>
          <li>
            Uma logo
          </li>
          <li>
            <a>
              <icon.MdHome size={40}/>
            </a>
          </li>
          <li>
            <a> 
              <icon.MdLocalDining size={40}/>
            </a>
          </li>
          <li>
            <a> 
              <icon.MdLocalGroceryStore size={40}/>
            </a>
          </li>
          <li>
            <a> 
              <icon.MdLocationPin size={40}/>
            </a>
          </li>
          <li>
            <a> 
              <icon.MdExitToApp size={30} />
            </a>
          </li>
        </ul>
      </Container>
    </>
  )
}