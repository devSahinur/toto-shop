import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

function NotfoundProduct() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center mt-8 md:mt-0">
      <div className="max-w-5xl mx-auto flex items-center flex-col space-y-6">
        <div>
          <Image
            src="https://i.ibb.co/3Y00Tq4/images.jpg"
            height={200}
            width={300}
            className="object-contain cursor-pointer"
          />
        </div>

        <button
          onClick={() => router.push("/user/addproduct")}
          className="px-4 py-3 bg-green-400 shadow-md rounded-lg text-gray-50 font-semibold transform hover:scale-125 transition-all ease-in-out"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default NotfoundProduct;
