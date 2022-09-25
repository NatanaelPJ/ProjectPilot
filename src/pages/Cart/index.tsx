import {ContentBox, PriceTable, ProductTable } from "./styles";
import * as icon from 'react-icons/md'
import img from '../../assets/Ellipse5.png'
import { useState } from "react";
import { Theme } from "../../components/Theme";
import { useCart } from "../../contexts/useCart";
import { formatPrice } from "../../util/format";

export default function Cart(){

  const { cart } = useCart()
  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price)
  }))
  
  
  return(
    <>
      <Theme>
        <ContentBox>
          <h1>Cart</h1>
          
          <ProductTable>
            <thead>
              <tr>
                {/* <th aria-label="product image" /> */}
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                {/* <th aria-label="delete icon" /> */}
              </tr>
            </thead>
            <tbody>
              {cartFormatted.map(product => (
                <tr key={product.id}>
                  <td className="productDescription">
                    <img src={img} alt={'imagem'} />
                    <strong>{product.title}</strong>
                  </td>
                  <td className="productAmount">
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
                        
                      />
                      <button
                        type="button"
                        data-testid="increment-product"
                       
                      >
                        <icon.MdAddCircleOutline size={20} />
                      </button>
                    </div>             
                  </td>
                  <td className="subTotal">
                    <strong> { product.priceFormatted} </strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>  
          <div className="divider"></div>
          <PriceTable>
            <div className="wrapper-text">
              <strong>Your total</strong>
              <span>total:  $80.00</span>
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