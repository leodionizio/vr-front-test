import styled from "styled-components";

export const CartButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    background-color: #e4e8ed;
    color: #02d72f;
    top: 0;
    right: 2px;
    padding: 3px;
    border-radius: 50px;
    width: 12px;
    font-size: 12px;
  }
`;
