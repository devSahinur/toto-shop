function SingleWishList({ product }) {
  return (
    <>
      {/* <!-- single wishlist --> */}
      <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
        {/* <!-- cart image --> */}
        <div className="w-28 flex-shrink-0">
          <img src={product.image[0].img} className="w-full" />
        </div>
        {/* <!-- cart image end --> */}
        {/* <!-- cart content --> */}
        <div className="md:w-1/3 w-full">
          <h2 className="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
            {product.title}
          </h2>
          <p className="text-gray-500 text-sm">
            Availability:{" "}
            {product.availability ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
        </div>
        {/* <!-- cart content end --> */}
        <div className="">
          <p className="text-primary text-lg font-semibold">${product.price}</p>
        </div>
        {product.availability ? (
          <a
            href="#"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Add to cart
          </a>
        ) : (
          <a
            href="#"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded uppercase font-roboto font-medium cursor-not-allowed bg-opacity-80"
          >
            Add to cart
          </a>
        )}

        <div className="text-gray-600 hover:text-primary cursor-pointer">
          <i className="fas fa-trash"></i>
        </div>
      </div>
      {/* <!-- single wishlist end --> */}
    </>
  );
}

export default SingleWishList;
