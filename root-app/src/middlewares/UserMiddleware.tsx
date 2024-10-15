/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";
import { useUser } from "hooks/useUser";

type UserMiddlewareProps = {
  children: ReactNode;
};

export const UserMiddleware = ({ children }: UserMiddlewareProps) => {
  const { getUser } = useUser();

  useEffect(() => {
    getUser();
  }, []);

  return <>{children}</>;
};
