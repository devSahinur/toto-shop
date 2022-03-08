import { useRouter } from "next/router";
import React from "react";

function EditeProduct() {
  const router = useRouter();
  const { id } = router.query;
  return <div>I am the single Edite Product with the id of {id}</div>;
}

export default EditeProduct;
