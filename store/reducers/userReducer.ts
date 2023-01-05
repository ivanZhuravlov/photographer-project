import { UserState, UserActionTypes, UserAction } from "./../types/user";

const initialState: UserState = {
  user: {},
  isAuth: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    case UserActionTypes.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
