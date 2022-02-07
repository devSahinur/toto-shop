import { HeartIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../../../slices/appSlice";
import { addToWish, selectWish } from "../../../slices/wishSlice";

function SingleArrival({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartData = useSelector(selectItems);

  const CartId = !!cartData.find(
    (item) => !!(item.product._id === product._id)
  );

  const AddToCart = () => {
    dispatch(
      addToBasket({
        product: product,
        quantity: 1,
      })
    );
  };

  const wishlistAll = useSelector(selectWish);

  const findwishList = wishlistAll.find((item) => item._id === product._id);
  const getWishList = () => {
    if (!findwishList) {
      dispatch(addToWish(product));
    }
    // router.push("/user/wishlist");s
  };

  return (
    <div className="group rounded bg-white shadow overflow-hidden">
      <div className="relative">
        <img src={product?.image} className="w-full h-[205px] object-contain" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <div
            onClick={() => router.push(`/product/${product._id}`)}
            className="text-white text-lg w-9 h-9 cursor-pointer rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <SearchIcon className="h-5 w-5" />
          </div>
          <div
            onClick={getWishList}
            className={`text-white text-lg w-9 h-9 rounded-full cursor-pointer ${
              findwishList && "cursor-not-allowed"
            } bg-primary hover:bg-gray-800 transition flex items-center justify-center`}
          >
            <HeartIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <div onClick={() => router.push(`/product/${product._id}`)}>
          <h4 className="uppercase font-medium text-md cursor-pointer mb-2 text-gray-800 hover:text-primary transition">
            {product?.title.slice(0, 45)}{product?.title.slice(0, 45) < product.title && '...'}
          </h4>
        </div>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            ${product?.price?.toFixed(2)}
          </p>
          <p className="text-sm text-gray-400 font-roboto line-through">
            ${(product?.price * 1.6)?.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">({product.rating})</div>
        </div>
      </div>
      {CartId ? (
        <div className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b cursor-not-allowed bg-opacity-80">
          Already Added
        </div>
      ) : (
        <div
          onClick={AddToCart}
          className="block w-full py-1 text-center cursor-pointer text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
        >
          Add to Cart
        </div>
      )}
    </div>
  );
}

export default SingleArrival;
