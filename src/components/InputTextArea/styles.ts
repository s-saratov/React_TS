import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 100%;
`;

export const InputElement = styled.textarea<{ rows?: number }>`
  padding: 12px;
  gap: 10px;
  width: 100%;
  min-height: ${(props) => props.rows ? `${props.rows * 24}px` : "48px"};
  resize: none;
  background: #ffffff;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  color: rgba(111, 111, 111, 1);
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  &:placeholder {
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
