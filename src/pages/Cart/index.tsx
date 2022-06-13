import { Aside } from "../../components/Aside";
import { Container, Content, PriceTable, ProductTable } from "./styles";
import * as icon from 'react-icons/md'
import Footer from "../../components/Footer";

export default function Cart(){
  return(
    <>
      <Container>
        <Aside/>
        <Content>
          <h1>Cart</h1>
          <div>
            <ProductTable>
              <tbody>
                <tr>
                  <td>
                    <img src={'imagem'} alt={'imagem'} />
                  </td>
                  <td>
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        data-testid="decrement-product"
                      >
                        <icon.MdRemoveCircleOutline size={20} />
                      </button>
                      <input
                        type="text"
                        data-testid="product-amount"
                        readOnly
                        value={''}
                      />
                      <button
                        type="button"
                        data-testid="increment-product"
                      >
                        <icon.MdAddCircleOutline size={20} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>total</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      data-testid="remove-product"
                    >
                      <icon.MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </ProductTable>  

            <PriceTable>
              <h1>preco</h1>
            </PriceTable>
          </div> 
          <Footer/>
        </Content>
      </Container>
     
    </>
  )
}