import { Product } from "root_app/interfaces";
import currencyFormatter from "currency-formatter";
import * as S from "./styles";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <S.ProductCard>
      <S.Image src={product.thumbnail} />
      <S.Title>{product.title}</S.Title>
      <S.Price>
        {currencyFormatter.format(product.price, { code: "BRL" })}
      </S.Price>
    </S.ProductCard>
  );
};
