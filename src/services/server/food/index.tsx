import { api } from "../../api"
import { Product } from "./types"


export const getFoods = async () : Promise<Product[]> => {
  const response = await api.get('/pizzas')

  console.log('Response:', response.data)
  return response.data
}