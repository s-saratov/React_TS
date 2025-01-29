import { ButtonProps } from "./types"
import { MainButton } from "./styles";

// interface ButtonProps {
//   name?: string;
//   type: "submit" | "button" | "reset";
//   onClick: () => void;
// }

function Button({ name = "SEND", type = 'button', isDisabled = false, onClick, minHeight }: ButtonProps) {
  return (
    <MainButton type={type} disabled={isDisabled} onClick={onClick} minHeight={minHeight}>
      {name}
    </MainButton>
  );
}

export default Button;