import {
  ArrowDownIcon,
  ArrowNarrowDownIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import ItemSingleList from "./ItemSingleList";

function ItemsBottom() {
  const [customerList, setCustomerList] = useState([
    {
      id: 1,
      name: "Faysal",
      phone: "Api call",
      amount: "135.00",
      date: "2022/03/07",
      check: false,
    },
    {
      id: 2,
      name: "Faysal",
      phone: "Api call",
      amount: "135.00",
      date: "2022/03/07",
      check: true,
    },
    {
      id: 90,
      name: "Faysal",
      phone: "Api call",
      amount: "135.00",
      date: "2022/03/07",
      check: false,
    },
  ]);
  const [allCheck, setAllCheck] = useState(false);

  const setChecked = (id) => {
    const findIndex = customerList.findIndex((item) => item.id === id);

    let NewCustomerList = [...customerList];

    if (findIndex >= 0) {
      if (NewCustomerList[findIndex].check) {
        setAllCheck(false);

        // alert("already checked");
        NewCustomerList[findIndex].check = false;
      } else {
        setAllCheck(false);

        NewCustomerList[findIndex].check = true;
      }
    }
    setCustomerList(NewCustomerList);
  };

  const checkAll = () => {
    let NewCustomerList = [...customerList];

    if (allCheck) {
      setAllCheck(false);
      NewCustomerList?.map((item) => (item.check = false));
      setCustomerList(NewCustomerList);
    } else {
      setAllCheck(true);

      NewCustomerList?.map((item) => (item.check = true));
      setCustomerList(NewCustomerList);
    }
  };

  // todo action drop down
  const [actiondrop, setActiondrop] = useState(false);

  return (
    <div>
      {/* TODO: list items  top */}
      <div className="flex py-3 items-center justify-end">
        <div className="flex items-center relative space-x-2 text-header500 font-semibold cursor-pointer">
          <p onClick={() => setActiondrop(!actiondrop)}>Actions</p>
          <ArrowDownIcon className="h-4" />
          {actiondrop && (
            <div className="absolute animationFadein top-6 right-0 z-50 px-1 py-2 shadow bg-white rounded-md text-gray-500 font-semibold w-[200px]">
              {/* single content */}
              <div
                className="flex items-center space-x-4 px-2 py-1 cursor-pointer"
                onClick={() => setActiondrop(false)}
              >
                <TrashIcon className="h-4" />
                <p>Delete</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* top Header */}
      <div className="flex items-center justify-between py-3 px-5 bg-indigo-100">
        <input type="checkbox" checked={allCheck} onChange={checkAll} />
        <div className="flex items-center space-x-2 cursor-pointer">
          <p className="uppercase font-semibold text-gray-500 text-sm">Name</p>
          <ArrowNarrowDownIcon className="h-4" />
        </div>
        <p className="uppercase font-semibold text-gray-500 text-sm">unit</p>
        <p className="uppercase font-semibold text-gray-500 text-sm">price</p>
        <p className="uppercase font-semibold text-gray-500 text-sm">
          Added on
        </p>
        <div className=""></div>
      </div>

      {/* all the lisht */}
      <div>
        {/* there we map */}
        {customerList?.map((item) => (
          <ItemSingleList setChecked={setChecked} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemsBottom;
