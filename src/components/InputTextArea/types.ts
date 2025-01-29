import { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  rows?: number;
  placeholder?: string;
  label?: string;
  id?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
