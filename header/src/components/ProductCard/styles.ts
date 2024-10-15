import styled from "styled-components";

export const ProductCard = styled.div`
  border: 1px solid #02d72f;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  overflow: auto;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 12px;
  margin-top: 12px;
`;

export const Price = styled.p`
  font-size: 12px;
  margin: 0;
  font-weight: bold;
`;

export const Image = styled.img`
  width: auto;
  height: 40px;
`;