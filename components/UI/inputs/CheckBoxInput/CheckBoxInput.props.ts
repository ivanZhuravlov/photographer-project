import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { FieldErrors } from "react-hook-form";

export interface CheckBoxInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: ReactNode | string;
  className?: string;
  id: string;
  errors?: FieldErrors;
}
