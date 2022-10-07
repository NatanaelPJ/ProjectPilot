import { useEffect, useState } from "react";
import { getFoods } from "../../services/server/food";
import { PropsFoods } from "../../services/server/food/types";
import { ContentMenu} from "./styles";
import img from '../../assets/Rectangle9.png'
import Footer from "../../components/Footer";
import { Theme } from "../../components/Theme";
import { useCart } from "../../contexts/useCart";
import { formatPrice } from "../../util/format";



export default function Menu(){
  const [foods, setFoods] = useState<PropsFoods[]>([])

  const categorybuttons = foods.map((product) => product.category).reduce((initialValue : String[], currentValue) => {
    return initialValue.includes(currentValue)? initialValue : [...initialValue, currentValue ]
  },[])


  console.log('categorybuttons',categorybuttons);
  

  const { addProduct } = useCart()

  useEffect(() => {
    async function loadFoods(){
      const response = await getFoods()
      setFoods(response)
    }
    loadFoods()
    
  },[])

  
  const handleAddProduct = (id: number) => {
    addProduct(id)
  }

  return (
    <>
      <Theme>
        <ContentMenu>
            <h1>SUSHI FOOD</h1>
            <div>
              <ul>
                {categorybuttons.map((value) => (
                  <button>
                    {value}
                  </button>
                )) }
              </ul>
            </div>
            <div className="content-products">
              {foods.map(product => (
                <div key={product.id}>
                  <img src={img} alt={product.title} />
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
            </div> 
            <button>
              Load more
            </button>
            <Footer />
          </ContentMenu>
      </Theme>
    </>
  )
}