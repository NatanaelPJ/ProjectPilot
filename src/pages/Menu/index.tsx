import { useEffect, useState} from 'react'
import { getFoods } from "../../services/server/food";
import { ListFoods } from "../../components/ListFoods";
import { PropsFoods } from "../../services/server/food/types";
import { Theme } from "../../components/Theme";
import { ContentSectionMenu } from './styles';
import { MenuHamburguer } from '../../components/MenuHamburguer';

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
        <ContentSectionMenu>
            <header>
              <h1>Menu</h1>
              <MenuHamburguer foods={foods} />
            </header>
            <ListFoods foods={foods}/>
            {/* <button className='LoadMore'>
              Load more
            </button> */}
            <footer>
              <p>Copyright © 2022 Natanael de Paulo.</p>
            </footer>
        </ContentSectionMenu>
      </Theme>
    </>
  )
}