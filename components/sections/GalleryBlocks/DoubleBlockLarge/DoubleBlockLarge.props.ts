import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DoubleBlockLargeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  srcSecond: string;
}
