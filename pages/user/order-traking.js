import Footer from "../../components/Footer";
import Header from "../../components/Header";
import withAuth from "../../lib/withAuth";

function wishlist() {
  return (
    <>
    <Header/>
      {/* <Layout title={"My order tracking"}> */}
        <h1>I am the order Traking page</h1>
      {/* </Layout> */}
      <Footer/>
    </>
  );
}

export default withAuth(wishlist);
