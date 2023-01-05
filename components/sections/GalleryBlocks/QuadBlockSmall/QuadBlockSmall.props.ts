import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface QuadBlockSmallProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  srcSecond: string;
  srcThird: string;
  srcQuad: string;
}
