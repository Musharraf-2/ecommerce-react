import axios from 'axios';

const baseUrl = process.env.REACT_APP_ECOMMERCE_BASE_URL;

export const getProducts = async () => {
  return await axios.get(`${baseUrl}.json`)
}

export const getProduct = async (id) => {
  return await axios.get(`${baseUrl}/${id}.json`)
}

