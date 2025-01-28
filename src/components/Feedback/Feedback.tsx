import { useState } from "react";
import Button from "../Button/Button";
import {
  ButtonWrapper,
  FeedbackWrapper,
  LikeDislikeWrapper,
  LikesContainer,
  ResetWrapper,
} from "./styles";

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const likeClick = (): void => {
    setLikes((prevValue) => prevValue + 1);
  };

  const dislikeClick = (): void => {
    setDislikes((prevValue) => prevValue + 1);
  };

  const resetClick = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <FeedbackWrapper>
      <LikeDislikeWrapper>
        <LikesContainer>{likes}</LikesContainer>
        <ButtonWrapper>
          <Button name="Like" type="button" onClick={likeClick} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button name="Dislike" type="button" onClick={dislikeClick} />
        </ButtonWrapper>
        <LikesContainer>{dislikes}</LikesContainer>
      </LikeDislikeWrapper>
      <ResetWrapper>
        <Button name="Reset Results" type="button" onClick={resetClick} />
      </ResetWrapper>
    </FeedbackWrapper>
  );
}

export default Feedback;
