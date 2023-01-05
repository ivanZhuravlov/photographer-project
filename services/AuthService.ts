import $api from "./../common/http";
import { AxiosResponse } from "axios";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

export interface User {
  username?: string;
  email?: string;
  isActivated?: boolean;
  id?: number;
  image?: string;
}

export interface AuthResponseRequest {
  token: string;
  refreshToken: string;
  user: User;
}

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponseRequest>> {
    return $api.post(`${api}/api/auth/login`, { email, password });
  }

  static async logout(token: string | null): Promise<void> {
    return $api.post(`${api}/api/auth/logout`, { token });
  }
  static async loginFromEmail(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponseRequest>> {
    return $api.post(`${api}/api/auth/email-login`, { email, password });
  }
}
