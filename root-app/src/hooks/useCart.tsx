import { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "contexts";
import { Cart, Product } from "interfaces";
import { CartService } from "services";
import { setCart, addProductToCart } from "store/modules/cart";
import { useToastMessage } from "./useToastMessage";

export const useCart = () => {
  const { toast } = useToastMessage();
  const { user } = useContext(UserContext);
  const cart = useSelector((state: { cart: Cart }) => state.cart);

  const dispatch = useDispatch();

  const getCartsByUser = useCallback(async () => {
    try {
      const carts = await CartService.getCartsByUser(user.id);
      dispatch(setCart(carts[0]));
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch, toast, user]);

  const createCart = useCallback(
    async (userId: number, products: Product[]) => {
      try {
        const newCart = await CartService.createCart(userId, products);
        dispatch(setCart(newCart));
      } catch (error) {
        toast.error(error.message);
      }
    },
    [dispatch, toast]
  );

  const addProductSelectedToCart = useCallback(
    async (product: Product) => {
      if (cart && cart.id) {
        dispatch(addProductToCart(product));
        return;
      }

      return await createCart(user.id, [product]);
    },
    [cart, createCart, dispatch, user.id]
  );

  return { getCartsByUser, addProductSelectedToCart };
};
