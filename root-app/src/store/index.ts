import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./modules/products";
import { cartReducer } from "./modules/cart";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
