import { ChangeEvent, useEffect, useState } from "react";
import { v4 } from "uuid";

import Input from "../../components/Input/Input";
import InputTextArea from "../../components/InputTextArea/InputTextArea";
import Button from "../../components/Button/Button";
import {
  FormContainer,
  ButtonWrapper,
  HomeworkWrapper,
  MessagesContainer,
  MessageWrapper,
  TimeBlock,
  NameBlock,
  MessageBlock,
} from "./styles";

function Homework09() {
  // Получаем значения из полей ввода
  const [userNameValue, setUserNameValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  // Создаём функции, принимающие значения, введённые пользователем
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };

  const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(event.target.value);
  };

  // Обновляем состояние кнопки при изменении значений в полях
  useEffect(() => {
    setButtonDisabled(
      userNameValue.trim() === "" || messageValue.trim() === ""
    );
  }, [userNameValue, messageValue]);

  // Создаём интерфейс для хранения данных
  interface Message {
    dateTime: string;
    name: string;
    message: string;
  }

  // Создаём массив для хранения сообщений
  const [messages, setMessages] = useState<Message[]>([]);

  // Создаём добавления экземпляров интерфейса Message в массив

  const addMessage = (newName: string, newMessage: string) => {
    const newMessageItem: Message = {
      dateTime: new Date().toLocaleString(), // текущая дата и время
      name: newName,
      message: newMessage,
    };

    setMessages([...messages, newMessageItem]);
    console.log(messages);
    setMessageValue("");
  };

  // Создаём функцию для размещения на странице сообщений
  const currentMessages = messages.map((currentMessage) => {
    return (
      <MessageWrapper key={v4()}>
        <TimeBlock>{currentMessage.dateTime}</TimeBlock>
        <NameBlock>{currentMessage.name}</NameBlock>
        <MessageBlock>{currentMessage.message}</MessageBlock>
      </MessageWrapper>
    );
  });

  return (
    <HomeworkWrapper>
      <FormContainer>
        <Input
          name="user_name"
          label="User name"
          id="name_id"
          placeholder="Enter your name"
          value={userNameValue}
          onChange={onChangeName}
        />
        <InputTextArea
          name="message"
          label="Message"
          id="message_id"
          placeholder="Enter your message"
          rows={5}
          value={messageValue}
          onChange={onChangeMessage}
        />
        <ButtonWrapper>
          <Button
            name="Post"
            type="button"
            isDisabled={isButtonDisabled}
            onClick={() => addMessage(userNameValue, messageValue)}
          />
        </ButtonWrapper>
      </FormContainer>
      <MessagesContainer>{currentMessages}</MessagesContainer>
    </HomeworkWrapper>
  );
}

export default Homework09;