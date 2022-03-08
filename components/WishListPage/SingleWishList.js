import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../../slices/appSlice";
import { removeFromWish, removeSingleWish } from "../../slices/wishSlice";

function SingleWishList({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const cartDataAll = useSelector(selectItems);

  const findCartData = cartDataAll.find(
    (item) => item.product._id === product._id
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

  const removeWishlistHandler = async () => {
    dispatch(removeFromWish({ _id: product?._id }));
    dispatch(removeSingleWish(product?._id));

    await fetch("/api/wishlist", {
      method: "DELETE",
      body: JSON.stringify({ itemID: product.id }),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <>
      <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
        <div className="w-28 flex-shrink-0">
          <img
            src={
              Array.isArray(product?.image) ? product?.image[0] : product?.image
            }
            className="w-full"
          />
        </div>
        <div className="md:w-1/3 w-full">
          <h2 className="text-gray-800 mb-1 xl:text-base text-base font-medium uppercase">
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
        <div className="">
          <p className="text-primary text-lg font-semibold">${product.price}</p>
        </div>
        {product.availability ? (
          <>
            {findCartData ? (
              <a
                onClick={() => router.push("/cart")}
                className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 transition uppercase font-roboto font-medium cursor-not-allowed"
              >
                Go to Cart
              </a>
            ) : (
              <a
                href="#"
                className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                onClick={AddToCart}
              >
                Add to cart
              </a>
            )}
          </>
        ) : (
          <a
            href="#"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded uppercase font-roboto font-medium bg-opacity-80 cursor-not-allowed"
          >
            Add to cart
          </a>
        )}

        <div
          className="text-gray-600 hover:text-primary cursor-pointer"
          onClick={removeWishlistHandler}
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
    </>
  );
}

export default SingleWishList;
