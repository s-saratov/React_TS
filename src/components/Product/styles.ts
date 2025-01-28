import styled from "@emotion/styled";

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  min-width: 300px;
  min-height: 300px;
  padding: 40px;
  background-color: aquamarine;
  border: 2px solid rgb(21, 93, 102);
  border-radius: 6px;
  font-size: 22px;
`;

export const ProductName = styled.h3``;

export const ProductImage = styled.img`
  width: 150px;
`;