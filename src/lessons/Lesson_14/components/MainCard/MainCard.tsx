import { useState, createContext } from "react";
import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import { MainCardContextType, UserData } from "./types";

// Шаг 1. Создаём хранилище - контекст, с помощью функции createContext
// Необходимо сделать экспорт, чтобы затем использовать для создания
// export const MainCardContext = createContext<undefined | UserData>(undefined);

export const MainCardContext = createContext<MainCardContextType>({
  data: undefined,
  onDataChange: () => {},
});

function MainCard() {
  const [userData, setUserData] = useState<UserData | undefined>({
    firstName: "Bart",
    lastName: "Simpson",
    age: 11,
  });
  return (
    // Шаг 2. Создаём обёртку, котороая позволит получить значения из контекста в любом компоненте,
    // который будет вложен в компонент с обёрткой (внук, правнук и т.д.)
    // В провайдер мы добавляем значение, к которому и необходим достуа (userData)
    // <MainCardContext.Provider value={userData}>
    <MainCardContext.Provider value={
      {
        data: userData,
        onDataChange: setUserData,
      }
    }>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        {/* Пример с props drilling */}
        {/* <Section data={userData}/> */}
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  );
}
export default MainCard;