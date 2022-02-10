import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const { data: session } = useSession();
  const email = session?.user?.email;

  useEffect(() =>{
    if (!email) {
      router.push("/login");
    }
  },[email])
  return <>{children}</>;
}
