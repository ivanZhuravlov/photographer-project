import {
  BookingState,
  BookingActionTypes,
  BookingAction,
} from "./../types/booking";

const initialState: BookingState = {
  session: null,
};

export const bookingReducer = (
  state = initialState,
  action: BookingAction
): BookingState => {
  switch (action.type) {
    case BookingActionTypes.GET_CURRENT_STEP:
      return {
        ...state,
        session: action.payload,
      };
    case BookingActionTypes.CLEAR_STATE:
      return {
        ...state,
        session: null,
      };
    default:
      return state;
  }
};
