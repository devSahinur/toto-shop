import { useRouter } from "next/router";
import React from "react";
import EditeProduct from "./EditeProduct";
import ProductBottom from "./ProductBottom";
import ProductTop from "./ProductTop";

function ProductFeed() {
  const router = useRouter();
  return (
    <div>
      <ProductTop />
      {router.query?.id ? <EditeProduct /> : <ProductBottom />}
    </div>
  );
}

export default ProductFeed;
