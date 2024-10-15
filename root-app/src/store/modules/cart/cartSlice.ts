import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Product } from "interfaces";

const initialState: Cart = {
  id: null,
  products: [],
  total: 0,
  discountedTotal: 0,
  userId: null,
  totalProducts: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      return action.payload;
    },
    addProductToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { setCart, addProductToCart, removeProductFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
