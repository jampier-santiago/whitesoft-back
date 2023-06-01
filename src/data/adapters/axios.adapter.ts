// Packages
import axios, { AxiosInstance } from "axios";

// Interfaces
import { HttpAdapter } from "./adapter.interface";

export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string, config?: any): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url, config);
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async post<T>(url: string, config?: any): Promise<T> {
    try {
      const { data } = await this.axios.post<T>(url, config);
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async put<T>(url: string, config?: any): Promise<T> {
    try {
      const { data } = await this.axios.put<T>(url, config);
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async delete<T>(url: string, config?: any): Promise<T> {
    try {
      const { data } = await this.axios.delete<T>(url, config);
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
