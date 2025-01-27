import Button from "../Button/Button";
import "./styles.css";

// 1-й шаг - импорт хука useState из React
import { useState } from "react";

function Counter() {

  // 2-й шаг - вызываем хук useState и передаём в вызов (в круглые скобки) начальное состояние (initialState)

  // При вызвове хук useState возвращает массив из двух элементов
  // 1-й элемент - значение состояния (актуальное)
  // 2-й элемент - функция, которая может изменять значение состояния
  // const counterStateAr = useState(2);
  // const [counter, setCounter] = counterStateAr; // деструктуризация массива хука
  // console.log(counterStateAr); // [0, null]

  // Для упрощения делаем деструктуризацию
  const [counter, setCounter] = useState(0);

  // 3-й шаг - создаём функции, которые будут менять состояние
  const onPlusClick = () => {

    // 1-й вариант использования функции изменения состояния - передача новго значения в вызов функции
    // setCounter(45);

    // 2-й вариант - передача в вызов setCounter функции callback, если новое значение должно быть вычислено на основе предыдущего
    // Из функции необходимо вернуть новое значение состояния
    setCounter((prevState) => prevState + 1);
  };

  const onMinusClick = () => {
    setCounter((prevValue) => prevValue - 1);
  };
  
  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" type="button" onClick={onMinusClick} />
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" type="button" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
