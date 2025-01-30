import { useEffect, useState } from "react";
import { v4 } from "uuid";
import axios from "axios";

import Button from "../../components/Button/Button";
import {
  ButtonWrapper,
  CatFact,
  CatFactsContainer,
  CatFactWrapper,
  ContentWrapper,
  DeleteButtonWrapper,
  Lesson11Wrapper,
} from "./styles";

function Lesson11() {
  // Задаём необходимые состояния
  const [catFact, setCatFact] = useState<string>("");
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [catFacts, setCatFacts] = useState<string[]>([]); // массив для фактов

  // Функция запроса факта с использованием axios
  const fetchCatFact = async () => {
    const CAT_FACT_URL: string = "https://catfact.ninja/fact";
    setCatFact("");
    setError(undefined);
    setIsLoading(true);

    try {
      const result = await axios.get(CAT_FACT_URL);
      const data = result.data;
      setCatFact(data.fact);
      setCatFacts((prevFacts) => [...prevFacts, data.fact]);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Функция очистки всего массива фактов
  const removeCatFacts = () => {
    setCatFacts([]);
  };

  // Функция для размещения фактов в блоке
  const currentCatFacts = catFacts.map((currentCatFact) => {
    return (
      <CatFactWrapper key={v4()}>
        <CatFact>{currentCatFact}</CatFact>
        <ButtonWrapper>
          <Button
            name="⌫"
            type="button"
            isRed={true}
            onClick={() => {
              // Функция кнопки удаления конкретного факта
              const index: number = catFacts.indexOf(currentCatFact);
              catFacts.splice(index, 1);
              setCatFacts([
                ...catFacts.filter((item) => item !== currentCatFact),
              ]);
            }}
          />
        </ButtonWrapper>
      </CatFactWrapper>
    );
  });

  // Отправка запроса при загрузке страницы
  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <Lesson11Wrapper>
      <ContentWrapper>
        <ButtonWrapper>
          <Button
            name="GET MORE INFO"
            type="button"
            onClick={() => fetchCatFact()}
          />
        </ButtonWrapper>
        {catFacts.length !== 0 && (
          <CatFactsContainer>{currentCatFacts}</CatFactsContainer>
        )}
        {catFacts.length !== 0 && (
          <DeleteButtonWrapper>
            <Button
              name="DELETE ALL DATA"
              type="button"
              isRed={true}
              onClick={() => removeCatFacts()}
            />
          </DeleteButtonWrapper>
        )}
      </ContentWrapper>
    </Lesson11Wrapper>
  );
}

export default Lesson11;
