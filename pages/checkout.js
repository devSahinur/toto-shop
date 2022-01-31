import { useRouter } from "next/router";
import CheckoutOrder from "../components/CheckoutPage/CheckOrder/CheckoutOrder";
import CheckoutFrom from "../components/CheckoutPage/CheckoutFrom/CheckoutFrom";
import Layout from "../components/layout";

function checkout() {
  const router = useRouter();
  return (
    <div>
      <Layout title={"Checkout"}>
        <main className="max-w-[75rem] mx-auto px-4 py-6">
          <div className="md:grid md:grid-cols-3 md:gap-x-4">
            {/* checkoutLeft */}
            <CheckoutFrom />

            {/* checkout Rignt */}
            <CheckoutOrder />
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default checkout;
