import styled from "@emotion/styled";

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 400px;
  padding: 20px;
  background-color: rgb(184, 235, 235);
  border: 2px solid rgb(31, 31, 141);
  border-radius: 4px;
`;

export const LikeDislikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  min-width: 400px;
  background-color: rgb(184, 235, 235);
`;

export const ButtonWrapper = styled.div`
  width: 100px;
`;

export const ResetWrapper = styled.div`
  width: 100%;
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: rgb(15, 15, 75);
`;
