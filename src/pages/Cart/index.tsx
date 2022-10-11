import {ContentBox, PriceTable, ProductTable } from "./styles";
import * as icon from 'react-icons/md'
import img from '../../assets/Ellipse5.png'
import { Theme } from "../../components/Theme";
import { useCart } from "../../contexts/useCart";
import { formatPrice } from "../../util/format";
import { PropsFoods } from "../../services/server/food/types";

export default function Cart(){

  const { cart, removeProduct, updateAmountProduct } = useCart()
  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: (product.price / 100 ) * product.amount 
  }))

  const total = formatPrice(
    cart.reduce((acc, cur) => {
    return acc + (cur.price / 100) * cur.amount
  }, 0)
  )

  console.log('tttt', total);
  

  const handleProductIncrement = (product: PropsFoods) => {
    updateAmountProduct({productId: product.id, amount: product.amount + 1})
  }

  const handleProductDecrement = (product: PropsFoods) => {
    updateAmountProduct({productId: product.id, amount: product.amount - 1})
  }

  const handleRemoveProduct = (productId: number) => {
    removeProduct(productId)
  }


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
                        onClick={() => handleProductDecrement(product)}
                      >
                        <icon.MdRemoveCircleOutline size={20} />
                      </button>
                      <input
                        type="text"
                        data-testid="product-amount"
                        readOnly
                        value={product.amount}
                        
                      />
                      <button
                        type="button"
                        data-testid="increment-product"
                        onClick={() => handleProductIncrement(product)}
                      >
                        <icon.MdAddCircleOutline size={20} />
                      </button>
                    </div>   
                    <button
                      type="button"
                      data-testid="remove-product"
                    onClick={() => handleRemoveProduct(product.id)}
                    >
                      <icon.MdDelete size={20} />
                    </button>          
                  </td>
                  <td className="subTotal">
                    <strong> {formatPrice(product.subTotal)} </strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>  
          <div className="divider"></div>
          <PriceTable>
            <div className="wrapper-text">
              <strong>Your total</strong>
              <span>{total}</span>
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