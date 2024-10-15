import styled from "styled-components";

export const Overlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const ModalContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  min-width: 380px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding: 56px 20px 20px;
  box-sizing: border-box;

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 32px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2,
  p {
    margin: 0;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalValue = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin: 24px 0;

  p {
    margin: 0;
  }

  span {
    font-weight: bold;
  }
`;
