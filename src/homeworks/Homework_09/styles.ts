import styled from "@emotion/styled";

export const HomeworkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  flex: 1;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 20px;
  padding: 20px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  width: 33%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  width: 66%;
  min-height: 100%;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  padding: 20px;
  background-color: lightgray;
  border-radius: 4px;
`;

export const TimeBlock = styled.div`
  width: 25%;
  font-weight: bold;
`;

export const NameBlock = styled.div`
  width: 25%;
  font-weight: bold;
`;

export const MessageBlock = styled.div`
  width: 50%;
`;
