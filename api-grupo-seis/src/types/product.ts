export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  voters: number;
  discount: number;
  quota: number;
  stock: number;
  bestseller: boolean;
}

export interface ProductRequest {
  userId: number;
  title: string;
  description: string;
  imageUrl: string;
  brand: string;
  petCategory: string;
  petStage: string;
  price: number;
  discount: number;
  stock: number;
}
