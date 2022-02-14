import { useRouter } from "next/router";
import CheckoutOrder from "../components/CheckoutPage/CheckOrder/CheckoutOrder";
import CheckoutFrom from "../components/CheckoutPage/CheckoutFrom/CheckoutFrom";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function checkout() {
  const router = useRouter();
  return (
    <>
      {/* <Layout title={"Checkout"}> */}
      <Header />
      <Navbar />
      <main className="max-w-[75rem] mx-auto px-4 py-6">
        <div className="md:grid md:grid-cols-3 md:gap-x-4">
          {/* checkoutLeft */}
          <CheckoutFrom />

          {/* checkout Rignt */}
          <CheckoutOrder />
        </div>
      </main>
      {/* </Layout> */}
      <Footer />
      <Copyright />
    </>
  );
}

export default checkout;
