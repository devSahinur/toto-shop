import { useRouter } from "next/router";
import SingleCheckoutOrder from "../SingleChekoutOrder/SingleCheckoutOrder";

const product = [
  {
    id: 1,
    title: "Beigh Knitted Shoes",
    size: "M",
    quantity: "1",
    price: "84.00",
  },
  {
    id: 2,
    title: "Beigh Knitted Shoes",
    size: "L",
    quantity: "2",
    price: "84.00",
  },
  {
    id: 3,
    title: "Beigh Knitted Shoes",
    size: "Red",
    quantity: "1",
    price: "84.00",
  },
];

function CheckoutOrder() {
  const router = useRouter()
  return (
    <div className="py-6 px-4 border shadow-md h-fit">
      <div className="pb-4">
        <h1 className="px-4 py-2 text-gray-800 bg-gray-200 mb-6 rounded-md font-medium">
          Your Order
        </h1>
      </div>
      {/* products */}
      <div>
        <h1 className="py-6 border-t border-b text-lg uppercase font-medium">
          Product
        </h1>

        {/* single chekoutorder product */}
        <div className="py-5 space-y-5">
          {product?.map(({ id, title, size, quantity, price }) => (
            <SingleCheckoutOrder
              key={id}
              id={id}
              title={title}
              size={size}
              price={price}
              quantity={quantity}
            />
          ))}
        </div>
        {/* subtotal */}
        <div className="flex items-center justify-between py-4">
          <h3 className="font-medium text-lg uppercase">Subtotal</h3>
          <span className="font-medium">$140.00</span>
        </div>
        {/* shipping */}
        <div className="flex items-center justify-between py-4 border-t border-b">
          <h3 className="font-medium text-lg uppercase">Shipping</h3>
          <span className="font-medium">Free</span>
        </div>
        {/* Total */}
        <di className="flex items-center justify-between py-4 border-t border-b">
          <h3 className="font-medium text-lg uppercase">Total</h3>
          <span className="font-medium">$140.00</span>
        </di>
        {/* agree to our  */}
        <div className="flex items-center py-6">
          <input
            type="checkbox"
            id="agreement"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer border-primary"
          />
          <label className="text-gray-600 ml-3 cursor-pointer">
            Agree to our{" "}
            <span className="text-primary">terms & conditions</span>
          </label>
        </div>

        <div className="w-full">
          <button onClick={()=> router.push('success')} className="btn py-2 w-full uppercase font-medium">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutOrder;
