import { PropsFoods } from '../../services/server/food/types';
import { ButtonsContainer } from './styles';

interface IProps {
  foods: PropsFoods[];
}

export function ButtonsCategory ({ foods } : IProps){


  const categoryDisplayButtons = foods.map((product) => product).reduce((initialValue : String[], currentValue) => {
    return initialValue.includes(currentValue.category)? initialValue : [...initialValue, currentValue.category ]
  },['Todos'])

  return(
    <>
      <ButtonsContainer>
        <ul>
          {categoryDisplayButtons.map((item, index) => (
            <li key={index}>
              <button  className='categoryButtons'>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </ButtonsContainer>
    </>
  )
}