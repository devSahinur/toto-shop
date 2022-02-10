import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const { data: session } = useSession();
  const faysal = session?.user?.email;

  if (!faysal) {
    router.replace("/login");
  }
  return <>{children}</>;
}
