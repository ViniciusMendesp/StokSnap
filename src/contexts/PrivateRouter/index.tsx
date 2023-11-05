import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface PrivateRouterProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouterProps) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return children;
}
