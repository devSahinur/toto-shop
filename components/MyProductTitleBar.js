import { useRouter } from "next/router";
import React from "react";

function MyProductTitleBar() {
  const router = useRouter();
  return (
    <div className="bg-gray-200 hidden md:flex mb-4  p-5 py-2 justify-between">
      <p className="text-gray-600  text-center">Product Title And Price</p>
      <p className="text-gray-600  text-center "> {/* Quantity*/}</p>
      <p className=" text-gray-600  text-center">Sold</p>
      <p className=" text-gray-600  text-center">Quantity</p>
      <p
        onClick={() => router.push("/user/addproduct")}
        className="  cursor-pointer text-green-600 text-center"
      >
        Add Product
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
      </p>
    </div>
  );
}

export default MyProductTitleBar;
