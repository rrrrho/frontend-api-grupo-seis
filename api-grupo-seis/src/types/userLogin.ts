export interface UserLoginResponse {
  id: number,
  name: string,
  lastname: string,
  email: string;
  token?: string;
  role?: "VENDOR" | "BUYER";
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

