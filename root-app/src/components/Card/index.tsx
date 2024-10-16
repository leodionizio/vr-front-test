import { ReactNode } from "react";
import * as S from "./styles";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <S.Card data-cy="card">{children}</S.Card>;
};
