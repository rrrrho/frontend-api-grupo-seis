import { BASE_URL, GET_ALL_PRODUCTS } from "./apiUrls";
import { Product } from "../types/product";
import { CustomResponse } from "../types/customResponse";
import httpService from "./httpService";

export const getProductsByCategory = async (
  category: string,
  page: number
): Promise<CustomResponse<Product[]>> => {
    const response = await httpService.get(`${BASE_URL}${GET_ALL_PRODUCTS}?page=${page}&category=${category}`);
    return {
      statusCode: response.status,
      content: response.data.content,
      totalElements: response.data.totalElements,
      currentPage: response.data.currentPage,
      pageSize: response.data.pageSize,
      totalPages: response.data.totalPages
    };
};

export const getProductsSortedByPrice = async (
  category: string,
  page: number,
  price: string
): Promise<CustomResponse<Product>> => {
    const response = await httpService.get(`${BASE_URL}${GET_ALL_PRODUCTS}?page=${page}&category=${category}&price=${price}`);
    return {
      statusCode: response.status,
      content: response.data.content,
      totalElements: response.data.totalElements,
      currentPage: response.data.currentPage,
      pageSize: response.data.pageSize,
      totalPages: response.data.totalPages
    };
};

