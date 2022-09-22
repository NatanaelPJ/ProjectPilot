import { api } from "../../api"
import { PropsFoods } from "./types"


export const getFoods = async () : Promise<PropsFoods[]> => {
  const response = await api.get('/foods')

  console.log('resquest:', response.data)
  return response.data
}