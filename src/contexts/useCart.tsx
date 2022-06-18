import { createContext, ReactNode, useContext, useRef, useState, useEffect} from "react";
import { Product } from "../services/server/food/types";


interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);


export function CartProvider({children} : CartProviderProps): JSX.Element{
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@Menu: Cart')


    if (storagedCart) {
      return JSON.parse(storagedCart);
    }


    return []
  })

  const prevCartRef = useRef<Product[]>();
  useEffect(() => {
    prevCartRef.current = cart
  })

  return (
    <>
     
    </>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
