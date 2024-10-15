declare module "root_app/store" {
  import { Store } from "redux";
  import { RootState } from "root_app/store";
  import { AppDispatch } from "root_app/store";
  export const store: Store<RootState>;
  export type { RootState, AppDispatch };
}

declare module "root_app/components/Button" {
  import { ButtonHTMLAttributes } from "react";
  type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
  const Button: React.ComponentType<ButtonProps>;
  export default Button;
}

declare module "root_app/interfaces" {
  import {
    Product as RootProduct,
    Cart as RootCart,
  } from "root_app/interfaces";
  export type Product = RootProduct;
  export type Cart = RootCart;
}
