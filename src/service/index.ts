import Request from "./request";

const request = new Request({
  timeout: import.meta.env.VITE_TIME_OUT,
  baseURL: import.meta.env.VITE_BASE_URL
});

export default request;
