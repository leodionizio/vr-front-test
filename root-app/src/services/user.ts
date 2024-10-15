import { User } from "interfaces";

export const UserService = {
  getUser: async (): Promise<User> => {
    try {
      const { data } = await Promise.resolve({data: { id: 1, name: "Leonardo Dionizio" }});
      return data;
    } catch (error) {
      throw new Error(
        "Não foi possível carregar o usuário no momento. Tente novamente mais tarde."
      );
    }
  },
};
