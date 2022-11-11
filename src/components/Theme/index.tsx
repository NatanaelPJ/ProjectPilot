import { ReactNode } from "react";
import { SideBar } from "../SideBar";
import { Container, Content, Navigation } from "./styles";


type Props = {
  children: ReactNode
}

export function Theme({ children }: Props){
  return(
    <>
      <Container>
        <Content>
          { children }
        </Content>
        <Navigation>
          <SideBar/>
        </Navigation>
      </Container>
    </>
  )
}