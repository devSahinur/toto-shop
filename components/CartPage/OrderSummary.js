import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/appSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";

const stripePromise = loadStripe(process.env.stripe_public_key);

const OrderSummary = () => {
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const router = useRouter();
  const [couponInput, setCouponInput] = useState("");

  const [coupon, setCoupon] = useState(false);
  const [notMatchCoupon, setNotmatchCoupon] = useState(false);

  console.log(items);

  // TODO: calculte the parcentage
  // this is const value
  const parcentageNumber = 5;
  const tax = 15;

  const parcentage = ((total + tax) * parcentageNumber) / 100;

  const couponcode = "fms";
  const applyCouponBtn = () => {
    if (couponInput === couponcode) {
      setCoupon(true);
      setNotmatchCoupon(false);
    } else {
      setNotmatchCoupon(true);
    }
  };

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Call the backend create a checkout session
    const checkoutSession = await axios.post(
      "/api/create-checkout-session",
      {
        items: items,
        email: session.user.email,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    // // Redirect user /customer to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        ORDER SUMMARY
      </h4>
      <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
        <div className="flex justify-between font-medium">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>${tax}</p>
        </div>
      </div>
      <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
        <h4>Total</h4>
        <h4>$ {coupon ? total - parcentage : total + tax}</h4>
      </div>

      {!coupon ? (
        <div className="flex mb-5">
          <input
            type="text"
            className="pl-4 w-full outline-none border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
            placeholder="Cooupon"
            value={couponInput}
            onChange={(e) => setCouponInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto"
            onClick={applyCouponBtn}
          >
            Apply
          </button>
        </div>
      ) : (
        <div className=" text-lg font-bold py-3 text-[#42ba96] w-full block text-center">
          5% Discount done 🥰
        </div>
      )}
      {notMatchCoupon && (
        <div className="text-[#FFCC00] font-bold py-3 text-lg w-full block text-center">
          Coupon Don't Match
        </div>
      )}
      {/* <!-- searchbar end --> */}

      {/* <!-- checkout --> */}
      <button
        role="link"
        onClick={createCheckoutSession}
        className="bg-primary border border-primary text-white px-4 cursor-pointer py-3 font-medium rounded-md uppercase hover:bg-transparent
     hover:text-primary transition text-sm w-full block text-center"
      >
        Process to checkout
      </button>
      {/* <!-- checkout end --> */}
    </div>
  );
};

export default OrderSummary;
