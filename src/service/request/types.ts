import type { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export interface IRequestInterceptors {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig; // 请求拦截
  requestInterceptorCatch?: (error: any) => any; // 请求的错误拦截
  responseInterceptor?: (res: any) => any; // 响应拦截
  responseInterceptorCatch?: (error: any) => any; // 响应的错误拦截
}

export interface IRequestConfig extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors;
}
