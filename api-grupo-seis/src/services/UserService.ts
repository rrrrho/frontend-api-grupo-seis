import axios from "axios";
import { UserRegister } from "../types/user";
import { BASE_URL, REGISTER_URL } from "./apiUrls";
import httpService from "./httpService";
import { Response } from "../types/customResponse";

export const registerUser = async (
    userRegister: UserRegister
  ): Promise<Response<UserRegister>> => {
    try {
      const response = await httpService
      .post(
        `${BASE_URL}${REGISTER_URL}`,
        userRegister
      );
      console.log(response);
  
      return response;
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