import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TextButtonProps
  extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  > {
  children: ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  assistance?: boolean;
  primary?: boolean;
}
