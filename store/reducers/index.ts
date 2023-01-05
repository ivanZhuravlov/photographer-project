import { combineReducers } from "redux";
import { bookingReducer } from "./bookingReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  booking: bookingReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
