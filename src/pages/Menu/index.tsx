import { Aside } from "../../components/Aside";
import { Container, Content } from "./styles";

export default function Menu(){
  return (
    <>
      <Container>
        <Aside/>
        <Content>
          <h1>SUSHI FOOD</h1>
          <div>aaa</div> 
          <button>more info</button> 
        </Content>
      </Container>
    </>
  )
}