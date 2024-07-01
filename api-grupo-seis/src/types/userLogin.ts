export interface UserLoginResponse {
  token: string;
  id: number;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}
