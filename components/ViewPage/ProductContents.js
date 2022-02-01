import { useState } from "react";
import { RatingStar } from "./RatingStar";

export const ProductContents = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  let decrementQuantity = () => setQuantity(quantity - 1);

  if (quantity <= 1) {
    decrementQuantity = () => setQuantity(1);
  }
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
        <span className="text-gray-500 text-base line-through">$500.00</span>
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
        <a
          href="#"
          className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center"
        >
          <span className="mr-2">
            <i className="fas fa-shopping-bag"></i>
          </span>{" "}
          Add to cart
        </a>
        <a
          href="#"
          className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm"
        >
          <span className="mr-2">
            <i className="far fa-heart"></i>
          </span>{" "}
          Wishlist
        </a>
      </div>
      {/* <!-- add to cart button end --> */}
      {/* <!-- product share icons --> */}
      <div className="flex space-x-3 mt-4">
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      {/* <!-- product share icons end --> */}
    </div>
  );
};
