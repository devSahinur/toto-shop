import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const withAuth = (WrappedComponent) => {
  return (props) => {
  const { data: session } = useSession();
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {

      const Router = useRouter();

      // If there is no access token we redirect to "/" page.
      if (!session) {
        Router.replace("/login");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
