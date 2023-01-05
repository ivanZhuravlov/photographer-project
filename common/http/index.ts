import axios from "axios";
import { AuthResponseRequest } from "services/AuthService";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const $api = axios.create({
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer  ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && err.config && !err.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await $api.get<AuthResponseRequest>(
          `${api}/api/auth/refresh`,
          { withCredentials: true }
        );
        localStorage.setItem("token", response.data.token);
        return $api.request(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    throw err;
  }
);

export default $api;
