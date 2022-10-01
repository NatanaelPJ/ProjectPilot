import { createContext, ReactNode, useContext, useRef, useState, useEffect} from "react";
import { toast } from "react-toastify";
import { getFoodId } from "../services/server/food";
import { PropsFoods } from "../services/server/food/types";


interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmountProps{
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: PropsFoods[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateAmountProduct: ({ productId, amount } : UpdateProductAmountProps) => void;
}

const CartContext = createContext<CartContextData>( {} as CartContextData);


export function CartProvider({ children } : CartProviderProps) : JSX.Element{
  const [cart, setCart] = useState<PropsFoods[]>(() => {
    const storagedCart = localStorage.getItem('@Menu:cart')


    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return []
  })

  const prevCartRef = useRef<PropsFoods[]>();
  useEffect(() => {
    prevCartRef.current = cart
  })

  const cartPreviousValue = prevCartRef.current ?? cart;

  useEffect(() => {
    if(cartPreviousValue !== cart){
      localStorage.setItem('@Menu:cart', JSON.stringify(cart));
    }
  }, [cart,cartPreviousValue])


  const addProduct = async (productId : number) => { 
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find( product => product.id === productId)
      
      if(productExists){
        alert('Product already exists!');
      } else{
        const product = await getFoodId(productId);
        alert('Adicionado com successo!');
        updatedCart.push({
          ...product,
          amount: 1
        }) 
      }

      setCart(updatedCart);

    } catch {
        alert('Erro na adição do produto');
    }
  }

  const removeProduct = async (productId: number) => { 
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex( product => product.id === productId)

      if(productIndex >= 0 ){
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
      } else{
        throw Error();
      }
    } catch {
        toast.error('Erro na remoção do produto');
    }
  }
  
  const updateAmountProduct = async( {productId, amount } : UpdateProductAmountProps) => {
   try{
    if(amount <= 0) {
      return
    }

    const updatedCart = [...cart];
    const productExists = updatedCart.find(product => product.id === productId);

    if(productExists){
      productExists.amount = amount

      console.log('pamont',productExists.amount)
      setCart(updatedCart)
    } else {
      throw Error();
    }
   } catch {
      alert('Erro na alteração de quantidade do produto')
   }
  }
 

  return (
    <CartContext.Provider value={{cart, addProduct, removeProduct, updateAmountProduct}}>
      { children }
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}
