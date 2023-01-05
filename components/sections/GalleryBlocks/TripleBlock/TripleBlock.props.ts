import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TripleBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  srcSecond: string;
  srcThird: string;
}
