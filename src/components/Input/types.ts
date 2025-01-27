export interface InputProps {
  name: string;
  type: "email" | "number" | "password" | "tel" | "text" | "url";
  placeholder?: string;
  label?: string;
  id?: string;
}
