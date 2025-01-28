import Button from "../Button/Button";
import { useState } from "react";
import { ButtonWrapper, CounterWrapper, ResultContainer } from "./styles";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevState) => prevState + 1);
  };

  console.log("counter in Counter Component", counter);

  const onMinusClick = (): void => {
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <CounterWrapper>
      <ButtonWrapper>
        <Button name="-" type="button" onClick={onMinusClick} />
      </ButtonWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonWrapper>
        <Button name="+" type="button" onClick={onPlusClick} />
      </ButtonWrapper>
    </CounterWrapper>
  );
}

export default Counter;