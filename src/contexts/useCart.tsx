import { createContext, ReactNode, useContext, useRef, useState, useEffect} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { getFoodId } from "../services/server/food";
import { PropsFoods } from "../services/server/food/types";


interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: PropsFoods[];
  addProduct: (productId: number) => Promise<void>;
  // removeProduct: (productId: number) => void;
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
        toast.warning('Product already exists!');
      } else{
        const product = await getFoodId(productId);
        toast.success('Adicionado com successo!');
        updatedCart.push(product)
      }
     
      setCart(updatedCart);
      
    } catch {
        toast.error('Erro na adição do produto');
    }
  }
 

  return (
    <CartContext.Provider value={{cart, addProduct}}>
      { children }
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}
