import $api from "@/common/http";
import { Dispatch } from "redux";
import AuthService, { AuthResponseRequest, User } from "services/AuthService";
import { UserActionTypes, UserAction } from "./../types/user";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

export const updateUser =
  (user: User) =>
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.SET_USER,
        payload: user,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const login =
  (email: string, password: string) =>
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await AuthService.login(email, password);

      localStorage.setItem("token", response.data.token);
      dispatch({
        type: UserActionTypes.SET_AUTH,
        payload: true,
      });
      dispatch({
        type: UserActionTypes.SET_USER,
        payload: response.data.user,
      });

      return true;
    } catch (e) {
      console.log(e);

      return false;
    }
  };

export const loginFromEmail =
  (email: string, password: string) =>
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await AuthService.loginFromEmail(email, password);
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: UserActionTypes.SET_AUTH,
        payload: true,
      });
      dispatch({
        type: UserActionTypes.SET_USER,
        payload: response.data.user,
      });
    } catch (e) {
      console.log(e);
    }
  };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const logout = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    const token = localStorage.getItem("token");
    await AuthService.logout(token);
    localStorage.removeItem("token");
    dispatch({
      type: UserActionTypes.SET_AUTH,
      payload: false,
    });
    dispatch({
      type: UserActionTypes.SET_USER,
      payload: {},
    });
  } catch (e) {
    console.log(e);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const checkAuth = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    const response = await $api.get<AuthResponseRequest>(
      `${api}/api/auth/user`,
      { withCredentials: true }
    );
    dispatch({
      type: UserActionTypes.SET_AUTH,
      payload: true,
    });
    dispatch({
      type: UserActionTypes.SET_USER,
      payload: response.data.user,
    });
  } catch (e) {
    console.log(e);
  }
};
