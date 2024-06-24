import { BASE_URL, GET_ALL_PRODUCTS } from "./apiUrls";
import { Product } from "../types/product";
import { Response } from "../types/customResponse";
import httpService from "./httpService";

interface Props {
  category: string,
  page: number,
  price?: string,
  bestseller?: string
  brand?: string,
  stage?: string,
  min?: number,
  max?: number
}

export const getProductsFiltered = async ({
  category,
  page,
  bestseller,
  price,
  brand,
  stage,
  min,
  max
}: Props): Promise<Response<Product[]>> => {
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

  const response = await httpService.get(url);
  return response;
};

