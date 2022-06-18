import { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import { getFoods } from "../../services/server/food";
import { Product } from "../../services/server/food/types";
import { Container, Content } from "./styles";

export default function Menu(){

  const [foods, setFoods] = useState<Product[]>([])


  useEffect(() => {
    async function loadFoods(){
      let result = await getFoods()

      setFoods(result)
      console.log('Responta',result);
    }
    loadFoods()
  },[])

  return (
    <>
      <Container>  
        <Aside/>
        <Content>
          <h1>SUSHI FOOD</h1>
          <div className="content-products">
            {foods.map(item => (
              <article key={item.id} className='product'>
                <img src={item.img} alt='' />
              </article>
            ))}
          </div> 
          <button>more info</button> 
        </Content>
      </Container>
    
    </>
  )
}