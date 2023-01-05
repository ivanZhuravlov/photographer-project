import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  srcWebp?: string;
  className?: string;
  alt?: string;
}
