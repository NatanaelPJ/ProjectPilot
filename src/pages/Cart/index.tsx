import Footer from "../../components/Footer";
import {ContentBox, PriceTable, ProductTable } from "./styles";
import * as icon from 'react-icons/md'
import img from '../../assets/Ellipse5.png'
import { useState } from "react";
import { Theme } from "../../components/Theme";

export default function Cart(){
  const [inp,SetInp] = useState(0)


  function handleProductIncrement() {
    SetInp(inp + 1)
  }

  function handleProductDecrement() {
    SetInp(inp - 1)
  }


  return(
    <>
      <Theme>
        <ContentBox>
          <h1>Cart</h1>
          
          <ProductTable>
            <tbody>
              <tr>
                <td>
                  <img src={img} alt={'imagem'} />
                </td>
                <div className="wrapper">
                  <td className="text-box">
                    <strong>Arroz de camarão com blabla bla bla</strong>
                    <span>Unidade: xxxxxxx</span>
                  </td>
                  <div className="wrapperPriceTable">
                    <td>
                      <div className="counterPrice">
                        <button
                          type="button"
                          data-testid="decrement-product"
                          onClick={handleProductDecrement}
                        >
                          <icon.MdRemoveCircleOutline size={20} />
                        </button>
                        <input
                          type="text"
                          data-testid="product-amount"
                          readOnly
                          value={inp}
                        />
                        <button
                          type="button"
                          data-testid="increment-product"
                          onClick={handleProductIncrement}
                        >
                          <icon.MdAddCircleOutline size={20} />
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        data-testid="remove-product"
                      >
                        <icon.MdDelete size={20} />
                      </button>
                    </td>
                  </div>
                </div>
              </tr>

            </tbody>
          </ProductTable>  
          <div className="divider"></div>
          <PriceTable>
            <div className="wrapper-text">
              <strong>Your Subtotal</strong>
              <span>Subtotal:  $80.00</span>
            </div>
            <button>
                Confirm Order
            </button>
          </PriceTable>
          
    
        </ContentBox>
      </Theme>
     
    </>
  )
}