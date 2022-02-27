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
              <i className="fas fa-shopping-bag"></i>
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
              <i className="fas fa-shopping-bag"></i>
            </span>{" "}
            Add to cart
          </div>
        )}

        {findWishListItem ? (
          <div
            onClick={removedWishList}
            className="border cursor-pointer bg-opacity-80 border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                        hover:bg-transparent hover:text-primary transition text-sm"
          >
            <span className="mr-2">
              <i className="far fa-heart"></i>
            </span>{" "}
            Wishlist Added
          </div>
        ) : (
          <div
            onClick={addToWishList}
            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                        hover:bg-transparent cursor-pointer hover:text-primary transition text-sm"
          >
            <span className="mr-2">
              <i className="far fa-heart"></i>
            </span>{" "}
            Wishlist
          </div>
        )}
      </div>
      {/* <!-- add to cart button end --> */}
      {/* <!-- product share icons --> */}
      <div className="flex space-x-3 mt-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=totoshop.tech/product/${product._id}&quote=Awesome%20Product!`}
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=Awesome%20Product!&url=totoshop.tech/product/${product._id}`}
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href={`https://wa.me/?text=Awesome%20Product!%20totoshop.tech/product/${product._id}`}
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      {/* <!-- product share icons end --> */}
    </div>
  );
};
