import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'interfaces';

const initialState: Product[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload); 
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return state.filter((product) => product.id !== action.payload);
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      return action.payload;
    },
  },
});

export const { addProduct, removeProduct, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
