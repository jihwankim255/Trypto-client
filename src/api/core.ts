import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 500000,
});

// 요청 전에 실행되는 인터셉터
api.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 수행할 작업 추가
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);
// 응답을 받기 전에 실행되는 인터셉터
api.interceptors.response.use(
  (response) => {
    // 응답 데이터를 가공하여 반환
    return response.data;
  },
  (error) => {
    // 응답 에러 처리
    return Promise.reject(error);
  }
);

// export async function fetcher<TData, TParams = any>([url, ...params]: [
//   string,
//   TParams
// ]) {
//   return api.get<TData>(url, {
//     params: params,
//   });
// }
