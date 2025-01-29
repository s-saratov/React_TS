import styled from "@emotion/styled";

export const HomeworkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  flex: 1;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 20px;
  padding: 20px;
  border: 2px solid #3f3f3f;
  border-radius: 4px;
  width: 33%;
`;


export const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  border: 2px solid #3f3f3f;
  border-radius: 4px;
  width: 33%;
  height: 300px;
`;

export const Picture = styled.img`
  max-height: 80%;
  max-width: 80%;
`;

export const PictureDescription = styled.h3``;

export const ErrorBlock = styled.div`
  width: 80%;
  padding: 10px;
  background-color: #eb9378;
  border: 2px solid #e61212;
  border-radius: 4px;
  color: #e61212;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
`;