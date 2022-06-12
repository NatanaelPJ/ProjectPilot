import { Aside } from "../../components/Aside";
import { Container, Content } from "./styles";

export default function Cart(){
  return(
    <>
      <Container>
        <Aside/>
        <Content>
          <h1>Cart</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th aria-label="product image" />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th aria-label="delete icon" />
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>  
          </div> 
        </Content>
      </Container>
    </>
  )
}