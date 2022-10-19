import { MdClose } from 'react-icons/md';
import { PropsFoods } from '../../services/server/food/types';
import { Container, ItemsButtons } from './styles';

interface IProps {
  foods: PropsFoods[];
  showMenu: () => void
  active: boolean
}

export function ButtonsCategory ({ foods, showMenu, active } : IProps){

  const carne = foods.map(product => product).filter(product => product.category === "Carne")

  const buttonByCategory = foods.map(product => product ).reduce((initialValue : String[], currentValue) => {
    return initialValue.includes(currentValue.category)? initialValue : [...initialValue, currentValue.category]
  },[])
  
  const orderCategoryButons = buttonByCategory.sort((a,b) => {
      if(a > b){
        return 1
      } else if(a < b) {
        return -1
      } else {
        return 0      
      }
  })
  

  orderCategoryButons.unshift("Todos")

  return(
    <>
      <Container active={active}>
        <MdClose className='iconClose' width={24} height={24} onClick={showMenu} style={{cursor: 'pointer'}}/>
        <ItemsButtons>
          {orderCategoryButons.map((item, index) => (
            <li key={index}>
              <button  className='categoryButtons' onClick={() => carne}>
                {item}
              </button>
            </li>
          ))}
        </ItemsButtons>
      </Container>
     
    </>
  )
}