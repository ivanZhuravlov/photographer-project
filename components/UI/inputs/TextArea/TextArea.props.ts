import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  grey?: boolean;
  placeholder?: string;
  className?: string;
}
