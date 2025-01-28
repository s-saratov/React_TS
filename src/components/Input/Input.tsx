import LocalStyles from "./LocalStyles";
import { InputContainer, InputElement } from "./styles";
import { InputProps } from "./types";

function Input({ name, type = "text", placeholder, label, id }: InputProps) {
  return (
    <>
      <LocalStyles />
      <InputContainer>
        {label && <label htmlFor={id}>{label}</label>}
        <InputElement
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </InputContainer>
    </>
  );
}

export default Input;
