import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface LinkButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  className?: string;
  fontSize?: number;
  lineHeight?: number;
  style?: Record<string, unknown>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
