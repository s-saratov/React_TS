import styled from "@emotion/styled";

export const Lesson11Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex: 1;
`;

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  max-width: 500px;
  gap: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const DeleteButtonWrapper = styled.div`
  min-width: 20%;
  height: 100%;
`;

export const CatFactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  border: 2px solid #3f3f3f;
  border-radius: 4px;
  width: 100%;
  min-height: 700px;
  max-height: 700px;
  overflow-y: auto;
`;

export const CatFactWrapper = styled.div`
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

export const CatFact = styled.div`
min-width: 80%;
`;
