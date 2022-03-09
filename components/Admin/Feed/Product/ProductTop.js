import { useRouter } from "next/router";
import React from "react";
import FeedCommunTopHeader from "../FeedCommunTopHeader";

function ProductTop() {
  const router = useRouter();
  const route = {
    text: "Items",
    route: "/admin/items",
    nested: router.query.name,
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold pb-4">Items </h1>
      {/* Bottom */}
      <div className="py-6 flex items-center justify-between">
        {/* TODO: left item */}
        <FeedCommunTopHeader item={route} />
      </div>
    </div>
  );
}

export default ProductTop;
