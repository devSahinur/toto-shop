import { HeartIcon, SearchIcon } from "@heroicons/react/solid";

function SingleArrival({ product }) {
  return (
    <div className="group rounded bg-white shadow overflow-hidden">
      <div className="relative">
        <img src={product?.image} className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <a
            href="view"
            className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <SearchIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <HeartIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="view.html">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.title}
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            ${product.price}
          </p>
          <p className="text-sm text-gray-400 font-roboto line-through">
            $55.00
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
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to Cart
      </a>
    </div>
  );
}

export default SingleArrival;
