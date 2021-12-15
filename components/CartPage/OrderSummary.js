import { useRouter } from "next/router";

const OrderSummary = () => {
    const router = useRouter();
  return (
    <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        ORDER SUMMARY
      </h4>
      <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
        <div className="flex justify-between font-medium">
          <p>Subtotal</p>
          <p>$320</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>Free</p>
        </div>
      </div>
      <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
        <h4>Total</h4>
        <h4>$320</h4>
      </div>

      {/* <!-- searchbar --> */}
      <div className="flex mb-5">
        <input
          type="text"
          className="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
          placeholder="Coupon"
        />
        <button
          type="submit"
          className="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto"
        >
          Apply
        </button>
      </div>
      {/* <!-- searchbar end --> */}

      {/* <!-- checkout --> */}
      <div
        onClick={() => router.push("/checkout")}
        className="bg-primary border border-primary text-white px-4 cursor-pointer py-3 font-medium rounded-md uppercase hover:bg-transparent
     hover:text-primary transition text-sm w-full block text-center"
      >
        Process to checkout
      </div>
      {/* <!-- checkout end --> */}
    </div>
  );
};

export default OrderSummary;
