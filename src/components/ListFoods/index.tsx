import { useCart } from '../../contexts/useCart'
import { PropsFoods } from '../../services/server/food/types'
import { formatPrice } from '../../util/format'
import img from '../../assets/Rectangle9.png'
import { Container } from './styles'

interface IProps {
  foods: PropsFoods[];
}

export function ListFoods({ foods }: IProps){
  const { addProduct } = useCart()

  const handleAddProduct = (id: number) => {
    addProduct(id)
  }

  return (
    <>
      <Container>
        {foods.map(product => (
          <div key={product.id}>
            <img src={img} alt={product.title} loading={'lazy'}/>
            <p>{product.title}</p>
            <span>{formatPrice(product.price)}</span>
            <button 
              type="button"
              onClick={() => {
                handleAddProduct(product.id)
              }}
            >
              add to cart
            </button>
          </div>
        ))}
      </Container>
    </>
  )
}