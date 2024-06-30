import axios from "axios";
import httpService from "./httpService";
import { User, UserRegister } from "../types/user";
import { Response } from "../types/customResponse";
import { BASE_URL, USERS } from "./apiUrls";
import { toCamelCase } from "../utils/checkout";

interface GetUsersFilteredProps {
  query: string;
  filter: string;
  orderBy: string;
  selectedPage: number;
}

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

export const getUsersFiltered = async ({
  query,
  filter,
  orderBy,
  selectedPage,
}: GetUsersFilteredProps): Promise<Response<User[]>> => {
  try {
    const response = await axios.get(`${BASE_URL}${USERS}`, {
      params: {
        name: query && filter === "name" ? query : undefined,
        lastname: query && filter === "lastname" ? query : undefined,
        email: query && filter === "email" ? query : undefined,
        sort: orderBy ? orderBy : undefined,
        page: query ? 0 : selectedPage,
      },
    });
    return {
      statusCode: response.status,
      users: response.data.content,
      totalPages: response.data.totalPages,
    };
  } catch (error) {
    console.error(error);
  }
};

export const changeUserState = async (
  id: number,
  state: boolean
): Promise<any> => {
  try {
    const response = await axios.patch(
      `${BASE_URL}${USERS}/${id}?state=${state}`
    );
    return response.status;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id: number): Promise<any> => {
  try {
    const response = await axios.delete(`${BASE_URL}${USERS}/${id}`);
    return response.status;
  } catch (error) {
    console.error(error);
  }
};