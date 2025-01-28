import { InputContainer, InputElement, Label } from "./styles";
import { InputProps } from "./types";

function Input({ name, type = "text", placeholder, label, id }: InputProps) {
  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement name={name} id={id} type={type} placeholder={placeholder} />
    </InputContainer>
  );
}

export default Input;