import { api } from "../../api"


export const getFood = async () => {
  const response = await api.get('/pizzas')

  console.log(response)
  return
}