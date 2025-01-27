import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

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
    <div className="feedback-wrapper">
      <div className="like-dislike-wrapper">
        <div className="likes-container">{likes}</div>
        <div className="button-wrapper">
          <Button name="Like" type="button" onClick={likeClick} />
        </div>
        <div className="button-wrapper">
          <Button name="Dislike" type="button" onClick={dislikeClick} />
        </div>
        <div className="likes-container">{dislikes}</div>
      </div>
      <div className="reset-wrapper">
          <Button name="Reset Results" type="button" onClick={resetClick} />
        </div>
    </div>
  );
}

export default Feedback;