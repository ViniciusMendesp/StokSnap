import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserType {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: UserType | null;
  error: string | null;
  fetchUserById: (id: number) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser utilizado dentro do UserProvider");
  }
  return context;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUserById = async (id: number) => {
    try {
      setError(null);
      const response = await axios.get<UserType>(
        `http://localhost:4000/users/${id}`
      );
      setUser(response.data);
    } catch (error) {
      setError("Erro ao buscar usuário");
      console.error("Erro ao buscar usuário", error);
    }
  };

  useEffect(() => {}, [user]);

  return (
    <UserContext.Provider value={{ user, error, fetchUserById }}>
      {children}
    </UserContext.Provider>
  );
}
