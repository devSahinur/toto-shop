import React from "react";
import { useRouter } from "next/router";
function FeedCommunTopHeader({ item }) {
  const router = useRouter();
  return (
    <div className="flex items-center space-x-3 tex-sm md:text-base text-gray-700 cursor-pointer">
      <p className="text-semibold" onClick={() => router.push("/admin")}>
        Home
      </p>{" "}
      <span>/</span>{" "}
      <p onClick={() => router.push(item?.route)}>{item?.text}</p>
    </div>
  );
}

export default FeedCommunTopHeader;
