import { useEffect, useState} from 'react'
import { getFoods } from "../../services/server/food";
import { ListFoods } from "../../components/ListFoods";
import { PropsFoods } from "../../services/server/food/types";
import { Theme } from "../../components/Theme";
import { ButtonsCategory } from "../../components/ButtonsCategoty";
import Footer from "../../components/Footer";
import { ContentMenu } from './styles';

export default function Menu(){
  const [foods, setFoods] = useState<PropsFoods[]>([])

  useEffect(() => {
    async function loadFoods(){
      const response = await getFoods()
      setFoods(response)
    }
    loadFoods()
    
  },[])


  return (
    <>
      <Theme>
        <ContentMenu>
            <h1>SUSHI FOOD</h1>
            <ButtonsCategory foods={foods} />
            <ListFoods foods={foods}/>
            <button className='LoadMore'>
              Load more
            </button>
            <Footer />
          </ContentMenu>
      </Theme>
    </>
  )
}