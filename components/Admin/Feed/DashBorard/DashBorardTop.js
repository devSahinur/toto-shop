import React from "react";
import {
  CurrencyDollarIcon,
  AcademicCapIcon,
  ClipboardCopyIcon,
  DuplicateIcon,
} from "@heroicons/react/outline";

function DashBorardTop() {
  const topNav = [
    {
      id: 1,
      text: "Amount Due",
      number: "171968",
      Icon: CurrencyDollarIcon,
      price: true,
      color: "red-500",
    },
    {
      id: 2,
      text: "Customers",
      number: "3",
      Icon: AcademicCapIcon,
      color: "indigo-500",
    },
    {
      id: 3,
      text: "Invoice",
      number: "5",
      Icon: ClipboardCopyIcon,
      color: "blue-600",
    },
    {
      id: 4,
      text: "Estimatex",
      number: "2",
      Icon: DuplicateIcon,
      color: "indigo-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-4">
      {/* Single Dashborar top Item */}

      {topNav?.map(({ id, text, number, Icon, color, price }) => (
        <div key={id} className="bg-white p-3 rounded-md flex items-center justify-between cursor-pointer shadow-md hover:shadow-lg">
          {/* SIngle left  */}
          <div className="flex flex-col space-y-1">
            <h1 className="text-xl font-bold">
              {" "}
              {price && "$"} {number}
            </h1>
            <p className="text-gray-500">{text}</p>
          </div>

          {/* Icon */}
          <div className={`bg-blue-400 p-1 rounded-full`}>
            <Icon className={`h-6 `} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashBorardTop;
