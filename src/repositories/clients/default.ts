import { create as createClient } from "axios";

import { Config } from "@/repositories/config";
// import ResponseErrorHandler from "@/middlewares/errorHandler";
const axiosInstance = createClient({
  baseURL: `${Config.baseURL}${Config.version}`,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  // (error) => ResponseErrorHandler(error)
);

export default axiosInstance;
