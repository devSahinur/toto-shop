import {
  DotsHorizontalIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";

function CustomerSingleList({ item, setChecked }) {
  const [dropdown, setDropDown] = useState(false);
  return (
    <div className="flex items-center justify-between text-sm text-gray-500 py-3 px-5 bg-white border border-t">
      <input
        type="checkbox"
        onChange={() => setChecked(item.id)}
        checked={item.check}
      />
      <p>{item?.name}</p>
      <p className="hidden md:inline-flex">{item?.phone}</p>
      <p>{item?.amount}</p>
      <p>{item?.date}</p>
      <div className="text-gray-600 relative">
        <DotsHorizontalIcon
          onClick={() => setDropDown(!dropdown)}
          className="h-5 cursor-pointer"
        />

        {dropdown && (
          <div className="absolute animationFadein bottom-5 right-0 z-50 px-1 py-2 shadow bg-white rounded-md text-gray-500 font-semibold w-[200px]">
            {/* edite section */}
            <div className="flex items-center space-x-4 px-2 py-1 border-b cursor-pointer">
              <PencilIcon className="h-4" />
              <p>Edit</p>
            </div>
            {/* View */}
            <div className="flex items-center space-x-4 px-2 py-1 border-b cursor-pointer">
              <EyeIcon className="h-4" />
              <p>View</p>
            </div>
            {/* Delete */}
            <div className="flex items-center space-x-4 px-2 py-1 cursor-pointer">
              <TrashIcon className="h-4" />
              <p>Delete</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerSingleList;
