import Link from "next/link";
import React from "react";

function MyProductCard({ product, confirmDelete }) {
  const truncateDescription =
    product.title.length > 30
      ? `${product.title.substring(0, 30)}...`
      : product.title;

  return (
    <div className="flex hover:bg-[#E9EFFF] cursor-pointer items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
      {/* <!-- product image --> */}
      <div className="w-32 flex-shrink-0">
        <img src={product.image[0]} className="w-full" />
      </div>
      {/* <!-- product image end --> */}
      {/* <!-- product content --> */}
      <div className="md:w-1/3 w-full">
        <h2 className="text-gray-800 mb-3 xl:text-md text-md font-medium">
          {truncateDescription}
        </h2>
        <p className="text-primary font-semibold">$ {product.price}</p>
      </div>
      {/* <!-- product content end --> */}
      {/* <!-- product sold --> */}
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
        <div className="h-8 w-10 flex items-center justify-center">
          {/* {product?.sold} */} 0
        </div>
      </div>

      {/* product Quantity */}
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
        <div className="h-8 w-10 flex items-center justify-center">
          {/* {product?.sold} */} {product.totalQuantity}
        </div>
      </div>
      {/* TODO: product quantity end */}
      {/* <!-- product quantity end --> */}
      <div className="ml-auto md:ml-0">
        <p className="text-green-600 text-lg font-semibold">{/* 556 */}</p>
      </div>
      <Link href={`/user/editproduct/${product._id}`}>
        <div className="text-gray-600 hover:text-green-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
      <div
        onClick={() => confirmDelete(product._id)}
        className="text-gray-600 hover:text-primary cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default MyProductCard;
