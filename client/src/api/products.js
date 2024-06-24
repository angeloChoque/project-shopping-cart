import axios from "axios";
import { config } from "../env";

const baseUrl = config.API_URL + "/products";

export const getProductsRequest = () => axios.get(baseUrl);

export const createProductRequest = (product) =>
  axios.post(baseUrl, product);

export const deleteProductRequest = (id) => axios.delete(`${baseUrl}/${id}`);

export const getProductRequest = (id) => axios.get(`${baseUrl}/${id}`);

export const updateProductRequest = (id, newFields) =>
  axios.put(`${baseUrl}/${id}`, newFields);
