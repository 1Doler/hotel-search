import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  label: string;
  error?: string;
}
