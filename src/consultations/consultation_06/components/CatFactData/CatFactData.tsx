import Button from "components/Button/Button";
import {
  CatFactDataContainer,
  FactItem,
  FactItemControl,
  Fact,
  ButtonControl,
} from "./styles";
import { useContext } from "react";
import { CatFactRandomizerContext } from "../CatFactRandomizer/CatFactRandomizer";

// Деструктуризируем объект

function CatFactData() {
  // Шаг 5.
  const catFact = useContext(CatFactRandomizerContext);
  console.log(catFact);

  const { data, setCatFactData } = catFact;

const onDelete = (id: any) => {
  setCatFactData((prevValue: any[]) => {
    return prevValue.filter((factObj: any) => factObj.id !== id)
  });
  };

  const catFacts = data.map((value) => {
    return (
      <FactItem key={value.id}>
        <FactItemControl>
          <Fact>{value.fact}</Fact>
          <ButtonControl>
            <Button name="DELETE" isRed onClick={() => onDelete(value.id)} />
          </ButtonControl>
        </FactItemControl>
      </FactItem>
    );

  });

  return <CatFactDataContainer>{catFacts}</CatFactDataContainer>;
}

export default CatFactData;

/* Дополнительные задания:
  - создать кнопку "Удалить все факты";
  - создать приложение "ToDoList" - в поле ввода указывается задача, которая при нажатии на кнопку попадает в общий список;
  - у каждой задачи есть отдельная кнопка удаления
*/