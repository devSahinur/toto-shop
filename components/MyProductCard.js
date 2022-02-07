import React from "react";

function MyProductCard() {
  return (
    <div className="flex hover:bg-[#E9EFFF] cursor-pointer items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
      {/* <!-- product image --> */}
      <div className="w-32 flex-shrink-0">
        <img src="https://i.ibb.co/2Y1JJ6b/product1.jpg" className="w-full" />
      </div>
      {/* <!-- product image end --> */}
      {/* <!-- product content --> */}
      <div className="md:w-1/3 w-full">
        <h2 className="text-gray-800 mb-3 xl:text-xl text-lg font-medium uppercase">
          {/* {productData?.title}  */} hello titile
        </h2>
        <p className="text-primary font-semibold">$56</p>
      </div>
      {/* <!-- product content end --> */}
      {/* <!-- product sold --> */}
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
        <div className="h-8 w-10 flex items-center justify-center">
          {/* {product?.sold} */} 0
        </div>
      </div>
      {/* <!-- product quantity end --> */}
      <div className="ml-auto md:ml-0">
        <p className="text-green-600 text-lg font-semibold">{/* 556 */}</p>
      </div>
      <div className="text-gray-600 hover:text-green-600 cursor-pointer">
        <i class="fas fa-edit"></i>
      </div>
      <div className="text-gray-600 hover:text-primary cursor-pointer">
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
}

export default MyProductCard;
