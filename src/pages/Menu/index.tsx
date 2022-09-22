import { useEffect, useState } from "react";
import { getFoods } from "../../services/server/food";
import { PropsFoods } from "../../services/server/food/types";
import { ContentMenu} from "./styles";
import img from '../../assets/Rectangle9.png'
import Footer from "../../components/Footer";
import { Theme } from "../../components/Theme";
export default function Menu(){

  const [foods, setFoods] = useState<PropsFoods[]>([])


  useEffect(() => {
    async function loadFoods(){
      let result = await getFoods()

      setFoods(result)
      console.log('Res',result);
    }
    loadFoods()
  },[])

  return (
    <>
      <Theme>
        <ContentMenu>
            <h1>SUSHI FOOD</h1>
            <div className="content-products">
          
              {foods.map(item => (
                <div key={item.id}>
                  <img src={img} alt={item.title} />
                  <p>{item.title}</p>
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