import { useEffect, useState} from 'react'
import { getFoods } from "../../services/server/food";
import { ListFoods } from "../../components/ListFoods";
import { PropsFoods } from "../../services/server/food/types";
import { Theme } from "../../components/Theme";
import { ContentSectionMenu } from './styles';
import { MenuButtons } from '../../components/MenuButtons';
import { InputSearch } from '../../components/Input';

export default function Menu(){
  const [foods, setFoods] = useState<PropsFoods[]>([])

  useEffect(() => {
   
    loadFoods()
  },[])
  
  async function loadFoods(){
    const response = await getFoods()
    console.log(response);
    
    setFoods(response)
  }
  
  

  return (
    <>
      <Theme>
        <ContentSectionMenu>
            <header>
              <h1>Menu</h1>
            </header>
            <InputSearch/>
            <div className='contentListFoods'>
              <ListFoods foods={foods}/>
            </div>
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