import { User } from "services/AuthService";

export interface UserState {
  user: User;
  isAuth: boolean;
}

export enum UserActionTypes {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
}

export interface setAuthAction {
  type: UserActionTypes.SET_AUTH;
  payload: boolean;
}
export interface setUserAction {
  type: UserActionTypes.SET_USER;
  payload: User;
}
export type UserAction = setAuthAction | setUserAction;
