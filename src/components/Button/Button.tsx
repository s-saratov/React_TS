import { ButtonProps } from "./types"
import { MainButton } from "./styles";

// interface ButtonProps {
//   name?: string;
//   type: "submit" | "button" | "reset";
//   onClick: () => void;
// }

function Button({ name = "SEND", type = 'button', isDisabled = false, isRed = false, onClick, minHeight }: ButtonProps) {
  return (
    <MainButton type={type} disabled={isDisabled} isRed={isRed} onClick={onClick} minHeight={minHeight}>
      {name}
    </MainButton>
  );
}

export default Button;