import { api } from "../../api"
import { PropsFoods } from "./types"


export const getFoods = async () : Promise<PropsFoods[]> => {
  const response = await api.get('/foods')
  return response.data
}



export const getFoodId = async (id: number) : Promise<PropsFoods> => {
  const response = await api.get(`/foods/${id}`)
  console.log('idp', response.data)
  return response.data
}