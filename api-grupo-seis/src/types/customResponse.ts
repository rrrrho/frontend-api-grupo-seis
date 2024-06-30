export interface CustomResponse<T> {
  content: T;
  errorMessage: string;
  totalPages: number;
  totalElements: number;
  currentPage: number;
  pageSize: number;
}

export interface Response<T> {
  config: {},
  data: T,
  headers: {},
  status: number,
  statusText: string
}