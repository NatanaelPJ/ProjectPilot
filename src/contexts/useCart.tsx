import { createContext, ReactNode, useContext, useRef, useState, useEffect} from "react";


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
  return (
   <CartContext.Provider>
   
   </CartContext.Provider>
  )
}