import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SessionItem } from "common/interfaces/SessionsProps";

export interface ThirdStepProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  chosenSession: SessionItem | null;
  clientEmail: string;
}
