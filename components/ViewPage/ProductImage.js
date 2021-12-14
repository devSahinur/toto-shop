import { useState } from "react";

export const ProductImage = ({ product }) => {
  const [mainImg, setMainImg] = useState(product.image[0].img);
  
  return (
    <div>
      <div>
        <img id="main-img" src={mainImg} className="w-full" />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div onClick={() => setMainImg(product.image[0].img)}>
          <img
            src={product.image[0].img}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[0].img ? "border-primary" : ""
            }`}
          />
        </div>
        <div onClick={() => setMainImg(product.image[1].img)}>
          <img
            src={product.image[1].img}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[1].img ? "border-primary" : ""
            }`}
          />
        </div>
        <div onClick={() => setMainImg(product.image[2].img)}>
          <img
            src={product.image[2].img}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[2].img ? "border-primary" : ""
            }`}
          />
        </div>
        <div onClick={() => setMainImg(product.image[3].img)}>
          <img
            src={product.image[3].img}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[3].img ? "border-primary" : ""
            }`}
          />
        </div>
        <div onClick={() => setMainImg(product.image[4].img)}>
          <img
            src={product.image[4].img}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[4].img ? "border-primary" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};
