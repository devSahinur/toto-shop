import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  addToBasket,
  removeFulProduct,
} from "../../slices/appSlice";

export const SingleCart = ({ product, id }) => {
  const cartData = product?.product;
  const realPrice = cartData?.price;
  const dispatch = useDispatch();
  console.log(product);

  const [quantity, setQuantity] = useState(product.quantity);
  const [singleProductFullPrice, setSingleProductFullPrice] =
    useState(realPrice);

  const incrementQuantity = () => setQuantity(quantity + 1);
  let decrementQuantity = () => setQuantity(quantity - 1);

  if (quantity <= 1 && singleProductFullPrice < realPrice) {
    decrementQuantity = () => {
      setQuantity(1);
      setSingleProductFullPrice(realPrice);
    };
  }

  const increment = () => {
    dispatch(addToBasket({ product: product?.product }));
  };

  const decrement = () => {
    dispatch(removeFromBasket({ _id: product?.product?._id }));
  };

  const CartToRemoved = () => {
    dispatch(removeFulProduct({ _id: product?.product?._id }));
  };

  return (
    <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
      {/* <!-- cart image --> */}
      <div className="w-32 flex-shrink-0">
        <img src={cartData?.image[0]} className="w-full" />
      </div>
      {/* <!-- cart image end --> */}
      {/* <!-- cart content --> */}
      <div className="md:w-1/3 w-full">
        <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
          {cartData?.title}
        </h2>
        <p className="text-primary font-semibold">
          ${cartData?.price?.toFixed(2)}
        </p>
        <p className="text-gray-500">Size: M</p>
      </div>
      {/* <!-- cart content end --> */}
      {/* <!-- cart quantity --> */}
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
        {product?.quantity <= 1 ? (
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-not-allowed bg-opacity-80 select-none">
            -
          </div>
        ) : (
          <div
            onClick={decrement}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer  select-none"
          >
            -
          </div>
        )}

        <div className="h-8 w-10 flex items-center justify-center">
          {product?.quantity}
        </div>
        <div
          onClick={increment}
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
        >
          +
        </div>
      </div>
      {/* <!-- cart quantity end --> */}
      <div className="ml-auto md:ml-0">
        <p className="text-primary text-lg font-semibold">
          $ {product?.quantity * cartData?.price}
        </p>
      </div>
      <div
        onClick={CartToRemoved}
        className="text-gray-600 hover:text-primary cursor-pointer"
      >
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};
