import Layout from "../../components/layout";
import withAuth from "../../lib/withAuth";

function wishlist() {
  return (
    <div>
      <Layout title={"My order tracking"}>
        <h1>I am the order Traking page</h1>
      </Layout>
    </div>
  );
}

export default withAuth(wishlist);
