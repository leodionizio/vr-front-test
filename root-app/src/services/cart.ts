import { api } from "./api";
import { Cart, Product } from "interfaces";

const cartBaseUrl = "/carts";

export const CartService = {
  getCartsByUser: async (userId: number): Promise<Cart[]> => {
    try {
      const { data } = await api.get(`${cartBaseUrl}/user/${userId}`);
      return data.carts;
    } catch (error) {
      console.log(error);
      throw new Error(
        "Não foi possível carregar os carrinhos no momento. Tente novamente mais tarde."
      );
    }
  },
  createCart: async (userId: number, products: Product[]): Promise<Cart> => {
    try {
      const { data } = await api.post(`${cartBaseUrl}/add`, {
        userId,
        products,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(
        "Não foi possível criar o carrinho no momento. Tente novamente mais tarde."
      );
    }
  },
  updateCart: async (id: number, products: Product[]): Promise<Cart> => {
    try {
      const { data } = await api.put(`${cartBaseUrl}/${id}`, {
        merge: true,
        products,
      });
      return data.cart;
    } catch (error) {
      console.log(error);
      throw new Error(
        "Não foi possível atualizar o carrinho no momento. Tente novamente mais tarde."
      );
    }
  },
};
