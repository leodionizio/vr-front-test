import { useCallback, useContext } from "react";
import { UserContext } from "contexts";
import { UserService } from "services";
import { useToastMessage } from "./useToastMessage";

export const useUser = () => {
  const { toast } = useToastMessage();
  const { setUser } = useContext(UserContext);

  const getUser = useCallback(async () => {
    try {
      const user = await UserService.getUser();
      setUser(user);
    } catch (error) {
      toast.error(error.message);
    }
  }, [setUser, toast]);

  return { getUser };
};
