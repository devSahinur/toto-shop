import React from "react";

function SidebarItem({ item, selectItem }) {
  const { Icon, active, text } = item;
  return (
    <div
      onClick={() => selectItem(item.id)}
      className={`flex items-center relative hover:bg-blue-100 space-x-4 transition-all ease-in-out group cursor-pointer px-3 py-2 ${
        active ? " bg-blue-100 borderRight" : "bg-transparent"
      }`}
    >
      <Icon
        className={`h-6 ${
          active ? "text-[#5D6CDD] " : "text-gray-500"
        } group-hover:text-gray-800 font-bold`}
      />
      <p
        className={`text-sm font-medium ${
          active ? "text-[#5D6CDD]" : "text-gray-700"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default SidebarItem;
