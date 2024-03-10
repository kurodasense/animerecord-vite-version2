import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import type { IRequestInterceptors, IRequestConfig } from "./types";

class Request {
  instance: AxiosInstance; // axios instance 实例
  interceptors?: IRequestInterceptors; // 可选的拦截器

  constructor(config: IRequestConfig) {
    this.instance = axios.create(config);
    if (config.interceptors) {
      this.interceptors = config.interceptors;
      this.instance.interceptors.request.use(
        this.interceptors?.requestInterceptor,
        this.interceptors?.requestInterceptorCatch
      );
      this.instance.interceptors.response.use(
        this.interceptors?.responseInterceptor,
        this.interceptors?.responseInterceptorCatch
      );
    }
  }

  request<T>(config: IRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config?.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config as InternalAxiosRequestConfig);
      }
      if (config?.interceptors?.requestInterceptorCatch) {
        config = config.interceptors.requestInterceptorCatch(config as InternalAxiosRequestConfig);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config?.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          if (config?.interceptors?.responseInterceptorCatch) {
            err = config.interceptors.responseInterceptorCatch(err);
          }
          reject(err);
        });
    });
  }

  get<T>(config: IRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T>(config: IRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
}

export default Request;
