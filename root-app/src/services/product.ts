import { Product } from "interfaces";
import { api } from "./api";

const productBaseUrl = "/products";

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const { data } = await api.get(productBaseUrl);
      return data.products;
    } catch (error) {
      console.log(error);
      throw new Error(
        "Não foi possível carregar os produtos no momento. Tente novamente mais tarde."
      );
    }
  },
};
