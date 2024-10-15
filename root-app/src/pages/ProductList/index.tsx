import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { Product } from "interfaces";
import { ProductCard } from "./components/ProductCard";
import { useProduct } from "hooks";

export const ProductList = () => {
  const { getProducts } = useProduct();

  const products = useSelector(
    (state: { products: Product[] }) => state.products
  );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
