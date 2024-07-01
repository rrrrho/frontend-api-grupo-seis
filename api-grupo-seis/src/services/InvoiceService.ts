import axios from "axios";
import { CustomResponse } from "../types/customResponse";
import { BASE_URL, FINISHED_CHECKOUT, USERS } from "./apiUrls";
import httpService from "./httpService";
import { InvoiceRequest, InvoiceResponse } from "../types/invoice";
import { toCamelCase } from "../utils/checkout";

export const createInvoice = async (
  invoice: InvoiceRequest
): Promise<CustomResponse<InvoiceResponse>> => {
  try {
    const response = await httpService.post(
      `${BASE_URL}${FINISHED_CHECKOUT}`,
      invoice
    );
    return {
      statusCode: response.status,
      content: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        statusCode: error.response ? error.response.status : 500,
        data: null,
        errorMessage: error.message,
      };
    } else {
      throw error;
    }
  }
};

export const getInvoicesByUser = async (
  userId: number,
  page: number
): Promise<CustomResponse<InvoiceResponse[]>> => {
  try {
    const response = await httpService.get(
      `${BASE_URL}${FINISHED_CHECKOUT}/${USERS}/${userId}?page=${page}`
    );
    return {
      statusCode: response.status,
      invoices: response.data.content.map((i) => toCamelCase(i)),
      totalPages: response.data.totalPages,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        statusCode: error.response ? error.response.status : 500,
        data: null,
        errorMessage: error.message,
      };
    } else {
      throw error;
    }
  }
};
