import { Children, ReactNode } from "react";
import Nav from "../SideBar";

import { Container, Content, Navigation } from "./styles";


type Props = {
  children: ReactNode
}

export function Theme({ children }: Props){
  return(
    <>
      <Container>
        <Navigation>
          <Nav/>
        </Navigation>
        <Content>
          { children }
        </Content>
      </Container>
    </>
  )
}