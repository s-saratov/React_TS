import styled from "@emotion/styled";

interface MainButtonStyledProps {
  $isRed: boolean;
  minHeight: string;
}

export const MainButton = styled.button<MainButtonStyledProps>`
  width: 100%;
  min-height: ${({minHeight}) => minHeight || "70px"};
  background: ${({$isRed}) => $isRed ? "red" : "#1f27f5"};
  outline: none;
  border: none;
  padding: 20px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

  &:disabled {
    background-color: #7d7d80;
    color: rgb(166, 163, 163);
    cursor: default;
  }
`;

// .main-button {
//   width: 100%;
//   min-height: 70px;
//   outline: none;
//   border: none;
//   padding: 20px;
//   background: #1f27f5;
//   border-radius: 4px;
//   color: white;
//   font-family: Lato, Geneva, Tahoma, sans-serif;
//   font-size: 16px;
//   cursor: pointer;
// }
