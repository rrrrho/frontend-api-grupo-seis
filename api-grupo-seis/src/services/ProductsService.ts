import { BASE_URL, GET_ALL_PRODUCTS } from "./apiUrls";
import { Product } from "../types/product";
import { Response } from "../types/customResponse";
import httpService from "./httpService";

interface Props {
  category: string,
  page: number,
  price?: string,
  bestseller?: string
}

export const getProductsByCategory = async ({
  category,
  page
}: Props): Promise<Response<Product[]>> => {
  const response = await httpService.get(`${BASE_URL}${GET_ALL_PRODUCTS}?page=${page}&category=${category}`);
  console.log(response)
  return response;
};

export const getProductsSortedByPrice = async ({
  category,
  page, 
  price
}: Props): Promise<Response<Product[]>> => {
  const response = await httpService.get(`${BASE_URL}${GET_ALL_PRODUCTS}?page=${page}&category=${category}&price=${price}`);
  return response;
};

export const getProductsSortedByPopularity = async ({
  category,
  page, 
  bestseller
}: Props): Promise<Response<Product[]>> => {
  const response = await httpService.get(`${BASE_URL}${GET_ALL_PRODUCTS}?page=${page}&category=${category}&bestseller=${bestseller}`);
  return response;
};

