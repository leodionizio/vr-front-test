import * as S from "./styles";
import { Button, Card } from "components";
import { Product } from "interfaces";
import { useCart } from "hooks";
import currencyFormatter from "currency-formatter";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addProductSelectedToCart } = useCart();

  const selectProduct = () => {
    addProductSelectedToCart(product);
  };

  return (
    <Card>
      <S.Image src={product.thumbnail} />

      <S.DetailsContent>
        <S.Title>{product.title}</S.Title>

        <S.Description>{product.description}</S.Description>
      </S.DetailsContent>

      <S.Actions>
        <S.Price>
          {currencyFormatter.format(product.price, { code: "BRL" })}
        </S.Price>
        <Button onClick={() => selectProduct()}>Comprar</Button>
      </S.Actions>
    </Card>
  );
};
