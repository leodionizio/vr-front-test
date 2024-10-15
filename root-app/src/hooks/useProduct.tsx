import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ProductService } from "services";
import { setProducts } from "store/modules/products";
import { useToastMessage } from "./useToastMessage";

export const useProduct = () => {
  const { toast } = useToastMessage();
  const dispatch = useDispatch();

  const getProducts = useCallback(async () => {
    try {
      const products = await ProductService.getProducts();
      dispatch(setProducts(products));
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch, toast]);

  return { getProducts };
};
