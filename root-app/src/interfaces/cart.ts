import { Product } from "./product";

export interface Cart {
  id: number | null;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number | null;
  totalProducts: number;
  totalQuantity: number;
}
