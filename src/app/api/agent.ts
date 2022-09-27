import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const { data, status } = error.response! as any;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];

          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key])
            }
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 500:
        toast.error(data.title);
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  },
)

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
}

const Product = {
  list: () => requests.get('products'),
  details: (id: number) => requests.get(`products/${id}`),
}

const TestErrors = {
  gete400Error: () => requests.get('buggy/bad-request'),
  gete401Error: () => requests.get('buggy/unauthorized'),
  gete404Error: () => requests.get('buggy/not-found'),
  gete500Error: () => requests.get('buggy/server-error'),
  getValidationError: () => requests.get('buggy/validation-error'),
}

const agent = {
  Product,
  TestErrors,
}

export default agent;