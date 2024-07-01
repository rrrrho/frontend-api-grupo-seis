
export interface UserRegister {
    id?: number,
    name: string,
    lastname: string,
    email: string,
    dni: string,
    phoneNumber: string,
    password: string,
    state: boolean,
    role: "VENDOR" | "BUYER";
}

export interface User {
  id: number;
  name: string;
  lastname: string;
  dni: string;
  phoneNumber: string;
  email: string;
  role: string;
  state: boolean;
}