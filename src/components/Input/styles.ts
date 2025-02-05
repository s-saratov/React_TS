import styled from "@emotion/styled";

interface InputStyledProps {
  type: "email" | "number" | "password" | "tel" | "text" | "url" | "checkbox";
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 100%;
`;

export const InputElement = styled.input<InputStyledProps>`
  padding: ${({ type }) => (type === "checkbox" ? "0px" : "12px")};
  gap: 10px;
  width: ${({ type }) => (type === "checkbox" ? "auto" : "100%")};
  height: ${({ type }) => (type === "checkbox" ? "auto" : "50px")};
  background: #ffffff;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  color: rgba(111, 111, 111, 1);
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  &::placeholder {
    opacity: 40%;
  }
`;

export const Label = styled.label`
  width: 100%;
  color: rgba(111, 111, 111, 1);
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 18px;
`;
