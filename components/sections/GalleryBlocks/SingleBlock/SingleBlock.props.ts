import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SingleBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
}
