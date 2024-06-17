export interface CustomResponse<T> {
  statusCode: number;
  content: T ;
  errorMessage?: string;
  totalPages?: number;
  totalElements?: number;
  currentPage?: number;
  pageSize?: number;
}
