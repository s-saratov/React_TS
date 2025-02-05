import { MessageWrapper } from "./styles";
import { MessageProps } from "./types";

function Message({ message }: MessageProps) {
  return <MessageWrapper>{message}</MessageWrapper>;
}

export default Message;
