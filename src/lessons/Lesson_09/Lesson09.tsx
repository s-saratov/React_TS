import { ChangeEvent, useEffect, useState } from "react";

import Input from "../../components/Input/Input";
import { InputsContainer, Lesson09Wrapper, Result } from "./styles";

function Lesson09() {
  // Нектонтролируемый компонент - это компонент, значение которого мы не контролируем,
  // т.е. не создаём никакого локального хранилища, в котором будет храниться значение

  // Контролируемый компонент - это компонент, состояние которого хранится внутри компонента React
  // и мы можем контролировать его изменение

  // 1-й шаг контроля: создание state, в котором мы будем хранить значение input

  const [userNameValue, setUserNameValue] = useState<string>("Tom");
  const [ageValue, setAgeValue] = useState<string>("");

  // 2-й шаг контроля - создание функции, которая будет забирать значение, введённое пользователем
  // из объекта event и сохранять его в state

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    // setUserNameValue(`${event.target.value} react`)
    setUserNameValue(event.target.value);
  };

  const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeValue(event.target.value);
  };

  // console.log('Get data')

  // useEffect при монтировании компонента (первый рендер)

  // Чтобы функция (первый аргумент) выполнилась только один раз при первом рендере, передаётся
  // пустой массив зависимостей (второй аргумент)
  useEffect(() => {
    console.log("Mounting");
  }, []);

  // useEffect при обновлении компонента (повторный рендер)

  // Чтобы функция (первый аргумент) выполнилась при изменении значения в первом поле ввода,
  // передаётся массив зависимостей с тем state, при изменении которого нужно выполнять функцию (второй аргумент)
  useEffect(() => {
    console.log("Update");
  }, [userNameValue]);

  // useEffect при размонтировании компонента (до удаления)

  // Чтобы функция (первый аргумент) выполнилась один раз, но непосредственно перед уаделнием компонента
  // В первом аргументе (функции) необходимо вернуть другую функцию, которая и будет выполняться перед размонтированием
  // Второй аргумент - пустой массив зависимостей

  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);

  return (
    <Lesson09Wrapper>
      <InputsContainer>
        <Input
          name="user_name"
          label="User name"
          id="name_id"
          placeholder="Enter your name"
          value={userNameValue}
          onChange={onChangeName}
        />
        <Input
          name="age"
          label="Age"
          id="age_id"
          placeholder="Enter your age"
          value={ageValue}
          onChange={onChangeAge}
        />
        <Result>{userNameValue}</Result>
      </InputsContainer>
    </Lesson09Wrapper>
  );
}

export default Lesson09;