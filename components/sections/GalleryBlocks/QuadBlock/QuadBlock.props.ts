import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface QuadBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  srcSecond: string;
  srcThird: string;
  srcQuad: string;
}
