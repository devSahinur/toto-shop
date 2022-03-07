import { FilterIcon, PlusIcon } from "@heroicons/react/outline";
import React from "react";
import FeedCommunTopHeader from "../FeedCommunTopHeader";

function CustomerTop() {
  const route = {
    text: "Customers",
    route: "/admin/customers",
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold pb-4">Customers </h1>
      {/* Bottom */}
      <div className="py-6 flex items-center justify-between">
        {/* TODO: left item */}
        <FeedCommunTopHeader item={route} />
        {/* FIXME: right */}
        <div className="flex items-center space-x-3 md:space-x-6">
          {/* FIlter Buttom */}
          <button className="bg-transparent hidden border-2 border-[#353182] md:flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-2 hover:shadow-lg text-[#353182] rounded-md shadow-md text-sm">
            <p>Filter</p>
            <FilterIcon className="h-5" />
          </button>
          {/* newCustomer button */}
          <button className="bg-[#353182] hover:bg-indigo-700 flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-2 hover:shadow-lg text-white font-semibold rounded-md shadow-md text-sm">
            <PlusIcon className="h-5" />
            <p className="">New Customer</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerTop;
