import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParallaxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  divisionBy?: number;
  duration?: number;
  startedOn?: number;
  className?: string;
}
