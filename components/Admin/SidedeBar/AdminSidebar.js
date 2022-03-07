import React, { useState } from "react";
import { HomeIcon, XIcon } from "@heroicons/react/outline";
import SidebarItem from "./SidebarItem";

function AdminSidebar({ showSidebar, setShowSidebar }) {
  const [sidebars, setSidebars] = useState([
    {
      id: 1,
      Icon: HomeIcon,
      active: true,
      route: "/admin",
      text: "Dshborard",
    },
    {
      id: 2,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Customers",
    },
    {
      id: 3,
      Icon: HomeIcon,
      active: false,
      route: "/admin/items",
      text: "Items",
    },
    {
      id: 4,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Estimates",
    },
    {
      id: 5,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Invoices",
    },
    {
      id: 6,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Recurring Invoices",
    },
    {
      id: 7,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Payments",
    },
    {
      id: 8,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Expenses",
    },
    {
      id: 9,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Modules",
    },
    {
      id: 10,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Users",
    },
    {
      id: 11,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Reports",
    },
    {
      id: 12,
      Icon: HomeIcon,
      active: false,
      route: "/admin/customers",
      text: "Settings",
    },
  ]);

  const selectSingleItem = (id) => {
    const findIndex = sidebars.findIndex((item) => item.id === id);
    let newSidebars = [...sidebars];
    newSidebars.map((item) => {
      return (item.active = false);
    });
    if (findIndex >= 0) {
      newSidebars[findIndex].active = true;
      setSidebars(newSidebars);
    }
  };

  return (
    <div
      className={`max-h-screen overflow-y-scroll hidden md:block ${
        showSidebar && "CustomCallsMenu"
      }`}
    >
      {/* Sidebar Wrapper  */}
      <div>
        <div className="space-y-1 pt-12 md:pt-8">
          {sidebars?.map((item) => (
            <SidebarItem
              key={item.id}
              selectItem={selectSingleItem}
              item={item}
            />
          ))}
        </div>
        {/* colseicon */}
        <div
          onClick={() => setShowSidebar(false)}
          className="absolute top-4 right-5 cursor-pointer text-white transform hover:scale-125 transition-all ease-in"
        >
          <XIcon className="h-6" />
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
