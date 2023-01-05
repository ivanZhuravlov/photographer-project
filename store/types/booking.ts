import { SessionItem } from "@/common/interfaces/SessionsProps";

export interface BookingState {
  session: SessionItem | null;
}
export enum BookingActionTypes {
  GET_CURRENT_STEP = "GET_CURRENT_STEP",
  CLEAR_STATE = "CLEAR_STATE",
}

export interface GetCurrentAction {
  type: BookingActionTypes.GET_CURRENT_STEP;
  payload: SessionItem;
}

export interface ClearCurrentAction {
  type: BookingActionTypes.CLEAR_STATE;
  payload: null;
}

export type BookingAction = GetCurrentAction | ClearCurrentAction;
