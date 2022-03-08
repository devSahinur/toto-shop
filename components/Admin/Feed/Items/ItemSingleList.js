import {
  DotsHorizontalIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, { useState } from "react";

function ItemSingleList({ item, setChecked, confirmDelete }) {
  const [dropdown, setDropDown] = useState(false);

  const router = useRouter();

  return (
    <div className="flex items-center justify-between text-xs md:text-base text-gray-500 py-3 px-5 bg-white border border-t">
      <input
        type="checkbox"
        onChange={() => setChecked(item.id)}
        checked={item.check}
      />
      <p>
        {item?.title.length > 15
          ? item.title.substring(0, 15) + "..."
          : item.title}
      </p>
      <p className="hidden md:inline-flex">{item?.brand}</p>
      <p>$ {item?.price}</p>
      <div className="text-gray-600 relative">
        <DotsHorizontalIcon
          onClick={() => setDropDown(!dropdown)}
          className="h-5 cursor-pointer"
        />

        {dropdown && (
          <div className="absolute z-[100] animationFadein bottom-5 right-0 md:z-50 px-1 py-2 shadow bg-white rounded-md text-gray-500 font-semibold w-[200px]">
            {/* edite section */}
            <div
              onClick={() =>
                router.push(`/admin/product?name=Edite Product&id=${item?._id}`)
              }
              className="flex items-center space-x-4 px-2 py-1 border-b cursor-pointer"
            >
              <PencilIcon className="h-4" />
              <p>Edit</p>
            </div>
            {/* Delete */}
            <div
              onClick={() => confirmDelete(item?._id)}
              className="flex items-center space-x-4 px-2 py-1 cursor-pointer"
            >
              <TrashIcon className="h-4" />
              <p>Delete</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemSingleList;
