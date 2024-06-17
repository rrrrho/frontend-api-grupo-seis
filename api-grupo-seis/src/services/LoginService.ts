import httpService from "./httpService";
import { BASE_URL, LOGIN_URL } from "./apiUrls";
import axios from "axios";
import { UserLoginRequest, UserLoginResponse } from "../types/userLogin";
import { CustomResponse } from "../types/customResponse";

export const loginUser = async (
  userLogin: UserLoginRequest
): Promise<CustomResponse<UserLoginResponse>> => {
  try {
    const response = await httpService
    .post(
      `${BASE_URL}${LOGIN_URL}`,
      userLogin
    );
    console.log(response);

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
