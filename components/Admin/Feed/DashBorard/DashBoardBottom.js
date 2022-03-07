import {
  ArrowNarrowDownIcon,
  DotsHorizontalIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import SingleListItem from "./SingleListItem";

function DashBoardBottom() {
  const dueInvoice = [
    { id: 1, date: "2022/03/13", name: "Faysal", amount: "750.00" },
    { id: 1, date: "2022/03/12", name: "Naeem", amount: "50.00" },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-8">
      {/* ottom left */}
      <div>
        {/* left top */}
        <div className="flex items-center justify-between py-3">
          <h3 className="text-xl font-semibold">Due Invoices</h3>

          <button className="px-2 py-1 text-header400 border-2 rounded-md text-sm border-header500">
            View All
          </button>
        </div>
        {/* LIft items s */}
        <div>
          {/* div top */}
          <div className="flex items-center justify-between bg-indigo-100 px-4 py-3 rounded-md border-b-3 shadow">
            <div className="flex items-center space-x-2 cursor-pointer">
              <p className="uppercase text-xs font-bold">due on </p>
              <ArrowNarrowDownIcon className="h-4" />
            </div>
            {/* customer */}

            <p className="uppercase text-xs font-bold text-gray-500 cursor-pointer">
              Customer
            </p>

            {/* amount due */}

            <p className="uppercase text-xs font-bold text-gray-500 cursor-pointer">
              Amount Due
            </p>

            <div></div>
          </div>

          {/* Bottom list */}
          {dueInvoice?.map((item) => (
            <SingleListItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* bottom right */}
      <div>
        {/* left top */}
        <div className="flex items-center justify-between py-3">
          <h3 className="text-xl font-semibold">Recent Estimates</h3>

          <button className="px-2 py-1 text-header400 border-2 rounded-md text-sm border-header500">
            View All
          </button>
        </div>
        {/* LIft items s */}
        <div>
          {/* div top */}
          <div className="flex items-center justify-between bg-indigo-100 px-4 py-3 rounded-md border-b-3 shadow">
            <div className="flex items-center space-x-2 cursor-pointer">
              <p className="uppercase text-xs font-bold">date </p>
            </div>
            {/* customer */}

            <p className="uppercase text-xs font-bold text-gray-500 cursor-pointer">
              Customer
            </p>

            {/* amount due */}

            <p className="uppercase text-xs font-bold text-gray-500 cursor-pointer">
              Amount Due
            </p>

            <div></div>
          </div>

          {dueInvoice?.map((item) => (
            <SingleListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashBoardBottom;
