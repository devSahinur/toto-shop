import { useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

export const ProductImage = ({ product }) => {
  const [mainImg, setMainImg] = useState(product.image[0]);

  return (
    <div>
      <div>
        {/* <img id="main-img" src={mainImg} className="w-full" /> */}
        <InnerImageZoom src={mainImg} />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div onClick={() => setMainImg(product.image[0])}>
          <img
            src={product.image[0]}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[0] ? "border-primary" : ""
            }`}
          />
        </div>
        <div onClick={() => setMainImg(product.image[1])}>
          <img
            src={product.image[1]}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[1] ? "border-primary" : ""
            }`}
          />
        </div>
        <div onClick={() => setMainImg(product.image[2])}>
          <img
            src={product.image[2]}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[2] ? "border-primary" : ""
            }`}
          />
        </div>
        <div onClick={() => setMainImg(product.image[3])}>
          <img
            src={product.image[3]}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[3] ? "border-primary" : ""
            }`}
          />
        </div>
        <div onClick={() => setMainImg(product.image[4])}>
          <img
            src={product.image[4]}
            className={`single-img w-full cursor-pointer  border ${
              mainImg === product.image[4] ? "border-primary" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};
