import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "root_app/store";
import { CartButton } from "../CartButton";
import { CartModal } from "../CartModal";
import logo from "public/assets/white-vr-logo.svg";
import * as S from "./styles";

export const Header = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const products = useSelector((state: RootState) => state.products);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const selectedProducts = products.filter((product: any) =>
    cart.products.find((cartProduct: any) => cartProduct.id === product.id)
  );

  return (
    <S.HeaderContainer>
      <S.Logo src={logo} alt="VR Benefícios Logo" />

      <CartButton
        quantityItems={cart.products.length}
        onClick={() => setIsOpenModal(true)}
      />

      <CartModal
        products={selectedProducts}
        isOpen={isOpenModal}
        closeModal={() => setIsOpenModal(false)}
      />
    </S.HeaderContainer>
  );
};
