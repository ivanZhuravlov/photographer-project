import { AxiosResponse } from "axios";
import $api from "./../common/http";
import { User } from "./AuthService";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse> {
    return $api.get<User[]>("/api/users");
  }
}
