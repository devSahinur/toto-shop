import {
  ChatIcon,
  DocumentIcon,
  DotsHorizontalIcon,
  ExclamationIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";

function SingleListItem({ item }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-md border-t-2 bg-gray-50 shadow-md">
      <p className="uppercase text-sm font-bold text-gray-400">{item?.date}</p>

      {/* customer */}

      <p className="uppercase text-sm font-bold text-gray-400 cursor-pointer">
        {item?.name}
      </p>

      {/* amount due */}

      <p className="uppercase text-sm font-bold text-gray-400 cursor-pointer">
        $ {item?.amount}
      </p>

      <div className="text-gray-600 relative">
        <DotsHorizontalIcon
          onClick={() => setDropdown(!dropdown)}
          className="h-5 cursor-pointer"
        />

        {dropdown && (
          <div className="absolute animationFadein bottom-5 right-0 z-50 px-1 py-2 shadow bg-white rounded-md text-gray-500 font-semibold w-[200px]">
            {/* view */}
            <div className="flex items-center space-x-4 px-2 py-1 border-b cursor-pointer">
              <EyeIcon className="h-4" />
              <p>View</p>
            </div>
            {/* send invoice */}
            <div className="flex items-center space-x-4 px-2 py-1 border-b cursor-pointer">
              <ExclamationIcon className="h-4" />
              <p>Send Invoice</p>
            </div>
            {/* chat */}
            <div className="flex items-center space-x-4 px-2 py-1 border-b cursor-pointer">
              <ChatIcon className="h-4" />
              <p>Mark as sent</p>
            </div>
            {/* clone invoice */}
            <div className="flex items-center space-x-4 px-2 py-1 border-b cursor-pointer">
              <DocumentIcon className="h-4" />
              <p>Clone Invoice</p>
            </div>
            {/* delete */}
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

export default SingleListItem;
