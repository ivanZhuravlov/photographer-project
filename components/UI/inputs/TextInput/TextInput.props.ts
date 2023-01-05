import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldErrors } from "react-hook-form";

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: string;
  label?: string;
  grey?: boolean;
  placeholder?: string;
  className?: string;
  errors?: FieldErrors;
}
