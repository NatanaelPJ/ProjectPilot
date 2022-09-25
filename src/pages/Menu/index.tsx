import { useEffect, useState } from "react";
import { getFoods } from "../../services/server/food";
import { PropsFoods } from "../../services/server/food/types";
import { ContentMenu} from "./styles";
import img from '../../assets/Rectangle9.png'
import Footer from "../../components/Footer";
import { Theme } from "../../components/Theme";
import { useCart } from "../../contexts/useCart";


export default function Menu(){

  const [foods, setFoods] = useState<PropsFoods[]>([])
  const { addProduct, cart } = useCart()

  useEffect(() => {
    async function loadFoods(){
      let result = await getFoods()

      setFoods(result)
    }
    loadFoods()
  },[])


  function handleAddProduct(id: number) {
    addProduct(id)
  }

  return (
    <>
      <Theme>
        <ContentMenu>
            <h1>SUSHI FOOD</h1>
            <div className="content-products">
              {foods.map(product => (
                <div key={product.id}>
                  <img src={img} alt={product.title} />
                  <p>{product.title}</p>
                  <button 
                    type="button"
                    onClick={() => {
                      handleAddProduct(product.id)
                      console.log("Product added successfully!");
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