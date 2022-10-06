import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/products'

export const getProducts = async () => {
  return await axios.get(`${baseUrl}.json`)
}

export const getProduct = async (id) => {
  return await axios.get(`${baseUrl}/${id}.json`)
}

