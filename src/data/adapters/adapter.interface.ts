export interface HttpAdapter {
  get<T>(url: string, config?: any): Promise<T>;
  post<T>(url: string, config?: any): Promise<T>;
  put<T>(url: string, config?: any): Promise<T>;
  delete<T>(url: string, config?: any): Promise<T>;
}
