import Aside from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container, Content, PriceTable, ProductTable } from "./styles";
import * as icon from 'react-icons/md'
import img from '../../assets/Ellipse5.png'
import { useState } from "react";

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
      <Container>
        <Aside/>
        <Content>
          <h1>Cart</h1>
          <div className="box">
            <ProductTable>
              <tbody>
                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
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




                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div className="counterPrice">
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





                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div className="counterPrice">
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




                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div className="counterPrice">
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
                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div className="counterPrice">
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




                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div className="counterPrice">
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
                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div className="counterPrice">
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




                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div className="counterPrice">
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
                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div className="counterPrice">
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




                <tr>
                  <td>
                    <img src={img} alt={'imagem'} />
                  </td>
                  <td className="text-box">
                    <strong>titule</strong>
                    <span>preco</span>
                  </td>
                  <td>
                    <div className="counterPrice">
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
          </div> 
          <Footer/>
        </Content>
    
      </Container>
     
    </>
  )
}