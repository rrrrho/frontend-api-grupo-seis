import { Product } from "../components/ProductForm/ProductForm";

export interface InvoiceRequest {
  products: Product[];
  userId: number;
  payment_method: string;
  shipping_method: string;
  shipping_data: string;
  last_four_digits: string;
}

export interface InvoiceResponse {
  products: Product[];
  user: UserInvoiceResponse;
  discount: number;
  shippingMethod: string;
  shippingCost: number;
  paymentMethod: string;
  shippingData: string;
  lastFourDigits: string;
  total: number;
}

export interface UserInvoiceResponse {
  name: string;
  lastname: string;
  email: string;
}
