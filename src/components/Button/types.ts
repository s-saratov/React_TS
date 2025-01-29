export interface ButtonProps {
    name?: string;
    type?: "submit" | "button" | "reset";
    isDisabled?: boolean;
    onClick?: () => void;
    minHeight?: string;
  }