// Packages
import axios, { AxiosInstance } from "axios";

// Interfaces
import { HttpAdapter } from "./adapter.interface";

export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string, config?: any): Promise<T> {
    return new Promise((response, reject) => {
      this.axios
        .get<T>(url, config)
        .then(({ data }) => {
          response(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async post<T>(url: string, config?: any): Promise<T> {
    return new Promise((response, reject) => {
      this.axios
        .post<T>(url, config)
        .then(({ data }) => {
          response(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async put<T>(url: string, config?: any): Promise<T> {
    return new Promise((response, reject) => {
      this.axios
        .put<T>(url, config)
        .then(({ data }) => {
          response(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async delete<T>(url: string, config?: any): Promise<T> {
    return new Promise((response, reject) => {
      this.axios
        .delete<T>(url, config)
        .then(({ data }) => {
          response(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
