import { InputContainer, InputElement, Label } from "./styles";
import { InputProps } from "./types";

function InputTextArea({
  name,
  rows = 2,
  placeholder,
  label,
  id,
  value,
  onChange,
}: InputProps) {
  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        name={name}
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default InputTextArea;