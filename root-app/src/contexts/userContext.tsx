import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CustomContextProviderProps } from "types";
import { User } from "interfaces";

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultUser: User = {
  id: 0,
  name: "",
};

const defaultContextValue: UserContextType = {
  user: defaultUser,
  setUser: () => {},
};

const UserContext = createContext(defaultContextValue);

const UserProvider = ({ children }: CustomContextProviderProps) => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
