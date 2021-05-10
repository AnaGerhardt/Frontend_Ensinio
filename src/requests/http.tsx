import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { SERVER, DEBUG } from "src/consts";

const mainAxiosConfig: AxiosRequestConfig = {
  baseURL: SERVER.MAIN_SERVICE,
  headers: {
    "Content-Type": "application/json",
  },
};

const instances = {
  main: axios.create(mainAxiosConfig),
};

async function requestInterceptor(config: AxiosRequestConfig) {
  if (DEBUG) {
    console.info("⬆ requesting", config);
  }
  return config;
}

async function requestError(error: any) {
  if (DEBUG) {
    console.error("❗ request error", error);
  }

  return Promise.reject(error);
}

async function responseInterceptor(response: AxiosResponse) {
  if (DEBUG) {
    console.info("⬇ response", response);
  }

  return response;
}

async function responseError(
  error: AxiosError
): Promise<AxiosError | AxiosResponse> {
  if (DEBUG) {
    console.info("❗ response error", error);
  }
  return Promise.reject(error);
}

instances.main.interceptors.request.use(requestInterceptor, requestError);
instances.main.interceptors.response.use(responseInterceptor, responseError);

async function request(method: AxiosRequestConfig["method"], url: string) {
  const axiosInstance = instances["main"];

  try {
    const response = await axiosInstance(url, {
      method,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export default {
  get: async (url: string) => request("GET", url),
};
