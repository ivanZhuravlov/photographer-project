import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

export interface RegularButtonProps
  extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  > {
  children: ReactNode;
  className?: string;
  black?: boolean;
  white?: boolean;
  opacity?: boolean;
  monochrome?: boolean;
  style?: Record<string, unknown>;
  fixed?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  form?: string;
}
