import { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import { getFoods } from "../../services/server/food";
import { Product } from "../../services/server/food/types";
import { Container, Content } from "./styles";
import img from '../../assets/Rectangle9.png'
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
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>

            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>  
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>

            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div>
            <div>
              <img src={img} alt="" />
              <span>aaaa</span>
            </div> 
          </div> 
        </Content>
      </Container>
    
    </>
  )
}