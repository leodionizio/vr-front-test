import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  padding: 20px 48px;
  background-color: #ffffff;
  border-top: 1px solid #e4e8ed;

  @media (max-width: 768px) {
    padding: 20px 24px;
  }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const RightsReserved = styled.p`
  padding-left: 20px;
  color: #1b2126;
  font-size: 12px;
  margin: 0;
`;
