// import { HeartIcon, SearchIcon } from "@heroicons/react/solid";

// function SingleArrival({ product, hot }) {
//   return (
//     <div className="group rounded bg-white shadow overflow-hidden relative border">
//       <div className="relative">
//         <img src={product?.image} className="w-full" />

//         {/* sometime hot sele */}
//         {hot && (
//           <div className="absolute top-0 left-0 p-4 text-white font-semibold bg-primary rounded-br-xl z-30">
//             Hot
//           </div>
//         )}

//         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
//           <a
//             href="view"
//             className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
//           >
//             <SearchIcon className="h-5 w-5" />
//           </a>
//           <a
//             href="#"
//             className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
//           >
//             <HeartIcon className="h-5 w-5" />
//           </a>
//         </div>
//       </div>
//       <div className="pt-4 pb-3 px-4">
//         <a href="view.html">
//           <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
//             {product?.title}
//           </h4>
//         </a>
//         <div className="group-hover:hidden transition-all ease-in">
//           <div className="flex items-baseline mb-1 space-x-2">
//             <p className="text-xl text-primary font-roboto font-semibold">
//               ${product.price}
//             </p>
//             <p className="text-sm text-gray-400 font-roboto line-through">
//               $55.00
//             </p>
//           </div>
//           <div className="flex items-center">
//             <div className="flex gap-1 text-sm text-yellow-400">
//               <span>
//                 <i className="fas fa-star"></i>
//               </span>
//               <span>
//                 <i className="fas fa-star"></i>
//               </span>
//               <span>
//                 <i className="fas fa-star"></i>
//               </span>
//               <span>
//                 <i className="fas fa-star"></i>
//               </span>
//               <span>
//                 <i className="fas fa-star"></i>
//               </span>
//             </div>
//             <div className="text-xs text-gray-500 ml-3">({product.rating})</div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute -bottom-32 group-hover:bottom-[17px] transition-all ease-in-out left-[15px]">
//         <a
//           href="#"
//           className="block w-full py-2 px-7 rounded-md text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
//         >
//           Add to Cart
//         </a>
//       </div>
//     </div>
//   );
// }

// export default SingleArrival;

// // back home

import { HeartIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../../../slices/appSlice";

function SingleArrival({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartData = useSelector(selectItems);

  const CartId = !!cartData.find((item) => !!(item.productId === product._id));

  const AddToCart = () => {
    dispatch(
      addToBasket({
        productId: product._id,
      })
    );
  };
  return (
    <div className="group rounded bg-white shadow overflow-hidden">
      <div className="relative">
        <img src={product?.image} className="w-full h-[205px] object-contain" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <div
            onClick={() => router.push(`/product/${product._id}`)}
            className="text-white text-lg w-9 h-9 cursor-pointer rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <SearchIcon className="h-5 w-5" />
          </div>
          <div
            onClick={() => router.push("/wishlist")}
            className="text-white text-lg w-9 h-9 rounded-full cursor-pointer bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <HeartIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <div onClick={() => router.push(`/product/${product._id}`)}>
          <h4 className="uppercase font-medium text-md cursor-pointer mb-2 text-gray-800 hover:text-primary transition">
            {product?.title}
          </h4>
        </div>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            ${product?.price?.toFixed(2)}
          </p>
          <p className="text-sm text-gray-400 font-roboto line-through">
            ${(product?.price * 1.6)?.toFixed(2)}
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
      {CartId ? ( 
        <div className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b cursor-not-allowed bg-opacity-80">
          Already Added
        </div>
      ) : (
        <div
          onClick={AddToCart}
          className="block w-full py-1 text-center cursor-pointer text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
        >
          Add to Cart
        </div>
      )}
    </div>
  );
}

export default SingleArrival;
