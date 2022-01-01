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
    <div>
      <Header />
      <Navbar />
      {/* <!-- breadcrum --> */}
      <div className="py-4 container flex gap-3 items-center">
        <div
          onClick={() => router.push("/")}
          className="text-primary cursor-pointer text-base"
        >
          <i className="fas fa-home"></i>
        </div>
        <span className="text-sm text-gray-400">
          <i className="fas fa-chevron-right"></i>
        </span>
        <div
          onClick={() => router.push("/shop")}
          className="text-primary cursor-pointer text-base font-medium uppercase"
        >
          Shop
        </div>
        <span className="text-sm text-gray-400">
          <i className="fas fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Checkout</p>
      </div>
      {/* <!-- breadcrum end --> */}

      <main className="max-w-[75rem] mx-auto px-4 py-6">
        <div className="md:grid md:grid-cols-3 md:gap-x-4">
          {/* checkoutLeft */}
          <CheckoutFrom />

          {/* checkout Rignt */}
          <CheckoutOrder />
        </div>
      </main>

      <Footer />
      <Copyright />
    </div>
  );
}

export default checkout;
