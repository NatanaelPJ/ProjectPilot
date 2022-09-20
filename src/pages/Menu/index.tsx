import { useEffect, useState } from "react";
import Aside from "../../components/Navigation";
import { getFoods } from "../../services/server/food";
import { Product } from "../../services/server/food/types";
import { Container, Content, Navigation } from "./styles";
import img from '../../assets/Rectangle9.png'
import Footer from "../../components/Footer";
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
        <Navigation>
          <Aside/>
        </Navigation>
        <Content>
          <div className="bla">
            <h1>SUSHI FOOD</h1>
            <div className="content-products">
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>   
              </div>

              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>  
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>

              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div>
              <div>
                <img src={img} alt="" />
                <p>aaaa</p>
              </div> 
            </div> 
            <button>
              Load more
            </button>
            <Footer />
          </div>
        </Content>
      </Container>
    
    </>
  )
}