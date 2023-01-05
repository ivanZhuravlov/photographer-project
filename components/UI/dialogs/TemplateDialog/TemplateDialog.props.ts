import { ReactNode } from "react";

export interface TemplateDialogProps {
  isOpened: boolean;
  children: ReactNode;
  firstBG?: string;
  secondBG?: string;
  onClose: () => void;
  currentStepPopup?: number;
}
