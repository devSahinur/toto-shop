import CartTitleBar from "../components/CartPage/CartTitleBar";
import OrderSummary from "../components/CartPage/OrderSummary";
import { SingleCart } from "../components/CartPage/SingleCart";
import Layout from "../components/layout";

function cart() {
  return (
    <div>
      <Layout title={"Shopping Cart"}>
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
      </Layout>
    </div>
  );
}

export default cart;
