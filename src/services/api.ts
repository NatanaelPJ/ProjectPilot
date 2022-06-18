import axios from "axios";
import { api_key } from "../config/keys";

export const api = axios.create({
  baseURL: 'https://pizza-and-desserts.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': `${api_key}`
  }
})