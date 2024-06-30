import { BASE_URL, GET_ALL_PRODUCTS } from "./apiUrls";
import { Product } from "../types/product";
import { CustomResponse, Response } from "../types/customResponse";
import httpService from "./httpService";

interface Props {
  category?: string,
  page: number,
  price?: string,
  bestseller?: string
  brand?: string,
  stage?: string,
  min?: number,
  max?: number,
  keywords?: string
}

export const getProductsFiltered = async ({
  category,
  page,
  bestseller,
  price,
  brand,
  stage,
  min,
  max,
  keywords
}: Props): Promise<Response<CustomResponse<Product[]>>> => {
  let url = `${BASE_URL}${GET_ALL_PRODUCTS}?page=${page}`;

  if (category !== undefined && category !== null && category !== '') {
    url += `&category=${category}`;
  }

  if (bestseller !== undefined && bestseller !== null && bestseller !== '' && bestseller === 'desc') {
    url += `&bestseller=${bestseller}`;
  }

  if (price !== undefined && price !== null && price !== '' && (price === 'asc' || price === 'desc')) {
    url += `&price=${price}`;
  }

  if (brand !== undefined && brand !== null && brand !== '') {
    url += `&brand=${brand}`;
  }
  
  if (stage !== undefined && stage !== null && stage !== '') {
    url += `&stage=${stage}`;
  }

  if (min !== undefined && min !== null) {
    url += `&min=${min}`;
  }

  if (max !== undefined && max !== null) {
    url += `&max=${max}`;
  }

  if (keywords !== undefined && keywords !== null) {
    url += `&keywords=${keywords}`;
  }

  const response = await httpService.get(url);
  return response;
};

