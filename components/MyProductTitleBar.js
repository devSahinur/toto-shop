import React from "react";

function MyProductTitleBar() {
  return (
    <div className="bg-gray-200 hidden md:flex mb-4  p-5 py-2 justify-between">
      <p className="text-gray-600  text-center">Product Title And Price</p>
      <p className="text-gray-600  text-center "> {/* Quantity*/}</p>
      <p className=" text-gray-600  text-center">Sold</p>
      <p className="  text-green-600 text-center">
        Add Product
        <i className="fas text-green-600 fa-plus-circle"></i>
      </p>
    </div>
  );
}

export default MyProductTitleBar;
