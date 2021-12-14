import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

function SingleShopItem({ product, hot }) {
  return (
    <div className="group rounded-md bg-white shadow overflow-hidden relative border hover:shadow-lg md:flex">
      <div className="relative">
        {/* image div */}
        <div className="w-[300px] h-[285px]">
          <img src={product?.image} className="w-full h-full" />
        </div>

        {/* sometime hot sele */}
        {hot && (
          <div className="absolute top-0 left-0 p-4 text-white font-semibold bg-primary rounded-br-xl z-30">
            Hot
          </div>
        )}
      </div>

      <div className="py-6 px-4 space-y-3 md:flex-grow">
        <a href="view.html">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.title}
          </h4>
        </a>
        {/* Product price */}
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            ${product.price}
          </p>
          <p className="text-md text-gray-400 font-roboto line-through">
            $55.00
          </p>
        </div>
        {/* product reating */}

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
          <div className="text-md text-gray-500 ml-3">({product.rating})</div>
        </div>

        {/* product detils */}
        <p className="text-gray-400 pb-2 pr-20 md:pr-4">{product?.details}</p>

        {/* Product button */}

        <div className="flex items-center space-x-5">
          <button className="btn flex items-center space-x-2">
            <ShoppingCartIcon className="h-4" /> <span>Add to Cart</span>
          </button>
          <button className="btn-outline flex items-center space-x-2">
            <HeartIcon className="h-4" /> <span>Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleShopItem;
