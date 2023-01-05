import { SessionsProps, SessionItem } from "common/interfaces/SessionsProps";

export interface FirstStepProps extends SessionsProps {
  onSessionBtnClick: (session: SessionItem) => Promise<boolean> | undefined;
  chosenSession: SessionItem | null;
}
