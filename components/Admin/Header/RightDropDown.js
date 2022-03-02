import Image from "next/image";
import React from "react";

function RightDropDown({ id, icon, text, active }) {
  return (
    <div
      className={`px-2 py-1 flex items-center space-x-4 hover:bg-[#F1F5F9] transition-all ease-in mb-2 ${
        active ? "bg-[#F1F5F9]" : "bg-transparent"
      }`}
    >
      <div className="text-header400 bg-[#F1F5F9] py-2 px-4 font-bold">
        <p>{icon}</p>
      </div>

      {/* descrption */}
      <p className="text-gray-600 font-semibold text-xs">{text}</p>
    </div>
  );
}

export default RightDropDown;
