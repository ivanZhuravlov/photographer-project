import { SessionItem } from "@/common/interfaces/SessionsProps";
import {
  BookingActionTypes,
  GetCurrentAction,
  ClearCurrentAction,
} from "./../types/booking";

export const getCurrentStep = (session: SessionItem): GetCurrentAction => ({
  type: BookingActionTypes.GET_CURRENT_STEP,
  payload: session,
});

export const clearCurrentStep = (): ClearCurrentAction => ({
  type: BookingActionTypes.CLEAR_STATE,
  payload: null,
});
