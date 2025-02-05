import { useState, createContext } from "react";
import {
  ButtonWrapper,
  FormContainer,
  HomeworkWrapper,
  MessagesContainer,
} from "./styles";
import InputTextArea from "components/InputTextArea/InputTextArea";
import Button from "components/Button/Button";
import Card from "../Card/Card";

export const BlogManagementContext = createContext({
  message: "",
  setMessage: (msg: string) => {},
});

function BlogManagement() {
  const [inputMessage, setInputMessage] = useState("");
  const [message, setMessage] = useState("");

  const postMessage = () => {
    setMessage(inputMessage);
  };

  return (
    <BlogManagementContext.Provider value={{ message, setMessage }}>
      <HomeworkWrapper>
        <FormContainer>
          <InputTextArea
            name="message"
            label="Message"
            id="message_id"
            placeholder="Enter your message"
            rows={5}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <ButtonWrapper>
            <Button
              name="Post"
              type="button"
              isDisabled={!inputMessage.trim()}
              onClick={postMessage}
            />
          </ButtonWrapper>
        </FormContainer>
        <MessagesContainer>
          <Card />
        </MessagesContainer>
      </HomeworkWrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
