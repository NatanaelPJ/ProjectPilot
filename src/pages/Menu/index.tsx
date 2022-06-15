import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import { Container, Content } from "./styles";

export default function Menu(){
  return (
    <>
      <Container>  
        <Aside/>
        <Content>
          <h1>SUSHI FOOD</h1>
          <div className="content-products">
            <div className="product">
              
            </div>  
          </div> 
          <button>more info</button> 
        </Content>
      </Container>
    
    </>
  )
}