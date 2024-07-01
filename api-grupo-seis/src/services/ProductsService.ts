import { CustomResponse, Response } from "../types/customResponse";
import { BASE_URL, GET_ALL_PRODUCTS, USERS } from "./apiUrls";
import { Product } from "../components/ProductForm/ProductForm";
import { Response } from "../types/customResponse";
import httpService from "./httpService";
import axios from "axios";
import { toCamelCase, toSnakeCase } from "../utils/checkout";
import { ProductRequest } from "../types/product";

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
}: Props): Promise<Response<CustomResponse<ProductRequest[]>>> => {

  let url = `${BASE_URL}${GET_ALL_PRODUCTS}?page=${page}`;

  if (category !== undefined && category !== null && category !== "") {
    url += `&category=${category}`;
  }

  if (
    bestseller !== undefined &&
    bestseller !== null &&
    bestseller !== "" &&
    bestseller === "desc"
  ) {
    url += `&bestseller=${bestseller}`;
  }

  if (
    price !== undefined &&
    price !== null &&
    price !== "" &&
    (price === "asc" || price === "desc")
  ) {
    url += `&price=${price}`;
  }

  if (brand !== undefined && brand !== null && brand !== "") {
    url += `&brand=${brand}`;
  }

  if (stage !== undefined && stage !== null && stage !== "") {
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

export const createProduct = async (
  product: ProductRequest
): Promise<Response<Product>> => {
  const snakeCaseProduct = toSnakeCase(product);
  try {
    const response = await httpService.post(
      `${BASE_URL}${GET_ALL_PRODUCTS}`,
      snakeCaseProduct
    );
    return {
      statusCode: response.status,
      content: response.data,
    };
  } catch (error) {
    throwError(error);
  }
};

export const updateProduct = async (
  product: ProductRequest,
  productId: number
): Promise<Response<Product>> => {
  const snakeCaseProduct = toSnakeCase(product);
  try {
    const response = await httpService.put(
      `${BASE_URL}${GET_ALL_PRODUCTS}/${productId}`,
      snakeCaseProduct
    );
    return {
      statusCode: response.status,
      content: response.data,
    };
  } catch (error) {
    throwError(error);
  }
};

export const deleteProduct = async (id: number): Promise<Response<Product>> => {
  try {
    const response = await httpService.delete(
      `${BASE_URL}${GET_ALL_PRODUCTS}/${id}`
    );
    return {
      statusCode: response.status,
      content: response.data,
    };
  } catch (error) {
    throwError(error);
  }
};

export const getProductsByVendor = async (
  vendorId: number,
  page: number
): Promise<Response<Product[]>> => {
  try {
    const response = await httpService.get(
      `${BASE_URL}${GET_ALL_PRODUCTS}/${USERS}/${vendorId}?page=${page}`
    );
    return {
      statusCode: response.status,
      content: response.data.content.map((p) => toCamelCase(p)),
      totalPages: response.data.totalPages,
    };
  } catch (error) {
    throwError(error);
  }
};

const throwError = (error: any) => {
  if (axios.isAxiosError(error)) {
    throw {
      statusCode: error.response ? error.response.status : 500,
      data: null,
      errorMessage: error.message,
    };
  } else {
    throw error;
  }
};
