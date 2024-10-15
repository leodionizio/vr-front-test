import { useMemo } from "react";
import { Product } from "root_app/interfaces";
import { ProductCard } from "../ProductCard";
import currencyFormatter from "currency-formatter";
import * as S from "./styles";
// const Button = lazy(() => import("root_app/components/Button"));

type CartModalProps = {
  products: Product[];
  isOpen: boolean;
  closeModal: () => void;
};

export const CartModal = ({ products, isOpen, closeModal }: CartModalProps) => {
  const getTotalValue = () => {
    return products.reduce((acc: number, product: any) => {
      return acc + product.price;
    }, 0);
  };

  const hasProducts = useMemo(() => !!products.length, [products]);

  return (
    <>
      <S.Overlay isOpen={isOpen} onClick={closeModal} />
      <S.ModalContainer isOpen={isOpen}>
        <S.CloseButton onClick={() => closeModal()}>×</S.CloseButton>
        <S.ModalHeader>
          <h2>Compras</h2>
          <p>Qtd. Items: {products.length}</p>
        </S.ModalHeader>
        <S.ModalContent>
          {hasProducts ? (
            <>
              {products.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
              {/* <Suspense fallback={<div>Loading Button...</div>}>
          <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
          </Suspense> */}
              <hr />
              <S.TotalValue>
                <p>Valor total da sua compra:</p>
                <span>
                  {currencyFormatter.format(getTotalValue(), { code: "BRL" })}
                </span>
              </S.TotalValue>
            </>
          ) : (
            <p>Você não possui itens adicionados no seu carrinho.</p>
          )}
        </S.ModalContent>
        {hasProducts && (
          <S.ModalActions>
            <button onClick={() => closeModal()}>Cancelar</button>
            <button>Comprar</button>
          </S.ModalActions>
        )}
      </S.ModalContainer>
    </>
  );
};
