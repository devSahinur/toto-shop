import Layout from "../../components/layout";
import withAuth from "../../lib/withAuth";

function wishlist() {
  return (
    <dv>
      {/* <Layout title={"My order tracking"}> */}
        <h1>I am the order Traking page</h1>
      {/* </Layout> */}
    </dv>
  );
}

export default withAuth(wishlist);
