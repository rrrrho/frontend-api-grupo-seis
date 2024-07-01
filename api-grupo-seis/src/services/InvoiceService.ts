import axios from "axios";
import { CustomResponse } from "../types/customResponse";
import { BASE_URL, FINISHED_CHECKOUT } from "./apiUrls";
import httpService from "./httpService";
import { InvoiceRequest, InvoiceResponse } from "../types/invoice";

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
