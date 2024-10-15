import * as S from "./styles";
import cart from "public/assets/cart.png";

type CartButtonProps = {
  quantityItems: String;
  onClick: () => void;
};

export const CartButton = ({ quantityItems, onClick }: CartButtonProps) => {
  return (
    <S.CartButton onClick={onClick} data-testid="cart-button">
      <img src={cart} alt="Cart logo" width={32}></img>
      <span>{quantityItems}</span>
    </S.CartButton>
  );
};
