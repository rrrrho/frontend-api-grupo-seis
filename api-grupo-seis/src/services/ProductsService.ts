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
  stage?: string
}

export const getProductsFiltered = async ({
  category,
  page,
  bestseller,
  price,
  brand,
  stage
}: Props): Promise<Response<Product[]>> => {
  let url = `${BASE_URL}${GET_ALL_PRODUCTS}?page=${page}`;

  if (category !== undefined && category !== null && category !== '') {
    url += `&category=${category}`;
  }

  if (bestseller !== undefined && bestseller !== null && bestseller !== '' && bestseller === 'Mas relevante') {
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

  const response = await httpService.get(url);
  return response;
};

