import { UserContext } from "@Aplication/contexts/UserContext";
import { useContext } from "react";

interface UserType {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface UserContextType {
  users: UserType | null;
  fetchUserById: (id: number) => Promise<void>;
}

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};
