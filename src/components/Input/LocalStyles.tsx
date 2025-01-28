import { Global, css } from "@emotion/react";

const localStyles = css`
  input,
  label {
    width: 100%;
  }

  label {
    color: rgba(111, 111, 111, 1);
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }

  input::placeholder {
    opacity: 40%;
  }
`;

function LocalStyles() {
  return <Global styles={localStyles} />;
}

export default LocalStyles;