import { Children, ReactNode } from "react";
import * as S from "./styles";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  const childComponents = Children.toArray(children);

  return (
    <>
      <S.Header>{childComponents[0]}</S.Header>
      <S.Content>{childComponents.filter((_, index) => index > 0)}</S.Content>
    </>
  );
};
