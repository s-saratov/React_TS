import "./styles.css";
import { InputProps } from "./types";

function Input({ name, type, placeholder, label, id }: InputProps) {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;