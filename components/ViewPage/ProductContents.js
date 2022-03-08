import { useState } from "react";
import { useRouter } from "next/router";
import { RatingStar } from "./RatingStar";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../../slices/appSlice";
import {
  addToWish,
  removeFromWish,
  removeSingleWish,
  selectWish,
  selectWishAll,
} from "../../slices/wishSlice";
import { useSession } from "next-auth/react";

export const ProductContents = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartData = useSelector(selectItems);
  const [quantity, setQuantity] = useState(1);
  const { data: session } = useSession();

  const incrementQuantity = () => setQuantity(quantity + 1);
  let decrementQuantity = () => setQuantity(quantity - 1);

  if (quantity <= 1) {
    decrementQuantity = () => setQuantity(1);
  }

  const CartId = !!cartData.find(
    (item) => !!(item.product._id === product._id)
  );

  const image = Array.isArray(product?.image)
    ? product.image[0]
    : product.image;

  const singleProduct = product;

  const AddToCart = () => {
    dispatch(
      addToBasket({
        product: {
          image,
          availability: singleProduct.availability,
          _id: singleProduct._id,
          totalQuantity: singleProduct.totalQuantity,
          title: singleProduct.title,
          shortDescription: singleProduct.shortDescription,
          price: singleProduct.price,
        },
        quantity: 1,
      })
    );
  };

  const wishlistAll = useSelector(selectWish);

  const findWishListItem = wishlistAll.find((item) => item === product._id);

  const addToWishList = () => {
    if (session) {
      if (!findWishListItem) {
        dispatch(addToWish(product._id));

        if (!findWishListItem) {
          fetch("/api/wishlist", {
            method: "POST",
            body: JSON.stringify({ itemID: product.id }),
            headers: {
              "content-type": "application/json",
            },
          });
        }
      }
    } else {
      router.push("/login");
    }
  };

  const removedWishList = async () => {
    await fetch("/api/wishlist", {
      method: "DELETE",
      body: JSON.stringify({ itemID: product.id }),
      headers: {
        "content-type": "application/json",
      },
    });
    dispatch(removeSingleWish(product?._id));
  };

  return (
    <div>
      <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">
        {product.title}
      </h2>
      <div className="flex items-center mb-4">
        <div className="flex gap-1 text-sm text-yellow-400">
          <RatingStar star={product.rating} />
        </div>
        <div className="text-xs text-gray-500 ml-3">
          ({product.totalReviews} Reviews)
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-800 font-semibold space-x-2">
          <span>Availability: </span>
          {product.availability ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Out Of Stock</span>
          )}
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Brand: </span>
          <span className="text-gray-600">{product.brand}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Category: </span>
          <span className="text-gray-600">{product.category}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">SKU: </span>
          <span className="text-gray-600">{product.sku}</span>
        </p>
      </div>
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-primary font-semibold text-xl">
          ${product.price}
        </span>
        <span className="text-gray-500 text-base line-through">
          ${product.price * 1.6}
        </span>
      </div>
      <p className="mt-4 text-gray-600">{product.shortDescription}</p>
      {/* <!-- size --> */}
      <div className="mt-4">
        <h3 className="text-base text-gray-800 mb-1">Size</h3>
        <div className="flex items-center gap-2">
          {/* <!-- single size --> */}
          <div className="size-selector">
            <input type="radio" name="size" className="hidden" id="size-xs" />
            <label className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              XS
            </label>
          </div>
          {/* <!-- single size end --> */}
          {/* <!-- single size --> */}
          <div className="size-selector">
            <input type="radio" name="size" className="hidden" id="size-s" />
            <label className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              S
            </label>
          </div>
          {/* <!-- single size end --> */}
          {/* <!-- single size --> */}
          <div className="size-selector">
            <input type="radio" name="size" className="hidden" id="size-m" />
            <label className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              M
            </label>
          </div>
          {/* <!-- single size end --> */}
          {/* <!-- single size --> */}
          <div className="size-selector">
            <input type="radio" name="size" className="hidden" id="size-l" />
            <label className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              L
            </label>
          </div>
          {/* <!-- single size end --> */}
          {/* <!-- single size --> */}
          <div className="size-selector">
            <input type="radio" name="size" className="hidden" id="size-xl" />
            <label className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              XL
            </label>
          </div>
          {/* <!-- single size end --> */}
        </div>
      </div>
      {/* <!-- size end --> */}
      {/* <!-- color --> */}
      <div className="mt-4">
        <h3 className="text-base text-gray-800 mb-1">Color</h3>
        <div className="flex items-center gap-2">
          <div className="color-selector">
            <input
              type="radio"
              name="color"
              className="hidden"
              id="color-red"
            />
            <label className="text-xs bg-[#fc3d57] border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
          </div>
          <div className="color-selector">
            <input
              type="radio"
              name="color"
              className="hidden"
              id="color-white"
            />
            <label className="text-xs border bg-white border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
          </div>
          <div className="color-selector">
            <input
              type="radio"
              name="color"
              className="hidden"
              id="color-black"
            />
            <label className="text-xs border bg-black border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
          </div>
        </div>
      </div>
      {/* <!-- color end --> */}
      {/* <!-- quantity --> */}
      <div className="mt-4">
        <h3 className="text-base text-gray-800 mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div
            onClick={decrementQuantity}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            -
          </div>
          <div className="h-8 w-10 flex items-center justify-center">
            {quantity}
          </div>
          <div
            onClick={incrementQuantity}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            +
          </div>
        </div>
      </div>
      {/* <!-- color end --> */}
      {/* <!-- add to cart button --> */}
      <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
        {CartId ? (
          <div
            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase 
            cursor-not-allowed bg-opacity-80 text-sm flex items-center"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            Already Added
          </div>
        ) : (
          <div
            onClick={AddToCart}
            className="bg-primary cursor-pointer border border-primary text-white px-8 py-2 font-medium rounded uppercase 
                      hover:bg-transparent hover:text-primary transition text-sm flex items-center"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            Add to cart
          </div>
        )}

        {findWishListItem ? (
          <div
            onClick={removedWishList}
            className="border flex border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
            hover:bg-transparent cursor-pointer hover:text-primary transition text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 mr-2 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            Wishlist Added
          </div>
        ) : (
          <div
            onClick={addToWishList}
            className="border flex border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                        hover:bg-transparent cursor-pointer hover:text-primary transition text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 mr-2 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            Wishlist
          </div>
        )}
      </div>
      {/* <!-- add to cart button end --> */}
      {/* <!-- product share icons --> */}
      <div className="flex space-x-3 mt-4">
        <h1>Share</h1>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=totoshop.tech/product/${product._id}&quote=Awesome%20Product!`}
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
            viewBox="0 0 512 512"
          >
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=Awesome%20Product!&url=totoshop.tech/product/${product._id}`}
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
        </a>
        <a
          href={`https://wa.me/?text=Awesome%20Product!%20totoshop.tech/product/${product._id}`}
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
