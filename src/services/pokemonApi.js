import AxiosInstance from '@/config/axios'
 
export const getPokeList = (size=151) =>{
   return AxiosInstance.get(`pokemon?limit=${size}`)
}

export const getPokemon = (id) =>{
    return AxiosInstance.get(`pokemon/${id}`)
 }
 
 