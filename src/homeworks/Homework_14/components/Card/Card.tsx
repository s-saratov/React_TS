import Message from "../Message/Message";
import { CardWrapper, Name } from "./styles";
import { useContext } from "react";
import { BlogManagementContext } from "../BlogManagement/BlogManagment";

function Card() {
  const { message } = useContext(BlogManagementContext);

  return (
    <CardWrapper>
      <Name>Sergej Saratov:</Name>
      <Message message={message} />
    </CardWrapper>
  );
}
export default Card;
