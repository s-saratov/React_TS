import { ButtonProps } from "./types"
import { MainButton } from "./styles";

// interface ButtonProps {
//   name?: string;
//   type: "submit" | "button" | "reset";
//   onClick: () => void;
// }

function Button({ name = "SEND", type, isDisabled = false, onClick }: ButtonProps) {
  return (
    <MainButton type={type} disabled={isDisabled} onClick={onClick}>
      {name}
    </MainButton>
  );
}

export default Button;