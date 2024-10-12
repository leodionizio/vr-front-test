import logo from "public/assets/vr-logo.png";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Logo src={logo} alt="VR Benefícios Logo" />
      <S.RightsReserved>
        &copy; 2024 VR Benefícios - Todos os direitos reservados
      </S.RightsReserved>
    </S.FooterContainer>
  );
};
