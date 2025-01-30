import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import Input from "../../components/Input/Input";
import {
  ErrorBlock,
  HomeworkWrapper,
  InputsContainer,
  Picture,
  PictureContainer,
  PictureDescription,
} from "./styles";
import Spinner from "../../components/Spinner/Spinner";

function Homework10() {

  // Задаём необходимые состояния
    const [fetcherValue, setFetcherValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Создаём функции, срабатывающие при вводе данных в поля (inputs)

  const onChangeFetcher = (event: ChangeEvent<HTMLInputElement>) => {
    setFetcherValue(event.target.value);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescriptionValue(event.target.value);
  };

  // Запрос адреса изображения с использованием axios
  const fetchPicture = async () => {
    const PICTURE_URL: string = "https://dog.ceo/api/breeds/image/random";
    setPicture("");
    setError(undefined);
    setIsLoading(true);

    try {
      const result = await axios.get(PICTURE_URL);
      const data = result.data;
      setPicture(data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Отправка запроса при загрузке страницы
  useEffect(() => {
    fetchPicture();
  }, []);

  // Отправка запроса при изменении значения в поле ввода (input)
  useEffect(() => {
    fetchPicture();
    setFetcherValue("");
  }, [fetcherValue]);

  return (
    <HomeworkWrapper>
      <InputsContainer>
        <Input
          name="picture_fetcher"
          id="picture_fetcher"
          placeholder="Type here anything to download a new picture"
          value={fetcherValue}
          onChange={onChangeFetcher}
        />
        <Input
          name="description"
          label="Describe the picture you've download"
          id="message_id"
          placeholder="Enter the picture description"
          value={descriptionValue}
          onChange={onChangeDescription}
        />
      </InputsContainer>
      <PictureContainer>
        {descriptionValue && <PictureDescription>{descriptionValue}</PictureDescription>}
        {picture && <Picture src={picture} />}
        {isLoading && <Spinner />}
        {error && <ErrorBlock>{error}</ErrorBlock>}
      </PictureContainer>
    </HomeworkWrapper>
  );
}

export default Homework10;
