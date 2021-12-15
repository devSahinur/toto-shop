import CartTitleBar from "../components/CartPage/CartTitleBar";
import OrderSummary from "../components/CartPage/OrderSummary";
import { SingleCart } from "../components/CartPage/SingleCart";
import Breadcrum from "../components/commonComponents/Breadcrum";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function cart() {
  return (
    <div>
      <Header />
      <Navbar />
      <Breadcrum title={"Shopping Cart"} />
      <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="xl:col-span-9 lg:col-span-8">
          <CartTitleBar />
          <div className="space-y-4">
            <SingleCart />
            <SingleCart />
            <SingleCart />
          </div>
        </div>
        <OrderSummary />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default cart;
