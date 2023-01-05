import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DoubleBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  srcSecond: string;
}
