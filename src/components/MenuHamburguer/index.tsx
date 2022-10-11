import { ContainerMenuHamburguer } from "./styles";
import { MdList } from 'react-icons/md'
import { ButtonsCategory } from "../ButtonsCategoty";
import { PropsFoods } from "../../services/server/food/types";
import { useState } from "react";

interface IProps {
  foods: PropsFoods[]
}

export function MenuHamburguer( { foods}: IProps){

  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return(
    <>
      <ContainerMenuHamburguer active={active}>
        <MdList className="hamburguerMenuIcon" width={24} height={24} onClick={ showMenu } />
      </ContainerMenuHamburguer>
      <ButtonsCategory foods ={foods} showMenu={ showMenu } active={ active } />
    </>
  )
}